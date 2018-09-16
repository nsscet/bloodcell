<template lang="html">
  <div class="">
    <h2>Requirements</h2>
    <hr>
    <div class="" v-for="requirement in requirements">
      <div class="card" v-if="requirement.isClosed == 0">
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
          <br>
          Contact: {{requirement.contactNo}}
          <br>
          Remarks: {{requirement.remarks}}
          <br>
          Donors :
          <div v-for="child in requirement.children">
            <hr>
            Name:{{child.name}}  <button class="btn btn-default" style="border-radius:50%" @click="delinkDonor(requirement,child)"><i class="fa fa-chain-broken"></i></button><br>
            Branch:{{child.branch}}<br>
            Mobile Number:{{child.mobileNumber}}
            
          </div>  
          <div v-if="this.role === 'hospital'"> 
          <button class="btn btn-default" data-toggle="modal"  data-target="#remarks" style="border-radius:50%;float:right" @click="initReq(requirement)"><i class="fa fa-pencil"></i></button>
          </div>
          <hr>
          <!-- <div  v-if="this.role === 'sadmin' || this.role === 'organisation'"> -->
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#theModal" @click="initReq(requirement)">
  <i class='fa fa-plus'/> Add Donor</button>
          <!-- </div> -->
          <button type="button" name="button" class="btn btn-success" @click="closeRequirement(requirement)"><i class="fa fa-check-circle"></i> Close</button>
        </div>
      </div>
      <br>

    </div>
    
  <div class="modal "  id="theModal">
  <div class=" modal-dialog modal-xl" style="width:900px" >
    <div class="modal-content ">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Add Donor</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      
      <!-- Modal body -->
      <div class="modal-body ">
        <div class="row">
        <div class="col-md-12">
          <SelectDonor :requirement="this.tempRequirement"></SelectDonor>
  
        </div>
      </div>
    </div>
      <!-- Modal footer -->
      <div class="modal-footer">
        <!-- <button type="button" class="btn btn-primary" >Submit</button> -->
        <button type="button" class="btn btn-danger" @click="loadData" data-dismiss="modal">Submit</button>
      </div>

    </div>
  </div>
  
</div>

  </div>
</template>

<script>
  import SelectDonor from  '../selectDonor/Master.vue'
var requirements = {};
var tempRequirement = {};
var name,
  placeOfStay,
  email,
  collegeId,
  yearOfJoin,
  bloodGroup,
  branch,
  mobileNo,
  remark;

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
      tempRequirement,
      remark
    };
  },
  components:{
    SelectDonor
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
    loadData(){
      axios
      .get("http://localhost:3000/public/getrequirements")
      .then(res => {
        this.requirements = res.data.requirements;
      })
      .catch(err => {
        throw err;
      });
    },
    closeRequirement: requirement => {
      var qty = requirement.quantity - requirement.children.length
      var closed = 0
      if(qty === 0)
        closed = 1
      else if(qty>0)
        closed = -1  
      var postData = {
        patientId: requirement.patientId,
        hospitalId: requirement.hospitalId,
        typeOfRequirement: requirement.typeOfRequirement,
        quantity: requirement.quantity,
        bloodGroup: requirement.bloodGroup,
        isClosed: closed,
        timeOfPosting: requirement.timeOfPosting,
        contactNo: requirement.contactNo,
        remarks: requirement.remarks
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
    updateRemark() {
      var requirement = this.tempRequirement;
      requirement.remarks = this.remark;
      window
        .axios({
          method: "put",
          url: process.env.API_URL + "/admin/requirements",
          withCredentials: true,
          data: requirement
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },delinkDonor(requirement,donor){
        var query = {}
        query.hospitalId = requirement.hospitalId
        query.bloodGroup = requirement.bloodGroup
        query.typeOfRequirement = requirement.typeOfRequirement
        query.patientId = requirement.patientId
        query.contactNo = requirement.contactNo
        query.donor = donor
        window.axios({
          url:process.env.API_URL + "/admin/linkrequirements",
          method:"delete",
          withCredentials:true,
          data:query
        }).then((res)=>{
          console.log(res)
        }).catch((err)=>{
          console.log(err)
        })
        this.loadData();
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
            }
         
          // } else {
          //   var requirement = this.tempRequirement;
          //   var qty = requirement.quantity;
          //   var isClosed = 0;
          //   if (qty > 0) qty = requirement.quantity - 1;
          //   if (qty == 0) {
          //     isClosed = 1;
          //   }
          //   var postData = {
          //     patientId: requirement.patientId,
          //     hospitalId: requirement.hospitalId,
          //     typeOfRequirement: requirement.typeOfRequirement,
          //     quantity: qty,
          //     bloodGroup: requirement.bloodGroup,
          //     isClosed: isClosed,
          //     timeOfPosting: requirement.timeOfPosting,
          //     remarks: requirement.remarks,
          //     contactNo: requirement.contactNo
          //   };
          //   window
          //     .axios({
          //       method: "put",
          //       url: process.env.API_URL + "/admin/requirements",
          //       withCredentials: true,
          //       data: postData
          //     })
          //     .then(res => {
          //       var curDate = new Date();
          //       var donationData = {
          //         donorId: this.collegeId,
          //         hospitalId: requirement.hospitalId,
          //         dataOfDonation: curDate,
          //         typeOfDonation: requirement.typeOfRequirement,
          //         voluntary: false
          //       };
          //       window
          //         .axios({
          //           method: "post",
          //           url: process.env.API_URL + "/admin/donation",
          //           withCredentials: true,
          //           data: donationData
          //         })
          //         .then(res => {
          //           console.log(res);
          //         })
          //         .catch(err => {
          //           console.log(err);
          //         });
          //       if (qty == 0) requirement.isClosed = 1;
          //       requirement.quantity = qty;
          //     })
          //     .catch(err => {
          //       console.log(err);
          //     });
          // }
        })
        .catch(err => {
          const message = "Some Error Occured";
          this.$store.commit("setMobileError", message);
        });
    }
  },
  mounted() {
    // axios
    //   .get("http://localhost:3000/public/getrequirements")
    //   .then(res => {
    //     this.requirements = res.data.requirements;
    //   })
    //   .catch(err => {
    //     throw err;
    //   });
    this.loadData();
  }
};
</script>

<style src="../../assets/css/forms.css">
</style>
<style>
@media (min-width: 768px) {
  .modal-xl {
    width: 90%;
    max-width: 1200px;
  }
}
</style>