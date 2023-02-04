// 对http请求进行封装
import axios from 'axios'
const WEBPACK_CONFIG_HOST = 'https://139.9.81.3:8088'
// 使用自定义的配置文件发送请求
const instance = axios.create({
    baseURL: WEBPACK_CONFIG_HOST,
    timeout: 5000,
    headers: {
        'Access-Control-Allow-Origin':'*'
    }
});
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    instance// 对响应数据做点什么
    if(response.status === 200){
        return response.data;
    }else{
        console.error("请求错误")
        console.error(response)
    }
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default instance
