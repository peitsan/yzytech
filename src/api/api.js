// import { Get,PostJson} from '../utils/request';
import request from '../utils/index.js'
import api from '../utils/api';
import { getToken ,setToken} from '../utils/auth.js';
// 添加请求拦截器
request.interceptors.request.use(
    function (config) {
      // 在发送请求之前做些什么
      // 通过config来添加token
      // config.headers.token = getToken();
      console.log(config)
      return config
    },
    function (error) {
      // 对请求错误做些什么
      return Promise.reject(error)
    }
  )
  

const config ={
    headers:{'Access-Control-Allow-Origin':'*'},
    contentType: "application/json",
    dataType: "json",
}
// export function Login(params){
//     return PostJson(api.login,params,config);
// }
export function Login(params){
    return request({
        // 配置请求方式
          method: 'POST',// GET/POSH
          // 请求接口地址
          url: api.login,
          // 要传递的参数
          data: params
        })
}

export function Register(params){
    return request({
      // 配置请求方式
        method: 'POST',// GET/POSH
        // 请求接口地址
        url: api.register,
        // 要传递的参数
        data: params
      })
}

export function RegisterActivate(params){
  return request({
    // 配置请求方式
      method: 'GET',// GET/POSH
      // 请求接口地址
      url: api.registerActivate+`?confirmCode=`+params,
    })
}

export function GetAllOrder(){
  return request({
    // 配置请求方式
      method: 'GET',// GET/POSH
      // 请求接口地址
      url: api.getAllOrder,
    })
}

export function PostNewOrder(params){
  return request({
    // 配置请求方式
      method: 'POST',// GET/POSH
      // 请求接口地址
      url: api.createOrder,
      data:params,
    })
}
// 产品
export function GetAllProductions(){
  return request({
    // 配置请求方式
      method: 'GET',// GET/POSH
      // 请求接口地址
      url: api.getAllProductions,
    })
}