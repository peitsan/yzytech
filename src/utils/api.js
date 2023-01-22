/**
 * WEBPACK_CONIFG_HOST的值，在webpack.config.js中更改
 * 开发环境时 = "http://amptest.wisedu.com/xsfwfw/"
 * 发布环境时 = 
 */

 const WEBPACK_CONFIG_HOST = "https://youzhiyan.cn/api/";

export default {
    register: WEBPACK_CONFIG_HOST +'/sys/cquptsmqd/get_schedule.do',
    login: WEBPACK_CONFIG_HOST +'/sys/cquptsmqd/check_can_sign_in.do',
  }
