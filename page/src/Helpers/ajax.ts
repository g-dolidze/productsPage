import axios, { Axios } from "axios";

const ajax = axios.create({
  baseURL: "https://dummyjson.com/",
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

ajax.interceptors.request.use(
  function (config) {
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);
export default ajax;
