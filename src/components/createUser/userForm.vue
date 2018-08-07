<template lang="html">
  <div>
    <NavBar/>
    <div class="row align-items-start">
      <div class="col">
        <h3>Create a new User</h3>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col">
        <div class="container form-group">
          <div class="row algin-items-start">
            <input required type="text" v-model="name" placeholder="Name" class="form-control w-100 input">
            <input required type="text" v-model="place" placeholder="Place" class="form-control w-100 input">
            <input required type="text" v-model ="email" placeholder="Email" class="form-control w-100 input">
            <input required type="text" v-model ="username" placeholder="Username" class="form-control w-100 input">
             <div class="alert" v-show="usernameErrors">
              {{usernameErrors}}
              </div>
            <input required type="password" v-model ="password" placeholder="Password" class="form-control w-100 input">
            
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
import NavBar from '../navbar/Master'
var name,place,email,username,password
var data={
  name,place,email,username,password
}
export default {
  data(){
    return data
  },
  components:{
    NavBar
  },
  computed:{
    usernameErrors(){
      return this.$store.state.usernameErrors;
    }
  },
  methods:{
    submit:function(){
        var postData={
          name:this.name,
          place:this.place,
          email:this.email,
          username:this.username,
          password:this.password,
          role:'organisation'
        }
        window.axios({
          method:'post',
          url:process.env.API_URL+'/admin/users',
          data:postData,
          withCredentials:true
        }).then((res)=>{
          if(!res.data.message.message){
            // console.log(res)
            
            this.$router.push('/success')
          }else{
            console.log(res.data.message.message)
            
            this.$store.commit('notValidOrganisation')
          }
        }).catch((err)=>{
            throw err
        })
    }
  }
}
</script>
<style src="../../assets/css/forms.css">

</style>
