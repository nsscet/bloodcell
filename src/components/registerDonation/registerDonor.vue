<template lang="html">
  <div>

    <div class="row align-items-start">
      <div class="col">
        <h3>Register a new donor</h3>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col">
        <div class="container form-group">
          <div class="row algin-items-start">
            <input required type="text" v-model="name" placeholder="Name" class="form-control w-100 input">
            <input required type="text" placeholder="Place of stay" class="form-control w-100 input">
            <input required type="text" placeholder="Mobile Number" class="form-control w-100 input">
            <input required type="text" placeholder="email" class="form-control w-100 input">
          </div>
          <div class="row algin-items-end">
            <button type="button" @click="submit(username)" class="btn btn-primary ml-auto next-button">NEXT</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row align-items-end">
      <div class="col">
        <hr>
        <span class="small">An initiative by BloodCell, NSS CET</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style src="../../assets/css/forms.css"></style>

<style lang="css">
</style>
