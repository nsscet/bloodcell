<template lang="html">
  <div>

    <div class="row align-items-start">
      <div class="col">
        <h3>Register a new Requirement</h3>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col">
        <div class="container form-group">
          <div class="row algin-items-start">
            <input required type="text" v-model="patientId" placeholder="Patient ID" class="form-control w-100 input">
            <input required type="text" v-model ="quantity" placeholder="Quantity" class="form-control w-100 input">
            <input required type="text" v-model ="contactNo" placeholder="Contact No" class="form-control w-100 input">
            <input required type="text" v-model ="remarks" placeholder="Remarks" class="form-control w-100 input">
            <span class="small">Blood Group</span>
            <select class=" form-control w-100 custom-select" name="O+ve" v-model="bloodGroup">
              <option class="input" selected value="O+ve">O+ve</option>
              <option class="input" value="O-ve">O-ve</option>
              <option class="input" value="A+ve">A+ve</option>
              <option class="input" value="A-ve">A-ve</option>
              <option class="input" value="B+ve">B+ve</option>
              <option class="input" value="B-ve">B-ve</option>
              <option class="input" value="AB+ve">AB+ve</option>
              <option class="input" value="AB-ve">AB-ve</option>

            </select>
            <span class="small">Hospital</span>
            <select class=" form-control w-100 custom-select"  name="" v-model="hospitalId">
              <option v-for="hospital in hospitals" :disabled="hospital.success === false " v-bind:value="hospital.name">
                {{ hospital.name }}
              </option>
            </select>
            <span class="small">Type of Requirement</span>
            <select class=" form-control w-100 custom-select" name="" v-model="typeOfRequirement">
              <option class="input" selected value="B">Normal Donation</option>
              <option class="input" value="P">Platelet Donation</option>
            </select>
          </div>
          <div class="row algin-items-end">
            <button type="button" @click="submit()" class="btn btn-primary ml-auto next-button">NEXT</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row align-items-end">
      <div class="col">
        <hr>
        <span class="small">An initiative by BloodCell, NSS CET</span>
      </div>
    </div>
  </div>
</template>

<script>
var patientId,
  bloodGroup,
  quantity,
  hospitalId,
  typeOfRequirement,
  contactNo,
  remarks,
  hospitals;
var data = {
  patientId,
  bloodGroup,
  quantity,
  hospitalId,
  typeOfRequirement,
  contactNo,
  remarks,
  hospitals
};
export default {
  data: function() {
    return data;
  },
  computed: {},
  mounted() {
    window
      .axios({
        method: "get",
        url: process.env.API_URL + "/admin/hospital",
        withCredentials: true
      })
      .then(res => {
        if (res.data.success) {
          this.hospitals = res.data.hospitals;
        } else {
          this.hospitals = [{ name: res.data.message, success: false }];
        }
      });
  },
  methods: {
    submit: function() {
      var self = this;
      var postData = {
        patientId: this.patientId,
        hospitalId: this.hospitalId,
        typeOfRequirement: this.typeOfRequirement,
        quantity: this.quantity,
        bloodGroup: this.bloodGroup,
        contactNo: this.contactNo,
        remarks: this.remarks
      };
      window
        .axios({
          url: process.env.API_URL + "/admin/requirements",
          method: "post",
          data: postData,
          withCredentials: true
        })
        .then(function(res) {
          if(res.data.success)
            self.$router.push("/success");
          else
            self.$router.push("/failure")  
        })
        .catch(function(err) {
          throw err;
          console.log(err);
        });
    }
  }
};
</script>

<style src="../../assets/css/forms.css"></style>

<style lang="css">
</style>
