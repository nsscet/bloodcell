<template lang="html">
  <div class="">
    <h2>Requirements</h2>
    <hr>
    <div class="" v-for="requirement in requirements">
      <div class="card" v-if="requirement.isClosed === 0">
        <div class="card-body">
          <strong>{{requirement.quantity}} units of {{requirement.bloodGroup}} blood required</strong>
          <br>
          Hospital ID: {{requirement.hospitalId}}
          <br>
          Patient ID: {{requirement.patientId}}
          <br>
          Date of posting: {{requirement.timeOfPosting}}
          <br>
          Type: {{requirement.typeOfRequirement}}
          <hr>
          <!-- <div  v-if="this.role === 'sadmin' || this.role === 'organisation'"> -->
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" @click="initReq(requirement)">
  <i class='fa fa-plus'/> Add Donor</button>
          <!-- </div> -->
          <button type="button" name="button" class="btn btn-success" @click="closeRequirement(requirement)"><i class="fa fa-check-circle"></i> Close</button>
        </div>
      </div>
      <br>

    </div>
  <div class="modal"  id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Add Donor</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        <div class="col-md-10">
            <label >Name</label>&nbsp<input type="text" class="form-control w-100 input" v-model="name">
    
     
     
         <label>Place of Stay</label>&nbsp<input type="text" class="form-control w-100 input " v-model="placeOfStay">
     
   
       
         <label >Email</label>&nbsp<input type="email" class="form-control w-100 input" v-model="email">
      
         <label>College Id</label>&nbsp<input type="text" class="form-control w-100 input" v-model="collegeId">

       
         <label>Year of Join</label>&nbsp<input type="text" class="form-control w-100 input" v-model="yearOfJoin">
         <label>Mobile Number</label>&nbsp<input type="text" class="form-control w-100 input" v-model="mobileNo">
     
         <span>Blood Group</span>
            <select class=" form-control w-100 custom-select" name="" v-model="bloodGroup">
              <option class="input" selected value="0+ve">O +ve</option>
              <option class="input" value="O-ve">O-ve</option>
              <option class="input" value="A+ve">A+ve</option>
              <option class="input" value="A-ve">A-ve</option>
              <option class="input" value="B+ve">B+ve</option>
              <option class="input" value="B-ve">B-ve</option>
              <option class="input" value="AB+ve">AB+ve</option>
              <option class="input" value="AB-ve">AB-ve</option>
            </select>
  
          <span>Branch</span>
            <select class=" form-control w-100 custom-select" name="" v-model="branch">
              <option class="input" selected value="Mechanical">Mechanical</option>
              <option class="input" value="Civil">Civil</option>
              <option class="input" value="Electrical">Electrical</option>
              <option class="input" value="Electronics">Electronics</option>
              <option class="input" value="Computer">Computer Science</option>
              <option class="input" value="Architecture">Architecture</option>
              <option class="input" value="Applied">Applied </option>
              <option class="input" value="Industrial">Industrial </option>
              <option class="input" value="MCA">MCA</option>
            </select>  
        <div class="alert" v-show="mobileError">
          {{mobileError}}
        </div>
        </div>
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" @click="addDonor">Submit</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
      </div>

    </div>
  </div>
</div>
  </div>
</template>

<script>
var requirements = {};
var tempRequirement = {};
var name,
  placeOfStay,
  email,
  collegeId,
  yearOfJoin,
  bloodGroup,
  branch,
  mobileNo;

export default {
  data: () => {
    return {
      requirements,
      name,
      placeOfStay,
      email,
      collegeId,
      yearOfJoin,
      bloodGroup,
      branch,
      mobileNo,
      tempRequirement
    };
  },
  computed: {
    mobileError() {
      return this.$store.state.mobileNoErr;
    },
    role() {
      return this.$store.state.role;
    }
  },
  methods: {
    initReq(requirement) {
      this.tempRequirement = requirement;
    },
    closeRequirement: requirement => {
      var postData = {
        patientId: requirement.patientId,
        hospitalId: requirement.hospitalId,
        typeOfRequirement: requirement.typeOfRequirement,
        quantity: requirement.quantity,
        bloodGroup: requirement.bloodGroup,
        isClosed: -1,
        timeOfPosting: requirement.timeOfPosting
      };
      window
        .axios({
          method: "put",
          url: process.env.API_URL + "/admin/requirements",
          withCredentials: true,
          data: postData
        })
        .then(() => {
          requirement.isClosed = -1;
        });
    },
    addDonor() {
      var postData = {
        name: this.name,
        place: this.placeOfStay,
        email: this.email,
        donorId: this.collegeId,
        yearOfJoin: this.yearOfJoin,
        bloodGroup: this.bloodGroup,
        branch: this.branch,
        mobileNumber: this.mobileNo
      };
      window
        .axios({
          method: "post",
          url: process.env.API_URL + "/admin/donor",
          withCredentials: true,
          data: postData
        })
        .then(res => {
          if (res.data.err.code == 11000) {
            var message = "Donor Already Exists!";
            this.$store.commit("setMobileError", message);
          } else {
            var requirement = this.tempRequirement;
            var qty = requirement.quantity;
            var isClosed = 0;
            if (qty > 0)
              qty = requirement.quantity - 1;
            if (qty == 0) {
              isClosed = 1;
            }
            var postData = {
              patientId: requirement.patientId,
              hospitalId: requirement.hospitalId,
              typeOfRequirement: requirement.typeOfRequirement,
              quantity: qty,
              bloodGroup: requirement.bloodGroup,
              isClosed: isClosed,
              timeOfPosting: requirement.timeOfPosting
            };
            window
              .axios({
                method: "put",
                url: process.env.API_URL + "/admin/requirements",
                withCredentials: true,
                data: postData
              })
              .then(res => {
                var curDate = new Date()
                var donationData = {
                  donorId: this.collegeId,
                  hospitalId:requirement.hospitalId,
                  dataOfDonation:curDate,
                  typeOfDonation:requirement.typeOfRequirement,
                  voluntary:false
                }
                window.axios({
                  method:"post",
                  url:process.env.API_URL + "/admin/donation",
                  withCredentials:true,
                  data:donationData
                }).then(res=>{
                  console.log(res)
                }).catch(err=>{
                  console.log(err)
                })
                if (qty == 0) 
                  requirement.isClosed = 1;
                  requirement.quantity = qty;
              })
              .catch(err => {
                console.log(err);
              });
          }
        })
        .catch(err => {
          const message = "Some Error Occured";
          this.$store.commit("setMobileError", message);
        });
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/public/getrequirements")
      .then(res => {
        this.requirements = res.data.requirements;
      })
      .catch(err => {
        throw err;
      });
  }
};
</script>

<style src="../../assets/css/forms.css">
</style>
