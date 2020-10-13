import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://luckypassword.me/api" });

export default axiosInstance;
