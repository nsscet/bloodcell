<template lang="html">
  <div class="">
    <Navbar></Navbar>
    <div class="row row-main">
      <div class="col">

      </div>
      <div class="col">
        <div class="container box">
            <UserForm />
        </div>
      </div>
      <div class="col">

      </div>
    </div>
  </div>

</template>
<script>
import UserForm from './userForm.vue'
export default {
    components:{
        UserForm
    }
}
</script>

<style src="../../assets/css/forms.css"></style>
<style lang="css">

</style>
