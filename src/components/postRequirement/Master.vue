<template lang="html">
<div class="">
  <Navbar></Navbar>
  <div class="row row-main">
    <div class="col">

    </div>
    <div class="col">
      <div class="container box">

        <postRequirement v-if=""></postRequirement>

      </div>
    </div>
    <div class="col">

    </div>
  </div>
</div>
</template>

<script>
import Navbar from '../navbar/Master'
import postRequirement from './postRequirement'
export default {
components: {
  Navbar,
  postRequirement
}
}
</script>

<style lang="css">
</style>
