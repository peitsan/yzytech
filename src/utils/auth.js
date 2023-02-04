//1.定义token和user字符串
const TokenKey = 'merchantToken';
const USER = 'user';
 
//2.设置token和user（用户信息）--在登录成功之后设置并跳转到首页，必须传入登录之后返回的token和用户资料
export function setToken(token,user) {
  sessionStorage.setItem(TokenKey, token);//会话存储
  localStorage.setItem(USER, JSON.stringify(user));//持久存储
}
 
//3.获取token
export function getToken() {
  return sessionStorage.getItem(TokenKey);
}
//4.移除token--退出登录时调用并跳转到首页或登录页
export function removeToken() {
  sessionStorage.removeItem(TokenKey);
}
 
/*用户信息数据格式：
* {"userName":"13041064035","nickName":"ass","phone":"1302","role":1,"sex":null,"post":"sss","deptName":null,"merchantName":null,"id":64}
* */
//5.获取用户信息
export function getUSER() {
  let userjson = localStorage.getItem(USER);
  if (userjson){
    return JSON.parse(userjson);
  } else {
    return {};
  }
}