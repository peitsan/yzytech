<template>
    <div class="wrapper">
        <div id="OrderCenter">
        <el-tabs v-model="tabView">
            <el-tab-pane label="产品采购" name="productions"></el-tab-pane>
            <el-tab-pane label="服务询价" name="service"></el-tab-pane>
        </el-tabs>
        <keep-alive>   
         <component v-bind:is="tabView, tabChange(tabView)" style="background: #FF0000; width: 100%; height: 100%"></component>  
        </keep-alive>
        </div>
    </div>
  </template>
  
  <script>
  import Productions from './OrderCenter/Productions.vue'
  import Service from './OrderCenter/Service.vue'
   import {Menu,MenuItem,Row,Col,Tabs,TabPane} from 'element-ui'
  export default {
    metaInfo: {
      title:
      "订单中心-油之岩科技-废油处置方案定制-智慧采购-数字合同-合作流程",
      meta: [
        {
          name: "keywords",
          content: "订单中心,产品服务,数字化平台,智慧订单,智慧采购,服务流程"
        },
        {
          name: "description",
          content:
          ",致力于油气资源高效低排处置方案创新研发,现为油气处理行业上游提供油基岩屑处置服务方案,同时向下游提供钻井原液、绿化肥料、免烧砖原料、柴油等"
        }
      ]
    },
    data() {
      return {
        tabView:'Productions',
      };
    },
    methods:{
      tabChange(tab){
      if('Productions' == tab){
        this.tabView = 'Productions'
 
      }else if('Service' == tab){
        this.tabView = 'Service'
 
      }
    },
    },
    created() {
      this.tabView = this.$route.params.OrderMode
    },
    components:{
      Menu,MenuItem,Row,Col,Productions,Service,Tabs,TabPane
    }
  };
  </script>
  <style lang="less" scoped>
  .wrapper {
    #OrderCenter {
      width: 80%;
      margin:2% auto;
      h2 {
        margin: 50px auto 30px;
        text-align: center;
        color: #3b3c3f;
        font-size: 1.8em;
      }
      div {
        margin-bottom: 30px;
        h3 {
          width: 1200px;
          margin: auto;
          text-align: left;
          padding-bottom: 20px;
          color: #333333;
        }
        ul {
          margin: auto;
          width: 1200px;
          height: auto;
          overflow: hidden;
          li {
            width: 194px;
            height: 60px;
            margin: 10px 20px;
            float: left;
            text-align: center;
            line-height: 60px;
            border: 3px solid #666666;
            border-radius: 18px;
            a {
              width: 100%;
              height: 100%;
              display: block;
              color: #666666;
              font-size: 1.1em;
            }
            &:hover {
              border: 3px solid #0092ff;
            }
          }
        }
      }
    }
  
    @media screen and (max-width: 1200px) {
      #UserCenter {
        div {
          width: 93%;
          height: auto;
          overflow: hidden;
          margin: 30px auto;
          h3 {
            width: 100%;
          }
          ul {
            width: 100%;
            display: -webkit-flex;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            li {
              flex: 40%;
            }
          }
        }
      }
    }
  }
  </style>