<template>
  <div class="row">
    <div class="col">

    </div>
    <div class="col">
      <div class="container box">

        <div class="row align-items-start">
          <div class="col">
            <h3>Success!</h3>
          </div>
        </div>
        <div class="row align-items-center">

        </div>
        <div class="row align-items-end">
          <div class="col">
            <button class="btn btn-primary ml-auto next-button" @click="newDonation()">Register another donation</button>
            <button class="btn btn-danger ml-auto next-button" @click="logout()">Logout</button>

            <hr>
            <span class="small">An initiative by BloodCell, NSS CET</span>
          </div>
        </div>

      </div>
    </div>
    <div class="col">

    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  }),
  methods: {
    newDonation: function(){
      this.$router.push('/getmobile');
    },
    logout: function(){
      var self = this
      axios.get({
        url: process.env.API_URL + '/logout',
        method: 'get',
        sendCredentials: true
      })
      .then((res) => {
        self.$store.commit('logout')
        self.$router.push('/')
      })
      .catch((err) => {
        throw err
      })
    }
  }
}
</script>

<style src="../assets/css/forms.css">

</style>
