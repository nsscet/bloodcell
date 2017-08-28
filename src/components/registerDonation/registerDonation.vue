<template lang="html">
  <div>

    <div class="row align-items-start">
      <div class="col">
        <h3>Verify Details</h3>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col">
        <div class="container form-group">
          <div class="row algin-items-start">
            <span class="small" >Donor ID</span>
            <span required type="text" class="form-control w-100 input">{{donorId}}</span>
            <span class="small">Name</span>
            <span required type="text" class="form-control w-100 input">{{name}}</span>
            <span class="small">email</span>
            <span required type="email"  class="form-control w-100 input">{{email}}</span>
            <span class="small">Place</span>
            <span required type="text"  class="form-control w-100 input">{{place}}</span>
            <span class="small" >Blood Group</span>
            <span required type="text" class="form-control w-100 input">{{bloodGroup}}</span>
            <span class="small" >Mobile Number</span>
            <span required type="text" class="form-control w-100 input">{{mobileNumber}}</span>
            <span class="small">Date of donation</span>
            <input type="date" value="getDate" v-model="dateOfDonation" class="input w-100 form-control">
            <span class="small">Hospital</span>
            <select class=" form-control w-100 custom-select" name="" v-model="hospitalId">
              <option class="input" selected value="MCH">MCH</option>
              <option class="input" value="RCC">RCC</option>
            </select>
            <span class="small">Type of donation</span>
            <select class=" form-control w-100 custom-select" name="" v-model="typeOfDonation">
              <option class="input" selected value="B">Normal Donation</option>
              <option class="input" value="P">Platelet Donation</option>
            </select>
          </div>
          <div class="row algin-items-end">
            <button type="button" @click="submit()" class="btn btn-primary ml-auto next-button">SUBMIT</button>
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
  var hospitalId, name, email, place, donorId, mobileNumber, bloodGroup, dateOfDonation, typeOfDonation
  var data = {
  hospitalId,
  name,
  email,
  place,
  donorId,
  mobileNumber,
  bloodGroup,
  dateOfDonation,
  typeOfDonation
}
export default {
  data: function(){
    return data
  },
  computed: {
    donor(){
      return this.$store.state.donor
    },
    accessToken(){
      return this.$store.state.accessToken
    }
  },
  methods: {
    submit: function(){
      var self = this
      var postData = {
        donorId: this.donor.donorId,
        hospitalId: this.hospitalId,
        dateOfDonation: this.dateOfDonation,
        typeOfDonation: this.typeOfDonation,
        token:this.accessToken
      }


      window.axios({
        url: process.env.API_URL + '/admin/donation',
        method:'post',
        data: postData,
        withCredentials: true
      })
      .then(function(res){
        self.$store.commit('clearDonorDetails')
        self.$router.push('/success')

      })
      .catch(function(err){
        throw err;
      })
    }
  },
  mounted(){
    var today = new Date()
    var dd = today.getDate()
    var mm = today.getMonth()+1
    var yyyy = today.getFullYear()
    if(dd < 10)
      dd = '0'+dd
    if(mm < 10)
      mm = '0'+mm
    today = yyyy + '-' + mm + '-' + dd;
    this.dateOfDonation = today

    this.name = this.donor.name
    this.email = this.donor.email
    this.place = this.donor.place
    this.bloodGroup = this.donor.bloodGroup
    this.mobileNumber = this.donor.mobileNumber
    this.donorId = this.donor.donorId

  }
}
</script>

<style src="../../assets/css/forms.css"></style>

<style lang="css">
.input{
  margin-top: 0px;
  padding-top: 10px;

}
.small{
  margin-top: 10px;
}
</style>
