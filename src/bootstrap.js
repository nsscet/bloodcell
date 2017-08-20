import axios from 'axios'
window.axios = axios

window.axios.defaults.headers.common = {
  // 'content-type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  'Access-Control-Allow-Origin': '*'
}

import qs from 'querystring'
window.qs = qs
