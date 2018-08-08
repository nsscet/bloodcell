<template>
  <div>
  <NavBar />  
  <h3 id='title' class='text-center'>Search Donor</h3>
  <div class='text-center'>
    <VueGoodTable 
      :columns="columns"
      :rows="rows"
      :search-options="{
        enabled: true,
  
        placeholder: 'Search this table',
        externalQuery: searchQuery
    }"/>
  </div>
  </div>
</template>

<script>
import { VueGoodTable } from "vue-good-table";
import NavBar from "../navbar/Master";
import axios from "axios";
// add to component
export default {
  name: "my-component",
  components: {
    VueGoodTable,
    NavBar
  },
  data() {
    return {
      columns: [
        {
          label: "Name",
          field: "name"
        },

        {
          label: "Blood Group",
          field: "bloodGroup"
        },
        {
          label: "Mobile Number",
          field: "mobileNumber"
        },
        {
          label: "Branch",
          field: "branch"
        },
        {
          label: "Year Joined",
          field: "year_joined"
        },
        {
          label: "Date Added",
          field: "dateAdded",
          type: "date"
        },
        {
          label: "Date of Last Donation",
          field: "lastDonation.dateOfDonation",
          type: "date"
        }
      ],
      rows: []
    };
  },
  created() {
    const url = process.env.API_URL + "/admin/donor";

    axios
      .get(url, { withCredentials: true })
      .then(res => {
        this.rows = res["data"].Donors;
        console.log(res);
      })
      .catch(err => {
        this.errors.push(err);
      });
  }
};
</script>
<style>
h3{
  padding-top:20px;
  padding-bottom:20px;
  font-size:40px
}
</style>

<style src='../../../node_modules/vue-good-table/dist/vue-good-table.css'>

</style>

