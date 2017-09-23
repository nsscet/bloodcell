<template lang="html">
  <div class="container form-group">
    <div class="row algin-items-start">
      <input required type="text" v-model="username" placeholder="Username" class="form-control w-100 input">
      <div class="alert" v-show="usernameErrors">
        {{usernameErrors}}
      </div>
      <div class="alert" v-show="serverErrors">
        {{serverErrors}}
      </div>
    </div>
    <div class="row algin-items-end">
      <button type="button" @click="submit(username)" class="btn btn-primary ml-auto next-button">NEXT</button>
    </div>
  </div>
</template>

<script>
var username, isValidUsername, usernameErrors
var isValid
var data = {
  username
}
export default {
  data: function () {
    return data
  },
  computed:{
    isValidUsername(){
      return this.$store.state.isValidUsername;
    },
    usernameErrors(){
      return this.$store.state.usernameErrors;
    },
    serverErrors(){
      return this.$store.state.serverErrors;
    }
  },
  methods: {
    updateUsername: function(username){
      if(username){
        this.$store.commit('isAValidUsername' , username)
      }
      else{
        this.$store.commit('isNotAValidUsername')
      }
    },
    updateServerErrors: function(message){
      this.$store.commit('updateServerErrors', message);
    },

    submit (username) {
      if(!username)
        this.updateUsername(null)

      else {
        var self = this
        var data = querystring.stringify({ username })

        window.axios({
          method: 'post',
          url: process.env.API_URL+'/isValidUsername',
          data
        })
        .then(function (res) {
          if(res.data.userId) {
            self.updateUsername(username)
          }
          else{
            self.updateUsername(null)
          }
        })
        .catch(function (err) {
          self.updateServerErrors(err.message);
          throw err
          console.log(self.$store.state.serverErrors);
        })
      }
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
