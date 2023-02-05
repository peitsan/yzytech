<template>
  <div class="wrapper">
    <!-- header开始 -->
    <div id="header">
      <!-- 顶部电话邮箱 -->
      <div id="top">
        <ul>
          <li>
            <i class="iconfont icon-youxiang-"></i>
            <a :href="'mailto:'+contactWay.email" v-text="contactWay.email"></a>
          </li>
          <!--<li>
            <i class="iconfont icon-dianhua"></i>
            <a :href="'tel:'+contactWay.tel" v-text="contactWay.tel"></a>
          </li>-->
        </ul>
      </div>
      <!-- 导航栏 -->
      <div id="nav">
        <!-- 公司logo -->
        <h1>
          <a href="https://www.youzhiyan.com/">
            <img src="https://resource.youzhiyan.cn/logo.png" width="10%" alt="油之岩科技发展有限公司" />
            <span>
            重庆油之岩科技
            </span>
          </a>
        </h1>
        <!-- 响应式导航栏按钮 -->
        <span class="muen" @click="navbtn">
          <i :class="navBtnClass"></i>
        </span>
        <!-- 导航栏列表 -->
        <ul :class="{'navActive':navShow}" @click="navhidden">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/brand">品牌文化</router-link>
          </li>
          <li>
            <router-link to="/about">社会价值</router-link>
          </li>
          <li>
            <router-link to="/kit">产品服务</router-link>
          </li>
          <li>
            <router-link to="/news">行业资讯</router-link>
          </li>
          <li>
            <router-link to="/contacts">联系我们</router-link>
          </li>
          <li>
            <router-link to="/employ">相约油之岩</router-link>
          </li>
          <!-- 未登录态 -->
          <li v-if="!this.isLogin" >
            <el-popover
              id = "login"
              placement="bottom"
              width="300"
              trigger="hover"
              :v-model="this.popVisible"
              >  
               <div style="
                width:300px;
                text-align: center;
                font-size:large;
                font-weight: 600;"> 
                  登录后您可以:
                </div>
                <div style="width:300;
                      margin: 0 30px;
                      line-height:45px;
                      display: flex;
                      flex-flow: inline;"> 
                  <div style="width:120px;
                        margin: 0 10px; 
                      ">
                    <i style="width:10px,color:#000" class="iconfont icon-Tab_lishijilu"></i>回溯服务进度</div>
                  <div style="width:120px;
                  margin: 0 10px; 
                     "> <i style="width:10px" class="iconfont icon-Tab_goumaifuwu"></i>体验平台功能</div>
                </div>

                <div style="width:300;
                      margin: 0 30px;
                      line-height:45px;
                      display: flex;
                      flex-flow: inline;"> 
                  <div style="width:120px;
                        margin: 0 10px; 
                      ">
                    <i style="width:10px" class="iconfont icon-service"></i>专员经理咨询</div>
                  <div style="width:120px;
                    margin: 0 10px; 
                     "> <i style="width:10px" class="iconfont icon-Icon_template"></i>了解产品详情</div>
                </div>
                <el-button  type="primary"
                        autofocus
                        round
                        style="
                        margin: 5% 4%;
                        width:280px;
                        background-color: #B2CAFE;
                        " 
                        @click="()=>{this.loginModalStatus=true }">
                        登录</el-button>
                <div style="
                    text-align: center;
                    font-size:medium;
                    font-weight: 500;
                    margin:0 8px " > 
                  <span>首次使用,</span>
                  <span
                  id="registerAlink"
                  style="color:#89AFE0;
                    text-align: center;
                    font-size:medium;
                    font-weight: 500;
                    margin:0 8px"
                    >
                    <el-button type="text" @click="()=>{this.registerModalStatus = true}">这里注册!</el-button>
                  </span>
                </div>
              <el-avatar slot="reference">登录 
              </el-avatar> 
            </el-popover>
           </li>
           <!-- 登录态菜单 -->
           <li v-if="this.isLogin" style="height:60px">
               <el-dropdown >
                    <el-avatar :src="this.userInfo.Avatar" @click="this.router.push('/UserCenter/User/index')">
                    </el-avatar>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-user" @click.native="routerToUserCenter" >个人中心</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-goods" @click.native="routerToOrderCenter">我的订单</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-s-check" @click.native="routerToVerification">我的认证</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-d-arrow-right" @click.native="loginOut">注销登录</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
           </li>
        </ul>
      </div>
    </div>
    <!-- header结束 -->
    <LoginRegisterModal
    :registerModal="this.registerModalStatus" 
    :loginModal="this.loginModalStatus"
    @ModalStatus="modalCloseHandle"
    @hasLogin="confirmLogin"
                />
   </div>
