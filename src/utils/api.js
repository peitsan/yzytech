
//  const WEBPACK_CONFIG_HOST = "https://youzhiyan.com:8080";
// const WEBPACK_CONFIG_HOST = 'https://139.9.81.3:8088'
// const WEBPACK_CONFIG_HOST = 'https://localhost:8088'
// const WEBPACK_CONFIG_HOST = '/api'
const WEBPACK_CONFIG_HOST='';
export default {
  // 账号
    register: WEBPACK_CONFIG_HOST +'/user/create',
    login: WEBPACK_CONFIG_HOST +'/user/login',
    registerActivate: WEBPACK_CONFIG_HOST +'/user/activation',

  // 订单
     getAllOrder: WEBPACK_CONFIG_HOST +'/order/all',
     createOrder: WEBPACK_CONFIG_HOST +'/order/create',  // 生产订单  
  
  // 产品
  getAllProductions: WEBPACK_CONFIG_HOST +'/production/all',  // 生产订单  
  }
