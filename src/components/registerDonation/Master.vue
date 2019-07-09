<template lang="html">
  <div class="">
    <Navbar></Navbar>
    <div class="row row-main">
      <div class="col">

      </div>
      <div class="col">
        <div class="container box">

          <registerDonation v-if=""></registerDonation>

        </div>
      </div>
      <div class="col">

      </div>
    </div>
  </div>

</template>

<script>
import Navbar from '../navbar/Master'
import registerDonation from './registerDonation'
var data = {

}
export default {
  data: function () {
    return data
  },
  computed: {
    donorId(){
      return this.$store.state.donorId
    },
    isValidMobileNumber(){
      return this.$store.state.isValidMobileNumber
    }
  },
  methods: {

  },
  components: {
    registerDonation,
    Navbar
  }
}
</script>

<style src="../../assets/css/forms.css"></style>
<style lang="css">

</style>
