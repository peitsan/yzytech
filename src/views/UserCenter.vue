<template>
    <div class="wrapper">
     <div id="UserCenter">
      <el-container>
      <el-aside width="240px">
        <el-menu
      router
      :default-active="this.$route.path" 
      class="el-menu-vertical-demo"
      :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>个人中心</span>
        </template>
        <el-menu-item-group title="基本信息">
          <template slot="基本信息">基本信息</template>
          <el-menu-item index="/UserCenter/User/index">个人信息</el-menu-item>
          <el-menu-item index="/UserCenter/UserSafe/index">安全管理</el-menu-item>
          <el-menu-item index="/UserCenter/Template/index">报表模板</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="企业信息">
         <template slot="企业信息">企业信息</template>
          <el-menu-item index="/UserCenter/Enterprise/index">企业认证</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">功能中心</span>
        </template>
        <el-menu-item-group title="功能指南">
         <template slot="功能指南">功能指南</template>
          <el-menu-item index="2-1">订单系统</el-menu-item>
          <el-menu-item index="2-2">进度回溯</el-menu-item>
          <el-menu-item index="2-3">专员经理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
        <i class="el-icon-setting"></i>
        <span slot="title">设置管理</span>
        </template>
        <el-menu-item-group title="功能指南">
         <template slot="功能指南">系统设置</template>
          <el-menu-item index="3-1">订单系统</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
        <i class="el-icon-service"></i>
        <span slot="title">反馈中心</span>
        </template>
        <el-menu-item-group title="反馈中心">
         <template slot="反馈中心">反馈中心</template>
          <el-menu-item index="4-1">常见问题</el-menu-item>
          <el-menu-item index="4-2">在线客服</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
        </div>
    </div>
  </template>
  <script>
  import {Menu,MenuItem,Row,Col,Container,Aside,Main} from 'element-ui'
  export default {
    metaInfo: {
      title:
        "用户中心-油之岩科技-废油处置方案定制-智慧采购-数字合同-合作流程",
      meta: [
        {
          name: "keywords",
          content: "用户中心,产品服务,数字化平台,智慧订单,智慧采购,服务流程"
        },
        {
          name: "description",
          content:
          "重庆油之岩科技发展有限公司以资源化利用为核心,致力于油气资源高效低排处置方案创新研发,现为油气处理行业上游提供油基岩屑处置服务方案,同时向下游提供钻井原液、绿化肥料、免烧砖原料、柴油等"
        }
      ]
    },
    data() {
      return {
        isCollapse: false
        
      };
    },
    mounted(){
      const res = window.matchMedia("(max-width: 1200px)").matches;
      console.log(res);
      if(res){
        this.isCollapse = true;
      }
    },
    methods:{
      openMenu(){

      },
      closeMenu(){

      }
    },
    created() {
      
    },
    components:{
      Menu,MenuItem,Row,Col,Container,Aside,Main
    }
  };
  </script>
  <style lang="less" scoped>
  .wrapper {
    #UserCenter {
      height:830px;
      width:80%;
      margin:0 10%;
      .el-aside{
        height: 830px;
        overflow-y: visible;
      }
    }
  
    @media screen and (max-width: 1200px) {
      #UserCenter {
      height:830px;
      width:100%;
      margin:0;
      .el-aside{
        width: 50px !important;
        overflow-y: visible;
      }
    }
  }
}
  </style>