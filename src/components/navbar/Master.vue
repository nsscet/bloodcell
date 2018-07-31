<template lang="html">
    <nav class="navbar fixed-top justify-content-between">
      <a class="navbar-brand">
        <router-link to="/" class="brand-link">LOGO</router-link>
      </a>
      <form class="form-inline" v-if="this.isLoggedIn">
        <span class="login-text text-uppercase"><span class="fa fa-user"></span><strong><router-link class="login-text" to='/dash'> {{this.username}}</router-link></strong> </span>
        
      </form>
      <button class="btn btn-danger my-2 my-sm-0 logout-btn" v-if="this.isLoggedIn" v-on:click="logout">LOGOUT</button>
    </nav>
</template>

<script>
export default {
  data: function(){
    return {

    }
  },
  computed: {
    isLoggedIn(){
      return this.$store.state.isAuthenticated
    },
    username(){
      return this.$store.state.username
    }
  },
  methods:{
    logout: function(){
    var self = this
    
      const url = process.env.API_URL+'/logout'
      window.axios(
        {
          url:url,
          method:'get',
          withCredentials: true
        }
      ).then((res)=>{
       
        self.$store.commit('logout')
        self.$router.push('/')
      }).catch((err)=>{
        console.log(err)
      })
      // console.log("Logged Out")
    }
  }
}
</script>

<style lang="css">
.avatar
{
  position: relative;
  top: -5px;
  float: left;
  left: -5px;
  border-radius: 50%
}
.login-text{
  margin-right:15px;
  color: white !important;
  text-decoration: none !important;
}


body{
  padding-top:70px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 300;
  background: #FFFFFF;
}


.head-text{
color: black;
font-family: 'Raleway', sans-serif;
}

.navbar{
  background:#616161;
  color:#FFFFFF;
  /*opacity: 0.8;*/
}
.brand-link{
  color: inherit;
}
.brand-link:hover{
  color: inherit;
  text-decoration: none
}
.navbar-brand{
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 24px;
  border: 0.5px #FFFFFF solid;
  /*border-radius: 5px;*/
  padding:5px;
}
.logout-btn{
  padding:5px;
  font-size: 18px;
}
</style>
