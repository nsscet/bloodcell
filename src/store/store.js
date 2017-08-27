import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isValidUsername: false,
    username:null,
    accessToken:null,
    isAuthenticated:false,
    usernameErrors:null,
    donor : {
      mobileNumber: null,
      id: null
    },
    isValidMobileNumber:false,
    // donorId:null,
    // mobileNumber:null
  },
  mutations: {
    isAValidUsername(state, username){
      state.isValidUsername = true
      state.username = username
    },
    isNotAValidUsername(state){
      state.usernameErrors = "Enter a valid username"
    },
    updateToken(state , token){
      state.accessToken = token
      state.isAuthenticated = true
    },
    isAValidMobileNumber(state , donorId){
      state.isValidMobileNumber = true
      state.donor.id = donorId
    },
    clearDonorDetails(state){
      state.donor.id = null,
      state.donor.mobileNumber = null,
      state.isValidMobileNumber = null
    },
    updateMobile(state, mobile){
      state.donor.mobileNumber = mobile
    },
    updateId(state , id){
      state.donor.id = id
    }
  }
})
