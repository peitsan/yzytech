<template>
  <div class="wrapper">
    <div id="kitBorder">
      <h2>油之岩数字化服务平台(陆续推出)</h2>
      <div v-for="(item,index) in kitItem" :key="index">
        <h3 v-text="item.itemClass"></h3>
        <ul>
          <li v-for="(item2,index2) in item.list" :key="index2">
            <a v-if="!isLogin" @click="alertUnlogin" v-text="item2.title"></a>
            <a  v-if="isLogin" :href="item2.href" v-text="item2.title"></a>
            <!-- <router-link :to="{ name:'register',params:{'name':'San'} }">{{item2.title}}</router-link> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui';
export default {
  watch:{
    $store: {
        handler(newVal, oldVal) {
          console.log(newVal);
          this.isLogin = this.$store.state.userInfo.isLogin;
        },
        deep: true,
        immediate: true
        },
  },
  metaInfo: {
    title:
      "产品服务-油之岩科技-废油处置方案定制-智慧采购-数字合同-合作流程",
    meta: [
      {
        name: "keywords",
        content: "产品服务,数字化平台,智慧订单,智慧采购,服务流程"
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
      isLogin:false,
      kitItem: [
        {
          itemClass: "产品服务:",
          list: [
            {
              title: "产品订购",
              href: "/OrderCenter/Productions"
            },
            {
              title: "服务询价",
              href: "/OrderCenter/Service"
            },
          ]
        },
        {
          itemClass: "订单管理:",
          list: [
            {
              title: "订单管理",
              href: "/AdminCenter/Consumption"
             }
          ]
        },
      ]
    };
  },
  methods:{
    alertUnlogin(){
      if(!this.isLogin)
      Message({
              message:'暂未登录,无法使用本功能!',
              type:'error'
            })
    }
  },  
  mounted(){
      let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
      if (null === userInfo) return;
      if (userInfo.isLogin) {
        this.$store.state.userInfo = userInfo;
      this.isLogin = this.$store.state.userInfo.isLogin;
      }
    },
  components:{
    Message,
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  #kitBorder {
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
    #kitBorder {
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