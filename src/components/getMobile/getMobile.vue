<template lang="html">
  <div class="">
    <Navbar></Navbar>
    <div class="row align-items-start">
      <div class="col">
        <h3>Register a new donation</h3>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col">
        <div class="container form-group">
          <div class="row algin-items-start">
            <input required type="text" v-model="mobile" placeholder="Mobile Number" class="form-control w-100 input">
          </div>
          <div class="row algin-items-end">
            <button type="button" @click="submit(mobile)" class="btn btn-primary ml-auto next-button">NEXT</button>
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
import Navbar from '../navbar/Master'
var isAValidMobile , mobile
var data = {
  mobile
}
export default {
  data: function(){
    return data
  },
  methods: {

    submit: function(mobileNumber){
      var self = this
      var postData = {
        mobileNumber
      }
      window.axios({
        url:process.env.API_URL + '/admin/donor',
        method: 'get',
        params: postData,
        withCredentials: true
      })
      .then(function(res){
        if(res.data.Donors[0]){
          self.$store.commit('updateDonor' , res.data.Donors[0])
          self.$store.commit('isAValidMobileNumber')
          self.$router.push('/registerdonation')
        }
        else{
          self.$store.commit('updateMobile' , postData.mobileNumber)
          self.$router.push('/registerdonor')
        }

      })
      .catch(function(err){
        throw err;
      })
    }

  },
  computed: {
    mobileNumber(){
      return this.$store.state.mobileNumber
    }
  },
  created(){
    this.mobile = ''
  },
  components: {
    Navbar
  }
}
</script>

<style src="../../assets/css/forms.css"></style>

<style lang="css">
</style>
