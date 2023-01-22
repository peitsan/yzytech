<template>
  <div class="loginPane" :v-if="this.FunctionStatus === 'login'">
     <el-form  class="login-container">
        <el-form-item class="login-list">
          <el-input type="text" 
          placeholder="请输入注册邮箱" 
          v-model="userInfo.account" 
          prefix-icon="el-icon-s-custom"
          auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item class="login-list">
          <el-input type="password" placeholder="请输入你的密码" 
          prefix-icon="el-icon-unlock"
          v-model="userInfo.password"
          auto-complete="off"></el-input>
        </el-form-item >
        <el-form-item class="login-list">
          <el-input type="password" placeholder="再次输入密码确认" 
          prefix-icon="el-icon-lock"
          v-model="rePassword"
          auto-complete="off"></el-input>
        </el-form-item >
          <el-form-item class="login-list">
            <el-input 
            class="verification"
            type="number"
            placeholder="邮箱验证码" 
            prefix-icon="el-icon-key" 
            v-model="userInfo.verification"
            auto-complete="off">
            <template slot="append" v-if="!isVerifying">
                <el-button class="verification-btn" @click="requestForVerification">发送</el-button>
            </template>
            <template slot="append"  v-if="isVerifying">
                <el-button class="verification-btn" :loading="true">{{ this.verifyRecords}}s</el-button>
            </template>
          </el-input>
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
import { Form , FormItem, Input} from 'element-ui'
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
    account:'',
    verification:'',
  },
  isVerifying:false,
  verifyRecords:60,
  rePassword:'',
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
requestForVerification(){
  this.isVerifying = true;
  
    let count = setInterval(()=>{
     this.verifyRecords --;
      if( this.verifyRecords == 0){
          clearInterval(count);
      }
    },999);
  setTimeout(()=>{
    this.isVerifying = false;
    this.verifyRecords = 60;
  },60000);
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
Form,FormItem,Input
},
watch: {
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
