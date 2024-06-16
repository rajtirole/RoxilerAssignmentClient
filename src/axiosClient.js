// Import axios
import axios from 'axios';  // If using ES6 modules
// const axios = require('axios');  // If using CommonJS modules

// Create an Axios instance with a base URL
const axiosClient = axios.create({
  baseURL: 'https://roxilerassignmentserver.onrender.com/api',
  withCredentials: true, // Send cookies with requests
});



export default axiosClient;  // If using ES6 modules
// module.exports = axiosClient;  // If using CommonJS modules
