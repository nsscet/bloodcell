<template lang="html">
  <div>

    <div class="row align-items-start">
      <div class="col">
        <h3>Register a new donor</h3>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col">
        <div class="container form-group">
          <div class="row algin-items-start">
            <input required type="text" v-model="name" placeholder="Name" class="form-control w-100 input">
            <input required type="text" v-model="place" placeholder="Place of stay" class="form-control w-100 input">
            <input required type="text" v-model ="email" placeholder="email" class="form-control w-100 input">
            <input required type="text" v-model ="donorId" placeholder="Donor ID" class="form-control w-100 input">
            <input required type="text" v-model ="bloodGroup" placeholder="Blood Group" class="form-control w-100 input">
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
var name, place, email, donorId, bloodGroup
var data = {
  name,
  place,
  email,
  donorId,
  bloodGroup
}
export default {
  data: function(){
    return data
  },
  computed: {
    mobile(){
      return this.$store.state.donor.mobileNumber
    }
  },
  methods: {
    submit: function(){
      var self = this
      var postData = {
        name: this.name,
        place: this.place,
        mobileNumber: this.mobile,
        email: this.email,
        bloodGroup: this.bloodGroup,
        donorId: this.donorId
      }
      window.axios({
        url: process.env.API_URL + '/admin/donor',
        method: 'post',
        data: postData,
        withCredentials: true
      })
      .then(function(res){
        console.log(res.data.Donor);
          self.$store.commit('updateDonor' , res.data.Donor)
          self.$router.push('/registerdonation')
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
