<template>
   <div> 
    <NavBar/>
    <div class='container box'>
        <uploadButton />
    </div>
   </div> 
</template>
<script>
import NavBar from '../navbar/Master.vue'
import uploadButton from './uploadButton.vue'
export default {
    components:{
        NavBar,uploadButton
    }
}
</script>
<style src="../../assets/css/forms.css">

</style>
