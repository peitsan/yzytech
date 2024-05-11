<template>
    <div class="wrapper">
        <div id="UserInfo">
          <el-card class="box-card">
                  <div class="card-title">
                    个人信息
                    </div>
                   <div class="tip-title">
                    *油之岩科技重视保护用户个人信息隐私安全,承诺将信息用于更好地服务客户,坚决反对不法使用。
                    </div>
              </el-card>
          <el-card class="box-card">
           <el-col :span="4" class="avatarColumn">
            <el-avatar v-if="!this.isChanging" :size="this.avatarSize" :src="this.userInfo.avatar">
            </el-avatar>
            <el-upload v-if="this.isChanging"
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-col>
          <el-col :span="2"  >
          </el-col>
          <el-col :span="16"  class="infoColumn">
              <el-row :row="4">
                <div class="infoTitle">   用户名: </div>
                <div class="infoContent" v-if="!this.isChanging">   {{ this.userInfo.userName }} </div>
                  <el-input class="infoInput" v-model="tmpInfo.userName" v-if="this.isChanging"></el-input>
                <div class="infoTitle">   邮箱: </div>
                <div class="infoContent">   {{ this.userInfo.mail }} </div>
                  
                <div class="infoTitle">   联系电话: </div>
                <div class="infoContent">   {{ this.userInfo.tel }} </div>

                <div class="infoTitle">   企业信息: </div>
                <div class="infoTitle">   
                  <!-- 左分列 -->
                  <el-col :span="12">
                    <div class="infoSubTitle">   企业名称: </div>
                     <div class="infoContent" >   {{ this.userInfo.enterpiseName }} </div>
                     <div class="infoSubTitle">   企业类型: </div>
                    <div class="infoContent" v-if="!this.isChanging">   {{ this.userInfo.enterpiseType }} </div>
                    <el-input v-model="tmpInfo.enterpiseType" class="infoInput" v-if="this.isChanging"></el-input>
                  </el-col >
                  <!-- 右分列 -->
                  <el-col :span="12">
                    <div class="infoSubTitle">   所属部门: </div>
                     <div class="infoContent" v-if="!this.isChanging">   {{ this.userInfo.department }} </div>
                     <el-input v-model="tmpInfo.department" class="infoInput" v-if="this.isChanging"></el-input>
                     <div class="infoSubTitle">   工作/岗位: </div>
                    <div class="infoContent" v-if="!this.isChanging">   {{ this.userInfo.jobs }} </div>
                    <el-input v-model="tmpInfo.jobs" class="infoInput" v-if="this.isChanging"></el-input>
                  </el-col> 
                  
              </div>
                     <div class="infoTitle">   经营地址: </div>
                    <div class="infoContent" v-if="!this.isChanging">   {{ this.userInfo.managementAddress }} </div>
                    <el-input v-model="tmpInfo.managementAddress" class="infoInput" v-if="this.isChanging"></el-input>  
              </el-row>
              <el-row :row="2" class="infoOperation">
                <el-col v-if="!this.isChanging" :span="12"><el-button class="infoBtn" type="warning" @click="changingHandle" >修改</el-button></el-col>
                <el-col v-if="this.isChanging" :span="1"><el-button class="infoBtn" type="success" @click="saveHandle">保存</el-button></el-col>
              </el-row>
          </el-col>
          </el-card>
        </div>
    </div>
  </template>
  
  <script>
  import { Row, Col, Card, Avatar, Button, Upload} from 'element-ui'
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
        imageUrl: '',
        isChanging: false,
        avatarSize:120,
        userInfo:{
          avatar:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          userName:"临裴惨",
          tel:"+86 18025597877",
          mail:"linpeican@lanshan.email",
          userType:"1", //用户类型, 0为普通用户,1为企业认证用户, 2为公司员工,3为公司超级管理员
          managementAddress:"重庆邮电大学新行政楼1423教育信息化办公室蓝山工作室",
          enterpiseName:"信息化办蓝山工作室",//企业名称
          department:"前端研发部", //所属公司部门
          enterpiseType:"计算机/互联网/网络技术", //行业分类
          jobs:"前端", //工作/岗位
        },
        tmpInfo:{
          avatar:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          userName:"临裴惨",
          tel:"+86 18025597877",
          mail:"linpeican@lanshan.email",
          userType:"1", //用户类型, 0为普通用户,1为企业认证用户, 2为公司员工,3为公司超级管理员
          managementAddress:"重庆邮电大学新行政楼1423教育信息化办公室蓝山工作室",
          enterpiseName:"信息化办蓝山工作室",//企业名称
          department:"前端研发部", //所属公司部门
          enterpiseType:"计算机/互联网/网络技术", //行业分类
          jobs:"前端", //工作/岗位
          address:"",//公司地址
          }
      };
    },
    mounted(){
      const res = window.matchMedia("(max-width: 1200px)").matches;
      console.log(res);
      if(res){
        this.avatarSize = 50;
      }
    },
    methods:{
      // 控制图像上传
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      // 图像上传前校验文件类型与文件大小
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      changingHandle(){
        this.isChanging = true;
      },
      saveHandle(){
        this.isChanging = false;  
      }
    },
    created() {
      
    },
    components:{
    Row, Col, Card, Avatar, Button, Upload
  }
  };
  </script>
  <style lang="less" scoped>
  .wrapper {
    #UserInfo {
      .box-card .card-title{
        font-size:18px;
        font-weight: 600;
        line-height: 20px;
        padding-top: 0;
        height:0px;
      }
      .box-card .tip-title{
        height:0px;
        font-size:12px;
        font-weight: 400;
        color: #F00;
        line-height: 20px;
        padding-top: 0;
      }
      .box-card .avatarColumn{ 
        span{
          float:right
        }
        .avatar-uploader{
          height:18px;
          width:18px;
          margin:10px auto;
          border:solid;
          border-color:#acaaaa;
          border-radius:100px;
          padding:50px;
        }
      }
      .box-card .infoColumn{
        margin : 0 auto;
        .infoTitle{
          margin:12px 0;
          font-size:18px;
          font-weight: 600;
          .infoSubTitle{
          margin:12px 0;
          font-size:15px;
          font-weight: 600;
        }
        .infoContent{
          margin:-4px 0;
          font-size:14px;
          line-height: 20px;
          height:24px;
          font-weight: 400;
        }
        .infoInput{
          margin-top:-10px;
          height:0px;
          width: 95%;
        }
        }
        .infoContent{
          font-size:14px;
          font-weight: 400;
        }
        .infoOperation{
          margin: -20px 0; 
          .infoBtn{
            border-radius: 30px;
            width:150px;
          }
        }
      }
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
      #UserInfo {
      .box-card .card-title{
        font-size:18px;
        font-weight: 600;
        line-height: 20px;
        padding-top: 0;
        height:0px;
      }
      .box-card .tip-title{
        height:0px;
        font-size:12px;
        font-weight: 400;
        color: #F00;
        line-height: 20px;
        padding-top: 0;
      }
      .box-card .avatarColumn{ 
        span{
          width:10px;
          height:10px;
          float:right
        }
        .avatar-uploader{
          height:30px;
          width:30px;
          border:solid;
          border-color:#acaaaa;
          border-radius:60px;
          padding:15px 0 0 15px;
        }
      }
      .box-card .infoColumn{
        margin : 0 auto;
        .infoTitle{
          font-size:18px;
          font-weight: 600;
          .infoSubTitle{
          font-size:15px;
          font-weight: 600;
        }
        .infoContent{
          font-size:14px;
          font-weight: 400;
        }
        }
        .infoContent{
          font-size:14px;
          font-weight: 400;
        }
        
        .infoOperation{
          margin: -50px 0; 
          float: left;
          .infoBtn{
            border-radius: 30px;
            width:80px;
          }
        }
      }
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
    }
  }
  </style>