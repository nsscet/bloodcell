<template lang="html">
  <div class="row">
    <div class="col">

    </div>
    <div class="col">
      <div class="container box">

        <getMobile v-if="!donorId && isValidMobileNumber"></getMobile>
        <registerDonor v-if="!isValidMobileNumber"></registerDonor>
        <registerDonation v-if="donorId"></registerDonation>

      </div>
    </div>
    <div class="col">

    </div>
  </div>
</template>

<script>
import getMobile from './getMobile'
import registerDonor from './registerDonor'
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
    getMobile,
    registerDonor,
    registerDonation
  }
}
</script>

<style src="../../assets/css/forms.css"></style>
<style lang="css">

</style>