</template>
<script>
import {Dropdown,DropdownMenu,DropdownItem} from 'element-ui'
import  LoginRegisterModal from '@/components/LoginModal.vue';
export default {
    props: ["contacts"],
    components: {
      LoginRegisterModal,Dropdown,DropdownMenu,DropdownItem
    },
    mounted() {
    },
    data() {
        return {
            registerModalStatus:false,
            loginModalStatus:false,
            popVisible: false,
            userInfo:{
              Avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
            },
            isLogin: false,
            contactWay: {
                // 网站顶部邮箱
                email: "cqyzytech@163.com",
                // 网站顶部电话
                tel: ""
            },
            navShow: true,
            navBtnClass: "iconfont icon-daohang1"
        };
    },
    methods: {
      routerToUserCenter(){
        this.$router.push('/UserCenter/User/index')
      },
      routerToOrderCenter(){
        this.$router.push('/OrderCenter/Productions')
      },
      routerToVerification(){
        this.$router.push('/UserCenter/Enterprise/index')
      },
      confirmLogin(val){
        let userInfo = {
            isLogin: true,
            manage: true,
            name: 'admin',
            contactsAddress:'重庆',
            customCompany:'油之岩科技',
          };
          sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
          this.$store.state.userInfo = userInfo
          console.log('this.$store.state.userInfo', this.$store.state.userInfo)
        this.isLogin = this.$store.state.userInfo.isLogin;
        // 登录成功回调
      },
        // 注销登录
        loginOut(){
          sessionStorage.clear();
          this.$store.state.userInfo.isLogin=false;
          this.isLogin = false;
        },
        modalCloseHandle(val){
          if(!val){
            this.registerModalStatus = false;
            this.loginModalStatus = false;
          }
        },
        navbtn() {
            // 通过class的变化控制导航按钮图标
            this.navShow
                ? (this.navBtnClass = "iconfont icon-guanbi")
                : (this.navBtnClass = "iconfont icon-daohang1");
            //通过navShow的取反控制是否绑定navActive类,控制菜单是否显示
            this.navShow = !this.navShow;
        },
        navhidden() {
            // 修复路由跳转后菜单不收起的bug
            this.navShow = !this.navShow;
            this.navBtnClass = "iconfont icon-daohang1";
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
    created() {
        // 将父组件props传递过来的值赋给data中contactWay
        this.contactWay = this.contacts;
    },
};
</script>
<style lang="less" scoped>
.wrapper {
  height: 92px;
  #header {
    // 顶部email和phone
    position: relative;
    z-index: 999;
    border-bottom: 1px solid #eeeeee;
    box-shadow: 0 0 6px #eeeeee;
    #top {
      height: 32px;
      background: #3a3e3f;
      overflow: hidden;
      ul {
        display: block;
        width: 1200px;
        margin: auto;
        line-height: 32px;
        li {
          float: left;
          a {
            color: #cad2d5;
            font-size: 1em;
          }
          margin-right: 20px;
          &:hover a {
            color: #ff8a00;
          }
          i {
            color: #ffffff;
            font-size: 1.2em;
            margin: 0px 15px;
          }
        }
        .userProfile{
          height: 60px
        }
      }
    }
    // 顶部导航栏及LOGO样式
    #nav {
      clear: both;
      width: 1200px;
      height: 60px;
      margin: auto;
      position: relative;
      z-index: 999;
      // LOGO
      h1 {
        float: left;
        margin-top: 5px;
        line-height: 50px;
        img {
          width: 50px;
          height: 50px;
        }
        span{
          margin-right: 30px;
        }
      }
      // 隐藏nav按钮
      .muen {
        display: none;
      }
      // 导航栏
      > ul {
        line-height: 50px;
        > li {
          float: left;
          a {
            display: block;
            width: 100px;
            height: 40px;
            margin: 10px 5px;
            text-align: center;
            line-height: 40px;
            color: #000000;
          }
          span{
            border-radius: 50%;
            margin: 5px ;
            float: right !important;
            background: #D5DEEF;
          
          }
          .title-h1{
            width:200rpx;
            text-align: center;
            font-size:large;
            font-weight: 600;
          }
          // 根据路有变化改变导航样式
          .router-link-exact-active {
            background: #0092ff;
            border-radius: 50px;
            color: #ffffff;
          }
          .active {
            background: #0092ff;
            border-radius: 50px;
            color: #ffffff;
          }

        
          
        }
      }
    }
  }

  // header响应式（当像素在1200px以下时显示以下样式）
  @media screen and (max-width: 1200px) {
    #header {
      border-bottom: 1px solid #b9b9b9;
      #top {
        ul {
          width: 100%;
          li {
            font-size: 0.6em;
            line-height: 32px;
            i {
              margin: 0px 0px;
            }
          }
        }
      }
      #nav {
        width: 100%;
        height: 60px;
        display: -webkit-flex;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 999;
        // logo样式
        h1 {
          height: auto;
          display: -webkit-flex;
          display: flex;
          align-items: center;
          img {
            height: 40px;
            width: 40px;
            margin-left: 30px;
          }
          span{
            font-size:18px;
          }
        }
        // 导航栏按钮样式
        .muen {
          display: block;
          width: 32px;
          height: 32px;
          line-height: 32px;
          margin-right: 30px;
         i {
            font-size: 1.8em;
            color: #b9b9b9;
            padding-right:40px;
          }
        }
        // 通过是否绑定navActive类控制导航显示
        .navActive {
          display: none;
        }
        > ul {
          position: absolute;
          top: 50px;
          right: 0;
          z-index: 999;
          width: 240px;
          background: #f7f7f7;
          border-radius: 0 0 0 10px;
          overflow: hidden;
          li {
            width: 240px;
            height: 44px;
            line-height: 43px;
            text-align: center;
            border-bottom: 1px solid #ffffff;
            span{
              background: #f7f7f7;
              color: #000;
              margin: 0 50px;
            }
            a {
              width: 100%;
              height: 100%;
              margin: 0;
            }
            // 根据路有变化改变导航样式
            .router-link-exact-active {
              border-radius: 0;
            }
            .active {
              border-radius: 0;
            }
          }
        }
      }
    }
  }
}
</style>