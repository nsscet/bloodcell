<template lang="html">
  <div>
    <div class="row align-items-start">
      <div class="col">
        <h3>Add a new Hospital</h3>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col">
        <div class="container form-group">
          <div class="row algin-items-start">
            <input required type="text" v-model="name" placeholder="Name" class="form-control w-100 input">
            <input required type="text" v-model="street" placeholder="Street Address" class="form-control w-150 input">            
            <input required type="text" v-model="landmark" placeholder="Landmark" class="form-control w-150 input">            
             <span class="small">District</span>
            <select class=" form-control w-100 custom-select" name="" v-model="district">
              <option class="input" selected value="Kasargod">Kasargod</option>
              <option class="input" value="Kannur">Kannur</option>
              <option class="input" value="Wayanad">Wayanad</option>
              <option class="input" value="Kozhikode">Kozhikode</option>
              <option class="input" value="Malappuram">Malappuram</option>
              <option class="input" value="Palakkad">Palakkad</option>
              <option class="input" value="Thrissur">Thrissur</option>
              <option class="input" value="Ernakulam">Ernakulam</option>
              <option class="input" value="Idukki">Idukki</option>
              <option class="input" value="Kottayam">Kottayam</option>
              <option class="input" value="Alappuzha">Alappuzha</option>
              <option class="input" value="Pathanamthitta">Pathanamthitta</option>
              <option class="input" value="Kollam">Kollam</option>
              <option class="input" value="Thiruvananthapuram">Thiruvananthapuram</option>

             </select>
            <input required type="text" v-model="contactNo" placeholder="Contact Number" class="form-control w-150 input">            

            
          </div>
          <div class="alert">
              {{error}}
          </div>    
          <div class="row algin-items-end">
            <button type="button" @click="submit()" class="btn btn-primary ml-auto next-button">SUBMIT</button>
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
var name,district,street,landmark,contactNo,error
var data={
  name,district,street,landmark,contactNo,error
}
export default {
  data(){
    return data
  },
  
  methods:{
    submit:function(){
        var address = this.street+','+this.landmark+','+this.district
        var postData={
          name:this.name,
          district:this.district,
          address :address,
          contactNo:this.contactNo
        }
        window.axios({
          method:"post",
          url:process.env.API_URL+'/admin/hospital',
          data:postData,
          withCredentials: true
        }).then((res)=>{
            console.log(res)
            this.error= ""
            if(res.data.success){
                this.$router.push('/success')
            }else{
                if(res.data.error.code === 11000){
                    this.error = "Hospital Already Exists"
                }else{
                    this.error = "Fill in the empty Fields"
                }

            }
        }).catch((err)=>{
            console.log(err)
        })
    }
  }
}
</script>
<style src="../../assets/css/forms.css">

</style>
