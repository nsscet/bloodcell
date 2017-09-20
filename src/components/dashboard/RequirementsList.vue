<template lang="html">
  <div class="">
    <h2>Requirements</h2>
    <hr>
    <div class="" v-for="requirement in requirements">
      <div class="card">
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
  mounted(){
    axios.get(
      process.env.API_URL + '/admin/requirements',
      {
        withCredentials: true
      })
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
