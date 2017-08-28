<template lang="html">
  <div class="container form-group">
    <div class="row algin-items-start">
      <input type="password" v-model="password" placeholder="Password" class="form-control w-100 input">
    </div>
    <div class="row algin-items-end">
      <button type="submit" @click="login(password)" class="btn btn-primary ml-auto next-button">LOGIN</button>
    </div>
  </div>
</template>

<script>
var password
var data = {
  password
}
export default {
  data: function(){
    return data
  },
  methods: {
    // updateToken: function(token){
    //   this.$store.commit('updateToken' , token)
    //   this.$router.push('/getmobile')
    // },
    login: function(password){
      var self = this
      var username = self.$store.state.username
      var credentials = { username:username , password:password }

      window.axios({
        method: 'post',
        url: process.env.API_URL + '/login',
        data: credentials,
        withCredentials: true
      })
      .then(function(res){
        // console.log(res.data);
        if(res.data.success){
          self.$store.commit('loginSuccess')
          self.$router.push('/getmobile')
        }
      })
      .catch(function(err){
        console.log(err);
        throw err;
      })
    }
  }
}
</script>

<style src="../../assets/css/forms.css"></style>
<style lang="css">
input{
  outline: none;
}
</style>
