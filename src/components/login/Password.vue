<template lang="html">
  <div class="container form-group">
    <div class="row algin-items-start">
      <input type="password" v-model="password" placeholder="Password" class="rounded-0 form-control w-100 username-input">
    </div>
    <div class="row algin-items-end">
      <button type="submit" @click="login(password)" class="btn btn-primary ml-auto next-button">LOGIN</button>
    </div>
  </div>
</template>

<script>
var password;
var data = {
  password
}
export default {
  data: function(){
    return data
  },
  methods: {
    updateToken: function(token){
      this.$store.commit('updateToken' , token)
      console.log(this.$store.state.token);
    },
    login: function(password){
      var self = this
      var username = self.$store.state.username
      var credentials = { username:username , password:password }
      // console.log(credentials);

      window.axios({
        method: 'post',
        url: 'http://localhost:3000/api/login',
        data: credentials
      })
      .then(function(res){
        // console.log(res.data);
        if(res.data.token)
          self.updateToken(res.data.token)

      })
      .catch(function(err){
        console.log(err);
      })
    }
  }
}
</script>

<style lang="css">
input{
  outline: none;
}

.next-button{
  margin-top: 20px;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);

}

.username-input{
  margin-top: 30px;
  background: transparent;

  /*outline: none;*/

  border:none;
  border-bottom:1px black solid;
  padding-left: 0px;
}
.username-input:focus{
  background: transparent;

}



</style>
