import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isValidUsername: false,
    usernameErrors:null,
    username:null,
    accessToken:null,
    isAuthenticated:false,
    mobileNumber:null,
    isValidMobileNumber:false,
    donorId:null
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
      state.donorId = donorId
    },
    clearDonorDetails(state){
      state.donorId = null,
      state.mobileNumber = null,
      state.isValidMobileNumber = null
    },
    updateMobile(state, mobile){
      state.mobileNumber = mobile
    }
  }
})
