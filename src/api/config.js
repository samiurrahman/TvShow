import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded' // Header
axios.defaults.baseURL = 'http://api.tvmaze.com' // Setting base URL

// interceptors Request
axios.interceptors.request.use(
  config => {
    // Do something
    return config
  },
  error => {
    // Do something
    return Promise.reject(error)
  }
)

// interceptors Response
axios.interceptors.response.use(
  response => {
    // Do something
    return response
  },
  error => {
    // Do something
    return Promise.reject(error)
  }
)
