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
          <!-- <hr> -->
          <!-- <button type="button" name="button" class="btn btn-success" @click="closeRequirement"><i class="fa fa-check-circle"></i> Close</button> -->
          <!-- <button type="button" name="button" @click="editRequirement" class="btn btn-secondary"><i class="fa fa-pencil"></i> Edit</button> -->
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
