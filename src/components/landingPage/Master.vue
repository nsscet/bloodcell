<template>
    <div>
        <NavBar />
        <div id='head'>
            <span>NSS BLOOD CELL</span>
        </div>
        <div id ='links'>
        <form  v-if="!this.isLoggedIn">
            <router-link to="/login" class="">Login</router-link>
        </form>
            <router-link to="/requirementsPage" class="">Requirements</router-link>

        </div>
    </div>    
</template>


<script>
import NavBar from "../navbar/Master";
export default {
  data: () => {
    return {

    }
  },
  components: {
    NavBar
  },
  computed: {
    isLoggedIn(){
      return this.$store.state.isAuthenticated
    },
    username(){
      return this.$store.state.username
    }
  }
}
</script>

<style>
#head{
    font-size:40px;
    text-align:center;
    height: 200px;
    line-height: 200px;
}
span {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}
#links{
    text-align: center;
    word-spacing: 10px;
    font-size: 25px;

}
</style>
