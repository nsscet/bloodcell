import axios from 'axios'
window.axios = axios
import {store} from './store/store'

window.axios.defaults.headers.common = {
  // 'content-type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  'Access-Control-Allow-Origin': '*',
  'Authorization': "Bearer"+store.state.accessToken,
  'x-access-token': store.state.accessToken
}

import querystring from 'querystring'
window.querystring = querystring
