import Vue from 'vue'
import Router from 'vue-router'

import { store } from '../store/store'

import Hello from '@/components/Hello'
import Login from '@/components/login/Master'
import registerDonation from '@/components/registerDonation/Master'
import getMobile from '@/components/getMobile/Master'
import registerDonor from '@/components/registerDonor/Master'
import Success from '@/components/success'
import Dashboard from '@/components/dashboard/Master'
import searchDonors from '@/components/searchDonor/Master'
import postRequirement from '@/components/postRequirement/Master'
import createUser from '@/components/createUser/Master'
import uploadPage from '@/components/uploadPage/Master'
Vue.use(Router)

export default new Router({

  mode: 'history',

  routes: [
    {
      path: '/',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (!store.state.isAuthenticated) {
          next()
        } else {
          redirect: '/getmobile'
        }
      }
    },
    {
      path: '/dash',
      component: Dashboard,
      name: 'dash'
    },
    {
      path: '/login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (!store.state.isAuthenticated) {
          next()
        } else {
          redirect: '/getmobile'
        }
      }
    },
    {
      path: '/registerdonation',
      component: registerDonation,
      beforeEnter: (to, from, next) => {
        if (store.state.isAuthenticated) {
          next()
        } else {
          redirect: '/login'
        }
      }
    },
    {
      path: '/getmobile',
      component: getMobile,
      beforeEnter: (to, from, next) => {
        if (store.state.isAuthenticated) {
          next()
        } else {
          redirect: '/login'
        }
      }
    },
    {
      path: '/registerdonor',
      component: registerDonor,
      beforeEnter: (to, from, next) => {
        if (store.state.isAuthenticated) {
          next()
        } else {
          redirect: '/login'
        }
      }
    },
    {
      path: '/searchdonors',
      component: searchDonors,
      beforeEnter: (to, from, next) => {
        if (store.state.isAuthenticated) {
          next()
        } else {
          redirect: '/login'
        }
      }
    },
    {
       path: '/users',
      component: createUser,
      beforeEnter: (to, from, next) => {
        if (store.state.isAuthenticated) {
          next()
        } else {
          redirect: '/login'
        }
      }
    },
    {
      path: '/postrequirement',
      component: postRequirement,
      beforeEnter: (to, from, next) => {
        if (store.state.isAuthenticated) {
          next()
        } else {
          redirect: '/login'
        }
      }
    },
    {
      path:'/upload',
      component: uploadPage,
      beforeEnter: (to, from, next) => {
        if (store.state.isAuthenticated) {
          next()
        } else {
          redirect: '/login'
        }
      }
    },
    {
      path: '/success',
      component: Success
    }
  ]
})
