<template>
<el-dialog :visible.sync="ModalStatus" class="wrap">
  <div class="contain">
    <div class="loginCode">
        <div>扫码登录</div>
        <img :src="this.loginCode.path"/>
    </div>
    <div class="loginForm">
        <div class="switchType">
          <el-radio-group v-model="FunctionStatus"  @input="(e) => console.log(e)" style="margin-bottom: 20px;">
            <el-radio-button label="login"  key="login">登录</el-radio-button>
            <el-radio-button label="register"   key="register">注册</el-radio-button>
          </el-radio-group>
        </div>
    <keep-alive >   
      <loginPane  @hasLogin="this.confirmLogin" v-if="this.tabView === 'loginPane'"/>
      <registerPane @hasRegister="this.confirmRegister" v-if="this.tabView === 'registerPane'"/>
      <component v-bind:is="tabView, tabChange(FunctionStatus)" style="background: #FF0000; width: 100%; height: 100%">
      </component>  
    </keep-alive> 
    </div>
  </div>
</el-dialog>

  
</template>
<style lang="less">
.wrap{
  width: 180vh;
  margin:0 auto;
  .contain{
    display: flex;
    flex-flow: inline;
    
    .loginCode{
      width:40%;
      height: 80%;
      text-align: center;
      img{
        width:150px;
        height: 150px;
        margin: 10px auto;
      }
    }
    .loginForm{
      width:75%;
      height: 80%;
      border-left:solid;
      border-width: 2px;
      border-color: #f1f1f1;
      box-sizing: border-box;
      .Modal-submitBtn{
        position:relative;
        bottom:10px;
      }
      .switchType{
        width: 100%;
        margin:0 35%
      }
      .loginPane{
        width:240px;
        margin: 0 auto;
        .login-container{
          width:100%;
          height:300px;
          .el-input__inner{
            border-radius: 30px;
            height: 40px;
          }
          .verification .el-input__inner {
            border-radius: 30px 0 0 30px;
            height: 40px;
          }
          .verification .el-input-group__append {
            border-radius: 0 30px 30px 0 !important;
            background-color: #B2CAFE;
            color: #fff;;
          }
          .Modal-submitBtn button{
            border-radius: 30px;
          }
        }
      }
    }
  }
  
}
@media screen and (max-width: 1200px){
  .wrap{
  width: 650px;
  margin:0 -120px ;
  .contain{
    display: flex;
    flex-flow: inline;
    
    .loginCode{
      display: none;
    }
    .loginForm{
      width:100%;
      height: 80%;
      border: none;
      box-sizing: border-box;
      .Modal-submitBtn{
        position:relative;
        bottom:10px;
      }
      .switchType{
        width: 100%;
        margin:0 25%
      }
      .loginPane{
        width:240px;
        margin: 0 auto;
        .login-container{
          width:100%;
          height:300px;
          .el-input__inner{
            border-radius: 30px;
            height: 40px;
          }
          .verification .el-input__inner {
            border-radius: 30px 0 0 30px;
            height: 40px;
          }
          .verification .el-input-group__append {
            border-radius: 0 30px 30px 0 !important;
            background-color: #B2CAFE;
            color: #fff;;
          }
          .Modal-submitBtn button{
            border-radius: 30px;
          }
        }
      }
    }
  }
  
}
}

</style>

<script> 
  import { Dialog, RadioButton,RadioGroup, Input} from 'element-ui'
  import loginPane from './components/loginPane.vue'
  import registerPane from './components/registerPane.vue'
  export default {
    props: {
      registerModal: {
            type: Boolean
        },
        loginModal:{
          type: Boolean
        }
    },
    data() {
      return {
        userInfo:{
          password:'',
          account:''
        },
        rePassword:'',
        loginCode:{
          path:'https://resource.youzhiyan.cn/image/cdcode.png'
        },
        FunctionStatus:'register',
        tabView:'loginPane',
        registerModalValue: true,
        loginModalValue: false,
        ModalStatus:false,
      };
    },
    methods:{
      confirmRegister(val){
        this.ModalStatus = false;
        if(val){
          this.$router.push('/UserCenter/Activation')
        }
      },
      confirmLogin(val){
        this.$emit("hasLogin",val);
        this.ModalStatus = false;
      },
      // 切换登录注册按钮渲染
      tabChange(tab){
      if('register' == tab){
        this.tabView = 'registerPane'
 
      }else if('login' == tab){
        this.tabView = 'loginPane'
 
      }
    },
      submitLogin(){

      },
      submitRegister(){

      },
      switchTab(tab,e){
        console.log(tab, event);
        this.tabHandel = tab;
      }
    },
  components:{
    Dialog,RadioButton, RadioGroup,Input,loginPane,registerPane
  },
  watch: {
    ModalStatus:{
      handler(newVal, oldVal) {
        this.$emit("ModalStatus",newVal);
      },
      immediate: true
    },
    registerModal: {
      handler(newVal, oldVal) {
        if(newVal){
          this.FunctionStatus = 'register';
          this.ModalStatus = true;

        }
      },
      immediate: true
    },
    loginModal: {
      handler(newVal, oldVal) {
        if(newVal){
          this.FunctionStatus = 'login';
          this.ModalStatus = true;
        }
      },
      immediate: true
    }
   },
  }
</script>
