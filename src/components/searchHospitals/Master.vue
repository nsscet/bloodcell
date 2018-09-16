<template>
    <div>
        <Navbar />
        <VueGoodTable 
        :columns="columns"
        :rows="rows"
        :search-options="{
            enabled: true,
            placeholder: 'Search this table'
        }"
       />
    </div>
</template>

<script>
import { VueGoodTable } from "vue-good-table";
import Navbar from "../navbar/Master.vue";
import axios from "axios";
export default {
  components: {
    VueGoodTable,
    Navbar
  },
  data() {
    return {
      columns: [
        {
          label: "Name",
          field: "name"
        },
        {
          label: "Address",
          field: "address"
        },
        {
          label: "District",
          field: "district"
        },
        {
          label: "Contact Number",
          field: "contactNo"
        }
      ],
      rows: []
    };
  },
  created() {
    const url = process.env.API_URL + "/admin/hospital";
    axios
      .get(url, {
        withCredentials: true
      })
      .then(res => {
        console.log(res);
        this.rows = res.data.hospitals;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style src="../../../node_modules/vue-good-table/dist/vue-good-table.css">
</style>
