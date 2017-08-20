import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isValidUsername: false,
    usernameErrors:null
  },
  mutations: {
    isAValidUsername(state){
      state.isValidUsername = true
    },
    isNotAValidUsername(state){
      state.usernameErrors = true
    }
  }
})
