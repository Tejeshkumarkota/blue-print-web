import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://authdev.ict.ae/api/',
    baseURL: 'https://webappapitest.ict.ae/api/',
    // baseURL: process.env.REACT_APP_API_URL,
});

export default instance;