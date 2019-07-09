<template lang="html">
  <div class="">
  <div class="row row-main">
    <div class="col">

    </div>
    <div class="col">
      <div class="container box">
        <div class="row align-items-start">
          <div class="col">
            <h4>Voluntary Blood Donation</h4>
            <br>
            <h3>Login</h3>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col">
            <Username v-if="!isValidUsername"></Username>
            <Password v-if="isValidUsername"></Password>
          </div>
        </div>
        <div class="row align-items-end">
          <div class="col">
            <hr>
            <span class="small">An initiative by BloodCell, NSS CET</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col">

    </div>
  </div>
</div>

</template>

<script>
import Username from './Username'
import Password from './Password'
import Navbar from '../navbar/Master'
var data = {
}
export default {
  data: function () {
    return data
  },
  computed: {
    isValidUsername(){
      return this.$store.state.isValidUsername;
    }
  },
  methods: {
  },
  components: {
    Username,
    Password,
    Navbar
  }
}
</script>

<style lang="css">
body{
  /*margin-top: 60px;*/
}

.box{
  padding: 30px 10px 30px 10px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);

}
.login-form{
  /*background:#FFFFFF;*/
  padding: 20px;
}
</style>
