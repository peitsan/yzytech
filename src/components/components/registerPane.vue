<template>
  <div class="loginPane" :v-if="this.FunctionStatus === 'register'">
     <el-form  class="login-container">
        <el-form-item class="login-list">
          <el-input type="text" 
          placeholder="请输入注册邮箱" 
          v-model="userInfo.email" 
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
        </el-form-item>
          <!-- <el-form-item class="login-list">
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
          </el-form-item > -->
        <el-form-item class="Modal-submitBtn">
          <el-button type="primary" @click="this.submitRegister" style="width: 100%;">注册</el-button>
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
import { Register } from '@/api/login.js'
import { Form , FormItem, Input, Message } from 'element-ui'

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
    email:'',
    // verification:'',
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
async submitRegister(){
  function isEmail(str){ 
      var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
      return reg.test(str); 
  }
  console.log("1")
  if(isEmail(this.userInfo.email)){
    console.log("2")
    if(this.userInfo.password === this.rePassword){
        let res = await Register(this.userInfo);
        if(!res) console.log(res);
        Message({
          message: '请及时前往邮箱进行注册验证!',
          type: 'success'
        });
      }else{
        Message({
          showClose: true,
          message: '两次密码输入不一致,请重新输入!',
          type: 'error'
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
switchTab(tab,e){
  console.log(tab, event);
  this.tabHandel = tab;
}
},
components:{
Form,FormItem,Input,Message
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
