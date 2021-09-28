import axios from "axios";
export function request(config) {
  const instance = axios.use({
    baseURL:'http://123.207.32.32:8000',
    timeout: 5000
  })
  instance.interceptors.request.use(config =>{
      return config
  },error => {
    console.log(error);

  })
  instance.interceptors.response.use(config =>{
    return config.data
  },error => {
    console.log(error);
  })
  //发送请求
  return instance(config)
}
