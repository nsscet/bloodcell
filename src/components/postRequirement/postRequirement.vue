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
            <input required type="text" v-model ="bloodGroup" placeholder="Blood Group" class="form-control w-100 input">
            <input required type="text" v-model ="quantity" placeholder="Quantity" class="form-control w-100 input">
            <span class="small">Hospital</span>
            <select class=" form-control w-100 custom-select" name="" v-model="hospitalId">
              <option class="input" selected value="MCH">MCH</option>
              <option class="input" value="RCC">RCC</option>
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
var patientId, bloodGroup, quantity, hospitalId, typeOfRequirement
var data = {
  patientId,
  bloodGroup,
  quantity,
  hospitalId,
  typeOfRequirement
}
export default {
  data: function(){
    return data
  },
  computed: {

  },
  methods: {
    submit: function(){
      var self = this
      var postData = {
        patientId: this.patientId,
        hospitalId: this.hospitalId,
        typeOfRequirement: this.typeOfRequirement,
        quantity: this.quantity,
        bloodGroup: this.bloodGroup
      }
      window.axios({
        url: process.env.API_URL + '/admin/requirements',
        method: 'post',
        data: postData,
        withCredentials: true
      })
      .then(function(res){
          self.$router.push('/success')
      })
      .catch(function(err){
        throw err
        console.log(err);
      })
    }
  }
}
</script>

<style src="../../assets/css/forms.css"></style>

<style lang="css">
</style>
