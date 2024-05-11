import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    // 首页
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // 品牌
    path: '/brand',
    name: 'Brand',
    // 路由懒加载
    component: () => import('../views/Brand.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    // 工具集
    path: '/kit',
    name: 'Kit',
    component: () => import('../views/Kit.vue')
  },
  {
    // 行业资讯
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')
  },
  {
    // 资讯详情
    path: '/newsDetails/:newsId',//  必须写相对而言parmas比query更严格，如果不写/:newsId刷新页面后将丢失传递过来的数据
    name: 'NewsDetails',
    props: true, //解耦
    // query更加类似于我们ajax中get传参，params则类似于post，说的再简单一点，前者在浏览器地址栏中显示参数，后者则不显示，这里用到的是params，必须写name
    component: () => import('../views/NewsDetails.vue')
  },
  {
    // 招募令
    path: '/employ',
    name: 'Employ',
    component: () => import('../views/Employ.vue')
  },
  {
    // 联系我们
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue')
  },
  // 以下为定制网站小程序公众号APP介绍页路由
  {
    //经理服务
    path: '/ManagerService',
    name: 'ManagerService',
    component: () => import('../views/ManagerService.vue')
  },
  {
    // 加工链合作
    path: '/Corperation',
    name: 'Corperation',
    component: () => import('../views/Corperation.vue')
  },
  {
    // 建筑原料
    path: '/ContructionMaterial',
    name: 'ContructionMaterial',
    component: () => import('../views/ContructionMaterial.vue')
  },
  {
    // 石油原油
    path: '/Oilforindustry',
    name: 'Oilforindustry',
    component: () => import('../views/Oilforindustry.vue')
  },
  {
    // 解决方案
    path: '/Solution',
    name: 'Solution',
    component: () => import('../views/Solution.vue')
  }
  ,{
    // 用户中心
    path: '/UserCenter',
    name: 'UserCenter',
    component: () => import('../views/UserCenter.vue'),
    children: [
	    {
			path: "/UserCenter/User/index",
			component: () => import('../views/UserCenter/User.vue')
		},
    {
			path: "/UserCenter/UserSafe/index",
			component: () => import('../views/UserCenter/UserSafe.vue')
		},
		{
			path: "/UserCenter/Enterprise/index",
			component: () => import('../views/UserCenter/Verification.vue')
		},
	]
  },
  // 激活页面
  {
    path: "/UserCenter/Activation",
    component: () => import('../views/UserCenter/Activation.vue')
  },
  ,
  {
    //订单中心
    path: '/OrderCenter',
    name: 'OrderCenter',
    component: () => import('../views/OrderCenter.vue'),
    children: [
	    {
      name:'Productions',
			path: "/OrderCenter/:OrderMode",
			component: () => import('../views/OrderCenter/Productions.vue')
		},
    {
      name:'Service',
			path: "/OrderCenter/:OrderMode",
			component: () => import('../views/OrderCenter/Service.vue')
		}
	]
  }
  ,
  {
    //管理中心
    path: '/AdminCenter',
    name: 'AdminCenter',
    component: () => import('../views/AdminCenter.vue'),
    children: [
	    {
			path: "/AdminCenter/:OrderMode",
			component: () => import('../views/AdminCenter/Consumption.vue')
		}
	  ]
  }
  ,
  {
    // 路径错误时访问首页
    path: '*',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',//对比hash模式路由更美观无#
  base: process.env.BASE_URL,
  routes
})

export default router
