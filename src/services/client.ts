import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'https://luckypassword.me/api' });

export default axiosInstance;
