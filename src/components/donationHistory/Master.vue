<template>
  <div>
  <NavBar />  
  <h3 id='title' class='text-center'>Donation History</h3>
  <div class='text-center'>
    <VueGoodTable 
      :columns="columns"
      :rows="rows"
      :search-options="{
        enabled: true,
        placeholder: 'Search this table'
      }"
      :pagination-options="{
        enabled: true,
        perPage: 20,
       
      }"
     >
     <template slot="table-row" slot-scope="props">
    <span >
      {{props.formattedRow[props.column.field]}}
    </span>
  </template>
    </VueGoodTable>  
  </div>

  </div>
</template>

<script>
import { VueGoodTable } from "vue-good-table";
import NavBar from "../navbar/Master";
import axios from "axios";
// add to component
var remark;
var temp;
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
          label: "HosID:PatID:Contact",
          field: "requirement"
        }
      ],
      rows: [],
      remark
    };
  },
  created() {
    const url1 = "http://localhost:3000/public/getrequirements/donations";
    const url2 = "http://localhost:3000/api/admin/getDonations";
    axios
      .get(url1, { withCredentials: true })
      .then(res => {
        axios
          .get(url2, { withCredentials: true })
          .then(donations => {
            var history = res["data"].requirementDonations.concat(donations.data.voluntaryDonations)
            this.rows = history
          })
          .catch(err => {
            this.errors.push(err)
          });
          this.rows = res["data"].requirementDonations;
      })
      .catch(err => {
        this.errors.push(err);
      });
  },
  methods: {}
};
</script>
<style>
h3 {
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 40px;
}
</style>

<style src='../../../node_modules/vue-good-table/dist/vue-good-table.css'>
</style>

