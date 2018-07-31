import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import '../bootstrap'

import * as plugins from './plugins'

export const store = new Vuex.Store({
  state: {
    isValidUsername: false,
    username: null,
    // accessToken:null,
    role:null,
    isAuthenticated: false,
    usernameErrors: null,
    serverErrors: null,
    passwordErrors: null,
    donor: {
      donorId: null,
      name: null,
      place: null,
      mobileNumber: null,
      bloodGroup: null,
      email: null
    },
    isValidMobileNumber: false
  },
  plugins: [plugins.loadFromCache],
  mutations: {
    isAValidUsername (state, username) {
      state.isValidUsername = true
      state.username = username
    },
    loadUsernameFromCache (state, username) {
      state.isAuthenticated = true
      state.username = username
      state.isValidUsername = true
    },
    isNotAValidUsername (state) {
      state.usernameErrors = 'Enter a valid username'
    },
    updateServerErrors (state, message) {
      state.serverErrors = message
    },
    updatePasswordErrors (state, message) {
      state.passwordErrors = message
    },
    isAValidMobileNumber (state) {
      state.isValidMobileNumber = true
    },
    loginSuccess (state,role) {
      state.isAuthenticated = true
      state.role = role
      localforage.setItem('username', state.username)
      .catch((err) => {
        throw err
      })
    },
    logout (state) {
      store.commit('clearCache')
      state.isAuthenticated = false
    },
    clearCache (state) {
      localforage.removeItem('username')
      .catch((err) => {
        throw err
      })
    },
    clearDonorDetails (state) {
      for (var key in state.donor) state.donor[key] = null
    },
    updateMobile (state, mobile) {
      state.donor.mobileNumber = mobile
    },
    updateId (state, id) {
      state.donor.donorId = id
    },
    updateDonor (state, donor) {
      state.donor.name = donor.name
      state.donor.donorId = donor.donorId
      state.donor.email = donor.email
      state.donor.place = donor.place
      state.donor.bloodGroup = donor.bloodGroup
      state.donor.mobileNumber = donor.mobileNumber
    },
    notValidOrganisation(state){
      state.usernameErrors = 'Username Exists'
    }
  }
})
