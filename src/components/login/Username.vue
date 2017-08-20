<template lang="html">
  <div class="container form-group">
    <div class="row algin-items-start">
      <input required type="text" v-model="username" placeholder="Username" class="rounded-0 form-control w-100 username-input">
      <div class="alert" v-show="usernameErrors">
        {{usernameErrors}}
      </div>
    </div>
    <div class="row algin-items-end">
      <button type="button" @click="submit(username)" class="btn btn-primary ml-auto next-button">NEXT</button>
    </div>
  </div>
</template>

<script>
import querystring from 'querystring'
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
    submit (username) {
      var self = this
      var data = querystring.stringify({ username })

      window.axios({
        method: 'post',
        url: 'http://localhost:3000/api/isValidUsername',
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
        console.log('ERROR::', err);
        throw err
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

.alert{
  color: red
}


</style>
