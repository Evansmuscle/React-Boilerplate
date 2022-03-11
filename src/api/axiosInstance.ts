import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://baseurl.com',
});

export default axiosInstance;
