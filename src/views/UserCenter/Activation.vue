<template>
    <div class="wrapper">
        <div id="UserInfo">
        <div class="height:600px;width:1000px; padding:20% 5%">
            <h2> 尊敬的客户,欢迎使用重庆油之岩科技数字平台! </h2>
            <h3> 即将为您跳转到网站首页,若没有跳转,请<a href="https://youzhiyan.com/">点击这里</a>! </h3>
        </div >
        </div>
    </div>
  </template>
  
  <script>
  import { Row, Col, Card, Avatar, Button, Upload} from 'element-ui'
  export default {
    metaInfo: {
      title:
        "账号激活-油之岩科技-废油处置方案定制-智慧采购-数字合同-合作流程",
      meta: [
        {
          name: "keywords",
          content: "账号激活,产品服务,数字化平台,智慧订单,智慧采购,服务流程"
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
        tmpInfo:{
          }
      };
    },
    mounted(){

    },
    methods:{

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