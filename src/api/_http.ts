import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8888';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// custom header
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default axios