<template lang="html">
  <div>

    <div class="row align-items-start">
      <div class="col">
        <h3>Verify Details</h3>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col">
        <div class="container form-group">
          <div class="row algin-items-start">
            <span class="small">Name</span>
            <span required type="text" class="form-control w-100 input">{{name}}</span>
            <span class="small">email</span>
            <span required type="email"  class="form-control w-100 input">{{email}}</span>
            <span class="small">Place</span>
            <span required type="text"  class="form-control w-100 input">{{place}}</span>
            <span class="small" >Donor ID</span>
            <span required type="text" class="form-control w-100 input">{{id}}</span>
            <span class="small">Date of donation</span>
            <input type="date" value="getDate" v-model="dateOfDonation" class="input w-100 form-control">
            <span class="small">Hospital</span>
            <!-- <input required type="text" class="form-control w-100 input"> -->
            <select class=" form-control w-100 custom-select" name="" v-model="hospitalId">
              <option class="input" selected value="MCH">MCH</option>
              <option class="input" value="RCC">RCC</option>
            </select>
          </div>
          <div class="row algin-items-end">
            <button type="button" @click="submit(id)" class="btn btn-primary ml-auto next-button">SUBMIT</button>
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

var donor = {
  id : '',
  name: '',
  email: '',
  place: '',
  hospitalId: '',
  dateOfDonation: '',
};
export default {
  data: function(){
    return donor
  },
  computed: {
    donorId(){
      return this.$store.state.donorId
    }
  },
  methods: {
    submit: function(id){
      var self = this
      var postData = {
        donorId: this.donorId,
        hospitalId: this.hospitalId,
        dateOfDonation: this.dateOfDonation,
        token:this.$store.state.accessToken
      }
      // console.log(postData);

      window.axios({
        url:'http://localhost:3000/api/admin/donation',
        method:'post',
        data: postData
      })
      .then(function(res){
        // console.log(res);
        // self.$store.state.mobileNumber = null
        // self.$store.state.donorId = null
        // self.$store.state.isValidMobileNumber = null
        self.$store.commit('clearDonorDetails')
        self.$router.push('/success')

      })
      .catch(function(err){
        throw err;
      })
    },
    getDate: function(){
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();

      if(dd<10) {
        dd = '0'+dd
      }

      if(mm<10) {
        mm = '0'+mm
      }

      today = mm + '/' + dd + '/' + yyyy;
      console.log(today);
      return today;
    }
  },
  created(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
      dd = '0'+dd
    }

    if(mm<10) {
      mm = '0'+mm
    }

    today = dd + '/' + mm + '/' + yyyy;
    this.dateOfDonation = today


    var self = this;
    this.id = this.donorId
    var postData = {
      donorId:self.donorId,
      token:self.$store.state.accessToken
    }
    // console.log(postData);
    window.axios({
      url:'http://localhost:3000/api/admin/findUserById',
      method: 'post',
      data: postData
    })
    .then(function(res){
      console.log(res);
      self.name = res.data.donor.name;
      self.email = res.data.donor.email;
      self.place = res.data.donor.place;
      // console.log(self.name);

    })
    .catch(function(err){
      console.log(err);
      throw err;
    })
  }
}
</script>

<style src="../../assets/css/forms.css"></style>

<style lang="css">
.input{
  margin-top: 0px;
  padding-top: 10px;

}
.small{
  margin-top: 10px;
}
</style>
