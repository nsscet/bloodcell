<template lang="html">
  <div>
    <div class="row">

      <div class="col-sm-3 col-md-3 card-container">
        <panel link="/getmobile" icon="fa fa-tint" title="Donations" :count="count1"></panel>
      </div>

      <div class="col-sm-3 col-md-3 card-container">
        <panel link="/users" icon="fa fa-users" title="New Donors" :count="count2"></panel>
      </div>

      <div class="col-sm-3 col-md-3 card-container">
        <panel link="/roles" icon="fa fa-search" title="Requirements" :count="count3"></panel>
      </div>

      <div class="col-sm-3 col-md-3 card-container">
        <panel link="/permissions" icon="fa fa-user-secret" title="Users" :count="count4"></panel>
      </div>

    </div>
    <Requirements></Requirements>
  </div>

</template>

<script>
import Requirements from './RequirementsList.vue'
import panel from './panel.vue'
let count2 = 0, count1=0 , count3 = 0, count4 = 0;
var today = new Date()
today.setHours(0,0,0,0)
let data =
{
  today,
  count1,
  count2,
  count3,
  count4
}

export default {
  data: function(){
    return data
  },
  components: {
    panel,
    Requirements
  },
  mounted() {
    axios.get(
      process.env.API_URL + '/admin/donation',
      {
      params: {
        dateOfDonation: this.today
      },
      withCredentials: true
    })
    .then((res) => {
      this.count1 = res.data.count
    })
    .catch((err) => {
      throw err
    })

   axios.get(
    process.env.API_URL + '/admin/donor',
    {
      params: {
        dateAdded: this.today
      },
      withCredentials: true
    })
    .then((res) => {
      this.count2 = res.data.count
    })
    .catch((err) => {
      throw err
    })

    axios.get(
      process.env.API_URL + '/admin/requirements',
      {
        params: {
          isClosed: 0
        },
        withCredentials: true
      })
      .then((res) => {
        this.count3 = res.data.count
      })
      .catch((err) => {
        throw err
      })


    axios.get(
      process.env.API_URL + '/admin/users',
      {
        withCredentials: true
      })
      .then((res) => {
        this.count4 = res.data.count
      })
      .catch((err) => {
        throw err
      })
  }
}
</script>

<style lang="css">
.panel{

}
.card-container{
  padding: 5px;
}
</style>
