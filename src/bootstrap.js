import axios from 'axios'
window.axios = axios
import {store} from './store/store'



window.axios.defaults.headers.common = {
  // 'content-type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  'Access-Control-Allow-Origin': 'http://localhost:3000',
  'Authorization': "Bearer"+store.state.accessToken,
  'x-access-token': store.state.accessToken,
  'withCredentials': true
}

import querystring from 'querystring'
window.querystring = querystring
