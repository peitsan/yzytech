// 导入axios
import axios from 'axios'
// const WEBPACK_CONFIG_HOST = 'https://139.9.81.3:8088';
const WEBPACK_CONFIG_HOST = '/api'
// 创建axios
const request = axios.create({
//配置代理接口
  baseURL: WEBPACK_CONFIG_HOST,
  // 响应时间
  timeout: 10000,
})
// 暴露
export default request
