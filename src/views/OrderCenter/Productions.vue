<template>
    <div class="wrapper">
    <div id="commodity-panel">
        <div v-for="(commodity,coIndex) in this.Commodity" class="commodity-list" :key="'commodity-list-'+coIndex">
         <el-col :span="6">
          <el-card class="commodity-list">
            <el-carousel height="200px">
              <el-carousel-item v-for="item in commodity.samplePicture" :key="item.url">
                <img :src="item.url" :alt="item.pictureAlt">
              </el-carousel-item>
            </el-carousel>
            <div style="border-bottom: solid;border-color: #fafaf0; bordedr-width:2px;height:10px;margin-bottom: 8px;"></div>
             <el-row :row="2" class="list-contain">
              <el-col :span="8" class="list-title" >
                产品名称：
              </el-col>
              <el-col  :span="16" >
                {{commodity.productionNameCn}}
              </el-col>
            </el-row>
            <el-row :row="2">
              <el-col :span="8" class="list-title" >
                库存:
              </el-col>
              <el-col :span="16">
                {{commodity.inventory}}
              </el-col>
            </el-row>
            <el-row :row="2" class="operation">
              <el-col :span="6">
                <el-button type='danger' plain icon="el-icon-info" circle></el-button>
              </el-col>
              <el-col :span="6">
                <el-button type='danger' plain icon="el-icon-service" circle></el-button>
              </el-col>
              <el-col :span="6">
                <el-button type='danger' plain icon="el-icon-goods" circle></el-button>
              </el-col>
              <el-col :span="6">
                <el-button type='danger' plain icon="el-icon-plus" circle></el-button>
              </el-col>
              </el-row>
            </el-card>
        </el-col>
        </div>
    </div>
    </div>
  </template>
  
  <script>
  import { Row, Col, Card, Avatar, Button, Upload, Carousel, CarouselItem } from 'element-ui'

  export default {
    metaInfo: {
      title:
        "产品订购-油之岩科技-废油处置方案定制-智慧采购-数字合同-合作流程",
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
        Commodity:[
          {
          productionNameCn:"轻油/白电油", //商品服务名称
          productionNameEn:"Light oil/White Electric oil", //商品服务名称
          productionSerialNumber:"30000001", //商品序列号
          productionDescription:"国标优质白电油", //商品描述
          unitPrice:12, //单价人民币
          unitCn:"千克", //计价单位
          unitEn:"Kg", //计价单位
          inventory:1000,          //库存
          salesVolumn:232,  //总销量
          samplePicture:[
            {
              pictureAlt:"轻油/白电油发货包装",
              url:"https://resource.youzhiyan.cn/commodity/2023020301/30000001-1.png"
            },{
              pictureAlt:"轻油/白电油标签",
              url:"https://resource.youzhiyan.cn/commodity/2023020301/30000001-2.png"
            },{
              pictureAlt:"轻油/白电油标签",
              url:"https://resource.youzhiyan.cn/commodity/2023020301/30000001-3.png"
            },{
              pictureAlt:"轻油/白电油油色样本",
              url:"https://resource.youzhiyan.cn/commodity/2023020301/30000001-4.png"
            }
          ],
          batch:"2023020301",//批次
        },{
          productionNameCn:"柴油", //商品服务名称
          productionNameEn:"Diesel oil", //商品服务名称
          productionSerialNumber:"30000002", //商品序列号
          productionDescription:"国标优质#0柴油", //商品描述
          unitPrice:224, //单价人民币
          unitCn:"吨", //计价单位
          unitEn:"Ton", //计价单位
          inventory:1000,          //库存
          salesVolumn:222,  //总销量
          batch:"2023020301",//批次
          samplePicture:[
            {
              pictureAlt:"柴油发货包装",
              url:"https://resource.youzhiyan.cn/commodity/2023020301/30000002-1.png"
            },{
              pictureAlt:"柴油油色样本",
              url:"https://resource.youzhiyan.cn/commodity/2023020301/30000002-2.png"
            },{
              pictureAlt:"轻油/白电油标签",
              url:"https://resource.youzhiyan.cn/commodity/2023020301/30000002-3.png"
            },{
              pictureAlt:"轻油/白电油标签",
              url:"https://resource.youzhiyan.cn/commodity/2023020301/30000002-4.png"
            }
          ]
        },{
          productionNameCn:"绿化肥料", //商品服务名称
          productionNameEn:"Green fertilizer", //商品服务名称
          productionSerialNumber:"20000001", //商品序列号
          productionDescription:"国标优质绿化肥料", //商品描述
          unitPrice:213, //单价人民币
          unitCn:"吨", //计价单位
          unitEn:"Ton", //计价单位
          inventory:1000,          //库存
          salesVolumn:3223,  //总销量
          batch:"2023020301",//批次
          samplePicture:[
            {
              pictureAlt:"绿化肥料批量样图",
              url:"https://resource.youzhiyan.cn/commodity/2023020301/20000001-1.png"
            },{
              pictureAlt:"绿化肥料效用",
              url:"https://resource.youzhiyan.cn/commodity/2023020301/20000001-2.png"
            },{
              pictureAlt:"绿化肥料样图",
              url:"https://resource.youzhiyan.cn/commodity/2023020301/20000001-3.png"
            }
          ]
        },{
          productionNameCn:"路基免烧砖", //商品服务名称
          productionNameEn:"Roadbed free brick", //商品服务名称
          productionSerialNumber:"40000001", //商品序列号
          unitPrice:11.34, //单价人民币
          unitCn:"200件", //计价单位
          unitEn:"200 piece", //计价单位
          inventory:1000,          //库存
          salesVolumn:8600,  //总销量
          batch:"2023020301",//批次
          productionDescription:"标准建筑预置免烧砖", //商品描述
          samplePicture:[
            {
              pictureAlt:"路基免烧砖",
              url:"https://resource.youzhiyan.cn/commodity/2023020301/40000001-1.png"
            },{
              pictureAlt:"路基免烧砖样本",
              url:"https://resource.youzhiyan.cn/commodity/2023020301/40000001-2.png"
            },{
              pictureAlt:"路基免烧砖标签",
              url:"https://resource.youzhiyan.cn/commodity/2023020301/40000001-3.png"
            },{
              pictureAlt:"路基免烧砖",
              url:"https://resource.youzhiyan.cn/commodity/2023020301/40000001-4.png"
            },{
              pictureAlt:"路基免烧砖",
              url:"https://resource.youzhiyan.cn/commodity/2023020301/40000001-5.png"
            }
          ]
        },
        
    ],
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
          managementAddress:"重庆邮电大学新行政楼1423教育信息化办公室蓝山工作室",
          userType:"1", //用户类型, 0为普通用户,1为企业认证用户, 2为公司员工,3为公司超级管理员
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
    Row,
    Col,
    Card,
    Avatar,
    Button,
    Upload,
    Carousel,
    CarouselItem
}
  };
  </script>
  <style lang="less" scoped>
  .wrapper {
    #commodity-panel {
        width:100%;
        height:600px;
        .commodity-list{
          margin:20px 10px;
        }
        .commodity-list .list-contain{
          margin:6px 0;
        }
        .commodity-list .list-title{
          font-size: 16px;
         font-weight: 550;
        }
        .commodity-list .operation{
            padding-left: 24px;
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
          float:right
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