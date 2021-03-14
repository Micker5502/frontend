import axios from "axios"

let service: any={}

axios.defaults.withCredentials = true;
service = axios.create({
    baseURL: "https://localhost:5010",
    timeout:5000
})


service.interceptors.request.use(
    (config: any) => {
      return config;
    },
    (error: any) => {
      // Do something with request error
      console.error("error:", error); // for debug
      Promise.reject(error);
    }
  )
  
  // respone拦截器 axios的一些配置
  service.interceptors.response.use(
    (response: any) => {
      return response;
    },
    (error: any) => {
      console.error("error:" + error); // for debug
      return Promise.reject(error);
    }
  )
  
export default service;