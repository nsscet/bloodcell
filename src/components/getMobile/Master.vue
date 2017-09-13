<template lang="html">
  <div class="row row-main">
    <div class="col">

    </div>
    <div class="col">
      <div class="container box">

        <getMobile></getMobile>


      </div>
    </div>
    <div class="col">

    </div>
  </div>
</template>

<script>
import getMobile from './getMobile'

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
    getMobile
  }
}
</script>

<style src="../../assets/css/forms.css"></style>
<style lang="css">

</style>
