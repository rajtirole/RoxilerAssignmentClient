// Import axios
import axios from 'axios';  // If using ES6 modules
// const axios = require('axios');  // If using CommonJS modules

// Create an Axios instance with a base URL
const axiosClient = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true, // Send cookies with requests
});



export default axiosClient;  // If using ES6 modules
// module.exports = axiosClient;  // If using CommonJS modules
