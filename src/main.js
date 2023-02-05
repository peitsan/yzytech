import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
// 滑块验证码控件
import SlideVerify from '../node_modules/vue-monoplasty-slide-verify' // 拼图验证码
Vue.use(SlideVerify)
//地图地址选择器
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: 'QyuHV9sxjtaZ1w3RGCMwV1iFBiicqYXx'
})
// 引入iconfont字体库
import '@/assets/font/iconfont.css'
// 按需引入element-ui
import { 
        Loading,
        Carousel,
         CarouselItem,
         Pagination, 
         Avatar, 
         Popconfirm,
         Popover,
         Button,
         Dialog,
         Tabs,
         TabPane,
        Radio,
        RadioButton,
        RadioGroup,
        Input,
        Form,
        FormItem,
        Dropdown,
        DropdownMenu,
        DropdownItem,
        Menu,
        MenuItem,
        Submenu,
        MenuItemGroup,
        Col,
         Row,
        Container,
        Aside,
        Main,
        Card,
        Upload,
        Message,
        Table, 
        TableColumn,
        Tag} from "element-ui";
Vue.use(Tag);     
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Radio);    
Vue.use(Loading.directive);
// Vue.use(Message);
Vue.use(Upload);
Vue.use(Card);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Col);
Vue.use(Row);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Input);
// 首页element-ui轮播图
Vue.use(Carousel);
Vue.use(CarouselItem);
// 行业资讯element-ui分页器
Vue.use(Pagination);
// 头像控制
Vue.use(Avatar);
// 交互气泡控制
Vue.use(Popconfirm);
Vue.use(Popover);
Vue.use(Dialog);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(RadioButton);
Vue.use(RadioGroup);

// 引入vue-meta-info用于动态设置网页meta
import MetaInfo from 'vue-meta-info'
Vue.use(MetaInfo)
// 引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
// 引入VueLazyload
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

//把axios作为Vue的原型属性
Vue.prototype.$axios = axios;
// axios默认配置
// axios.defaults.baseURL = 'http://127.0.0.1:3000'; //设置axios默认baseURL
// axios.defaults.timeout = 5000;//设置请求超时时间

// Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    // seo优化预渲染
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
