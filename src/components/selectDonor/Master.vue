<template>
  <div>
 
  <h4 id='title' class='text-center'>Select Donor from the table</h4>
  <div class='text-center'>
    <VueGoodTable 
      :columns="columns"
      :rows="rows"
      :search-options="{
        enabled: true,
        placeholder: 'Search this table'
      }"
      :pagination-options="{
        enabled:true,
        perPage:10
      }"
     >
     <template slot="table-row" slot-scope="props">
    <span v-if="props.column.field == 'status'">
      {{props.formattedRow['status']}} 
      <button class="btn btn-default" data-toggle="modal" @click="editRemark(props.formattedRow)" data-target="#myModal" style="border-radius:50%;float:right"><i class="fa fa-pencil"></i></button>
    </span>
    <span v-else>
      {{props.formattedRow[props.column.field]}}
    </span>
    <span v-if="props.column.field == 'link'">
      <button class="btn btn-default" data-toggle="modal" @click="linkDonor(props.formattedRow)" style="border-radius:50%;float:right"><i class="fa fa-chain"></i></button>
    </span>
    <span v-else>
      
    </span>

  </template>
    </VueGoodTable>  
  </div>
  <!-- Modal -->
  <div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <h4>Edit Remarks</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
        <textarea class="form-control" v-model="remark" placeholder="Fill in the remarks"></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="updateRemark" data-dismiss="modal">Save</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
  </div>
</template>

<script>
import { VueGoodTable } from "vue-good-table";
import NavBar from "../navbar/Master";
import axios from "axios";
// add to component
var remark
var temp
export default {
  name: "my-component",
  components: {
    VueGoodTable,
    NavBar
  },props:['requirement'],
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
        },{
          label:"Organisation",
          field:"organisation"
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
          label: "Date of Last Donation",
          field: "lastDonation.dateOfDonation",
          type: "date"
        },
        {
          label: "Remarks",
          field: "status"
        },
        {
          label: "Add",
          field: "link"
        }
      ],
      rows: [],
      remark
    };
  },
  created() {
    const url = process.env.API_URL + "/admin/donor";

    axios
      .get(url, { withCredentials: true })
      .then(res => {
        this.rows = res["data"].Donors;
      })
      .catch(err => {
        this.errors.push(err);
      });
  },
  methods: {
    editRemark(donor) {
      this.temp = donor
      console.log(this.requirement)
    },linkDonor(donor){
      var query = {}
      query.hospitalId = this.requirement.hospitalId
      query.bloodGroup = this.requirement.bloodGroup
      query.typeOfRequirement = this.requirement.typeOfRequirement
      query.patientId = this.requirement.patientId
      query.contactNo = this.requirement.contactNo
      query.donor = donor
      window.axios({
        url:process.env.API_URL + '/admin/linkrequirements',
        method:'put',
        data:query,
        withCredentials:true
      }).then((res)=>{
        console.log(res)

      }).catch((err)=>{
        console.log(err)
      })
    },
    updateRemark(){
      var query = {}
      query.mobileNo = this.temp.mobileNumber
      query.remark = this.remark
      window.axios({
        url:process.env.API_URL + '/admin/donor',
        method:'put',
        data:query,
        withCredentials:true
      }).then((res)=>{
        console.log("1")
        const url = process.env.API_URL + "/admin/donor";
      axios
      .get(url, { withCredentials: true })
      .then(res => {
        this.rows = res["data"].Donors;
      })
      .catch(err => {
        this.errors.push(err);
      });
        }).catch((err)=>{
      })
    }
  }
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

