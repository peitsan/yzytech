<template>
        <div class="loginPane" :v-if="this.FunctionStatus === 'login'">
           <el-form  class="login-container">
              <el-form-item class="login-list">
                <el-input type="text" 
                placeholder="账号" 
                v-model="userInfo.email" 
                prefix-icon="el-icon-s-custom"
                auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item class="login-list">
                <el-input type="password" placeholder="密码" 
                prefix-icon="el-icon-unlock"
                show-password 
                v-model="userInfo.password"
                auto-complete="off"></el-input>
              </el-form-item >
              <el-form-item class="login-list">
                <slide-verify v-if="loginTimesUpover"
                      :w="240"
                      :h="80"
                      slider-text="向右滑动"
                      @success="onSuccess"
                      @fail="onFail"
                      @refresh="onRefresh"
                      :style="{width:'240px', marginTop:'-15px'}"
                      class="slide-box"
                      ref="slideBlock"
                  ></slide-verify>
              </el-form-item >
              <el-form-item class="Modal-submitBtn">
                <el-button type="primary" @click="submitLogin" style="width: 100%;">登录</el-button>
              </el-form-item>
            </el-form>
        </div>
</template>
<style lang="less">
.wrap{
  width: 180vh;
  margin:0 auto;
  .contain{
    display: flex;
    flex-flow: inline;
    .loginForm{
      width:75%;
      height: 80%;
      box-sizing: border-box;
    }
  }
  
}
</style>

<script> 
  import { Login } from '@/api/api'
  import { setToken } from '@/utils/auth.js'
  import { Form , FormItem, Input ,Message} from 'element-ui'
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
          email:''
        },
        rePassword:'',
        loginTimesUpover:false,
        tryTimes:0,
        loginCode:{
          path:'https://resource.youzhiyan.cn/image/cdcode.png'
        },
        FunctionStatus:'register',
        registerModalValue: true,
        loginModalValue: false,
        ModalStatus:false,
      };
    },
    methods:{
      async submitLogin(){
        console.log(this.userInfo.email);
        function isEmail(str){ 
          var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
          return reg.test(str); 
          }
      if(isEmail(this.userInfo.email)){
        let res = await Login(this.userInfo);
        console.log(res);
       if(res.status == 200){
         if(res.data.code == 200){
          // 登录成功
            Message({
              message: res.data.message,
              type: 'success'
            });
            setToken(res.data.token);
            this.$emit("hasLogin",true)
            console.log('0');
         }
        else if(res.data.code == 400){
        Message({
          message: res.data.message,
          type: 'error'
        });
        }
        else{
              tryTimes++;
              this.$message({
                message: '登录失败!',
                type: 'error'
               });
            }
       }
       else{
        Message({
          message: '网络匆忙,请稍后重试!',
          type: 'warning'
        });
       }
          
    }else{
          Message({
                showClose: true,
                message: '请输入合法电子邮箱账号!',
                type: 'error'
              });
            }
      },
      submitRegister(){

      },
      switchTab(tab,e){
        this.tabHandel = tab;
      }
    },
  components:{
    Form,FormItem,Input
  },
  watch: {
    tryTimes:{
      handler(newVal, oldVal) {
        if(newVal >3){
          this.loginTimesUpover = true;
        }
      },
      immediate: true
    },
    registerModal: {
      handler(newVal, oldVal) {
        this.loginModalValue = newVal;
        if(newVal){
          this.ModalStatus = true;
        }
      },
      immediate: true
    },
    loginModal: {
      handler(newVal, oldVal) {
        this.registerModalValue = newVal;
        if(newVal){
          this.ModalStatus = true;
        }
      },
      immediate: true
    }
   },
  }
</script>
