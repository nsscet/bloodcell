<template lang="html">
  <div class="">
    <h2>Requirements</h2>
    <hr>
    <div class="" v-for="requirement in requirements">
      <div class="card" v-if="!requirement.isClosed">
        <div class="card-body">
          <strong>{{requirement.quantity}} units of {{requirement.bloodGroup}} blood required</strong>
          <br>
          Hospital ID: {{requirement.hospitalId}}
          <br>
          Patient ID: {{requirement.patientId}}
          <br>
          Date of posting: {{requirement.timeOfPosting}}
          <br>
          Type: {{requirement.typeOfRequirement}}
        </div>
      </div>
      <br>

    </div>

  </div>
</template>

<script>
var requirements = {}
export default {
  data: () => {
    return {
      requirements
    }
  },
  methods: {
    closeRequirement: ()=>{
      postData: {

      }
      axios.post(
        process.env.API_URL + '/admin/requirements',
        {
          withCredentials:true
        }
      )
    }
  },
  mounted(){
    axios.get(
       'http://localhost:3000/public/getrequirements'
      )
      .then((res) => {
        this.requirements = res.data.requirements
      })
      .catch((err) => {
        throw err
      })
  }
}
</script>

<style lang="css">
</style>
