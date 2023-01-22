import axios from 'axios'
import api from './api'

const UA = navigator.userAgent.toLowerCase()
function serialize(data) {
  if (!data) return '';
  var pairs = [], value;
  for (var name in data) {
    if (!data.hasOwnProperty(name)) continue;
    if (typeof data[name] === 'function') continue;
    value = data[name].toString();
    name = encodeURI(name);
    value = encodeURI(value);
    pairs.push(name + '=' + value);
  }
  if (pairs.length) {
    return '?' + pairs.join('&');
  } else {
    return ''
  }
}

function getApi (name) {
  return api[name] || name
}

/**
 * @method Post
 * @description post请求
 * @param {String} url - 请求地址，可以是api中定义的名称，或者具体的url地址
 * @param {Object} data - 请求参数
 * @param {*} config - 请求配置，详见axios文档 [https://github.com/mzabriskie/axios]
 */
export const Post = (url, data = null, config = {}) => {
  return axios({
    method: 'post',
    url: getApi(url),
    data: data,//参数，有就填，无则省去  ，需要注意下，使用post请求，属性要用data ，本来这样是可以了的，但后端需要用json格式，这时还需要加"transformRequest"属性对请求数据进行格式化
    ...config,
    transformRequest: function(obj){
      var str = [];
  for ( var p in obj) {
      str.push(encodeURIComponent(p) + "="
      + encodeURIComponent(obj[p]));
      }
      return str.join("&");
    }
    // adapter: config.mockFlag ? () => MOCK_DATA[config.mock] : null
})
}
export const PostJson = (url, data = null, config = {}) => {
  return axios({
    method: 'post',
    url: getApi(url),
    data: data,//参数，有就填，无则省去  ，需要注意下，使用post请求，属性要用data ，本来这样是可以了的，但后端需要用json格式，这时还需要加"transformRequest"属性对请求数据进行格式化
    ...config,
    transformRequest: function(obj){
      var str = [];
  for ( var p in obj) {
      str.push(encodeURIComponent(p) + "="
      + encodeURIComponent(obj[p]));
      }
      return str.join("&");
    }
    // adapter: config.mockFlag ? () => MOCK_DATA[config.mock] : null
})
}

/**
 * @method Get
 * @description get请求, 判断运行环境为今日校园时，使用原生壳子提供的get方法（此方法可以解决跨域问题）；若运行环境不是今日校园，则使用axios的get请求方法
 * @param {String} url - 请求地址，可以是api中定义的名称，或者具体的url地址
 * @param {Object} data - 请求参数
 * @param {*} config - 运行环境是今日校园时，此参数为header参数；运行环境不是今日校园时，此参数为请求配置，详见axios文档 [https://github.com/mzabriskie/axios]；
 */

export const Get = (url, data = null, config = {}) => {
//   } else {
    return axios({
      method: 'get',
      url: getApi(url),
      params: data,
      ...config
    })
//   }
}

function S4() {
  return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}
/**
 * @description 生产UUID
 */
export const Guid = () => {
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
/**
 * @description 日期格式转换
 */
export const StringToDateFormat = (date) => {
  //DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
  //return df.format(date);
 
}

