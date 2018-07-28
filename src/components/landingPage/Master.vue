<template>
    <div>
        <NavBar />
        <div id='head'>
            <span>NSS BLOOD CELL</span>
        </div>
        <div id ='links'>
            <router-link to="/login" class="">Login</router-link>

            <router-link to="/requirementsPage" class="">Requirements</router-link>
        </div>
    </div>    
</template>

<script>
import NavBar from "../navbar/Master";
export default {
  components: {
    NavBar
  }
};
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
