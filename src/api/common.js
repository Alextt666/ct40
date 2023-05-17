import axios from "axios";

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});
request.interceptors.response.use(
  (res) => {
    return res?.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default request;
