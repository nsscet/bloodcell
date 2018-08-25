<template>
<div>
    <NavBar />
      <div class="row row-main">
        <div class="col">

        </div>
        <div class="col">
            <div class="container box">
                <hospitalForm/>
            </div>    
        </div>
        <div class="col">

      </div>
      </div>
</div>        
</template>

<script>
import hospitalForm from "./hospitalForm.vue";
import NavBar from "../navbar/Master.vue";
export default {
  components: {
    hospitalForm,
    NavBar
  }
};
</script>

<style src="../../assets/css/forms.css"></style>
