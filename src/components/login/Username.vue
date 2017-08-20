<template lang="html">
  <div class="container form-group">
    <div class="row algin-items-start">
      <input required type="text" v-model="username" placeholder="Username" class="rounded-0 form-control w-100 username-input">
      <div class="alert" v-show="usernameErrors">
        Please provide a valid username
      </div>
    </div>
    <div class="row algin-items-end">
      <button type="button" @click="submit(username)" class="btn btn-primary ml-auto next-button">NEXT</button>
    </div>
  </div>
</template>

<script>
var username, isValidUsername, usernameErrors
var isValid = false
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
    submit (username) {
      // console.log(this.isValidUsername);
      // window.axios.post(
      //   'http://localhost:3000/api/admin/isValidUsername',
      //   {
      //     'username': username
      //     // 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhbnRoaXNlbmFuIiwiaWQiOiI1OTk2YWZkMmY3OGExMjFhNmNlMWNkMzQiLCJpYXQiOjE1MDMyMDM2ODUsImV4cCI6MTUwMzIwNTEyNX0.ttvmHXB7UFFiD-oIzByvTFLv0An-8yk5x9l-IJ1UmGc'
      //   },
      //   {
      //     headers: {
      //       'x-access-token': 'leyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhbnRoaXNlbmFuIiwiaWQiOiI1OTk2YWZkMmY3OGExMjFhNmNlMWNkMzQiLCJpYXQiOjE1MDMyMDM3NzAsImV4cCI6MTUwMzIwNTIxMH0.nqrM0Ap3TNybarCeZprGG5kLArtvM6OYKV8qbH4O1zw'
      //     }
      //   })
      // .then(function (res) {
      //   console.log(res)
      //   isValid = true
      // })
      // .catch(function (err) {
      //   throw err
      // })
      isValid = true;

      if (isValid) {
        console.log(this.isValidUsername);
        this.$store.commit('isAValidUsername')
      }
      else{
        console.log(this.usernameErrors);
        this.$store.commit('isNotAValidUsername')
      }
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
