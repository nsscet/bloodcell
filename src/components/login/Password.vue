<template lang="html">
  <div class="container form-group">
    <div class="row algin-items-start">
      <input type="password" v-model="password" placeholder="Password" class="form-control w-100 input">
    </div>
    <div class="alert" v-show="passwordErrors">
      {{passwordErrors}}
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
  computed: {
    passwordErrors(){
      return this.$store.state.passwordErrors
    }
  },
  methods: {
    updatePasswordErrors(message){
      this.$store.commit('updatePasswordErrors', message);
    },
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
        if(res.data.success){
          self.$store.commit('loginSuccess')
          self.$router.push('/dash')
        }
        else{
          self.updatePasswordErrors("Wrong login credentials");
        }
      })
      .catch(function(err){
        self.updatePasswordErrors(err.message);
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
