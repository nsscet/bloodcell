<template lang="html">
  <div class="">

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
        mobileNumber,
        token:this.accessToken
      }
      console.log(postData);
      window.axios({
        url:'http://localhost:3000/api/admin/findUserByMobileNumber',
        method: 'post',
        data: postData
      })
      .then(function(res){
        if(res.data.donorId)
          self.$store.commit('isAValidMobileNumber' , res.data.donorId)
          self.$router.push('/home')
      })
      .catch(function(err){
        throw err;
      })
    }
  },
  computed: {
    mobileNumber(){
      return this.$store.state.mobileNumber
    },
    accessToken(){
      return this.$store.state.accessToken
    }
  }
}
</script>

<style src="../../assets/css/forms.css"></style>

<style lang="css">
</style>
