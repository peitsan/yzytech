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
              <el-col :span="16" >
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
                <el-button type='danger' plain icon="el-icon-goods" circle  @click="openPurchaseModal(commodity)"></el-button>
              </el-col>
              <el-col :span="6">
                <el-popconfirm
                title="确认添加到购物车吗？"
                @confirm="addCommodityToShopCar(commodity)"
                >
              <el-button slot="reference" type='danger' plain icon="el-icon-shopping-cart-1" circle></el-button>
            </el-popconfirm>
              </el-col>
              </el-row>
            </el-card>
        </el-col>
        </div>
    </div>
      
       <div id="shopping-aside">
          <div class="aside-square">
            <i class="el-icon-shopping-cart-full"></i>
            购物车
          </div>
          <div class="aside-square" ><i class="el-icon-service"></i>
            客服</div>
      </div>

      <el-dialog
      title="订购产品"
      :visible.sync="showPurchaseModal"
      >
        <el-row>

          <el-col :span="8">
          <el-carousel height="250px" v-if="this.selectProduction">
              <el-carousel-item v-for="item in this.selectProduction.samplePicture" :key="item.url">
                <img :src="item.url" :alt="item.pictureAlt">
              </el-carousel-item>
            </el-carousel>
          </el-col>
          <el-col :span="16">
              <el-row :row="4"> 
                  <el-col :span="6"  class="dialist-title">产品名称:    </el-col>
                  <el-col :span="18" class="dialist-text">{{ this.selectProduction.productionNameCn }}</el-col>
                </el-row>
              <el-row :row="4" >
                  <el-col :span="6" class="dialist-title">产品说明:    </el-col>
                  <el-col :span="18" class="dialist-text">{{ this.selectProduction.productionDescription }}</el-col>
              </el-row>
              <el-row :row="4" >
                  <el-col :span="6" class="dialist-title">产品单价:    </el-col>
                  <el-col :span="18" class="dialist-text">{{ this.selectProduction.unitPrice +"￥/" + this.selectProduction.unitCn}}</el-col>
              </el-row>

              <el-row :row="4" >
                  <el-col :span="6" class="dialist-title">库存:    </el-col>
                  <el-col :span="18" class="dialist-text">{{ this.selectProduction.inventory}}</el-col>
              </el-row>
              <el-row :row="4" >
                  <el-col :span="6" class="dialist-title">销量:    </el-col>
                  <el-col :span="18" class="dialist-text">{{ this.selectProduction.salesVolumn}}</el-col>
              </el-row>

              <el-row :row="4" >
                  <el-col :span="6" class="dialist-title">数量:    </el-col>
                  <el-col :span="18" >
                    <el-input style="width: 300px;" type="number" v-model="order.amount" placeholder="请输入购买商品数量">
                      <template slot="append">(单位:{{ this.selectProduction.unitCn +'/'+ this.selectProduction.unitEn }})
                      </template>
                    </el-input>
                  </el-col> 
              </el-row>
              <el-row :row="4" >
                  <el-col :span="6" class="dialist-title">总价:    </el-col>
                  <el-col :span="10" class="dialist-text">{{ this.selectProduction.unitPrice * this.order.amount}}</el-col>
                  <el-col :span="8" class="dialist-text">人名币/￥</el-col>
              </el-row>
              <el-row :row="4" >
                  <el-button type="primary" size="middle" style="float:right">订购</el-button>
              </el-row>
          </el-col>
        </el-row>

      </el-dialog>~
    </div>
  </template>
  
  <script>
  import { Row, Col, Card, Avatar, Button, Upload, Carousel, CarouselItem, Popconfirm, Dialog} from 'element-ui'
  
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
        showPurchaseModal:false,
        shopCarList:[],
        selectProduction:{},
        avatarSize:120,
        order:{
          productionSerialNumber:'',
          orderStartTime:"2022-03-09T20:07:59Z",//下单时间
          contactsPerson:'',
          contactsAddress:'',
          customCompany:'',
          amount:0,
          transactionAmount:'',
        },
        Commodity:[
          {
          productionNameCn:"钻井原液", //商品服务名称
          productionNameEn:"Drilling stock fluid", //商品服务名称
          productionSerialNumber:"30000001", //商品序列号
          productionDescription:"本产品的主要成分有清水、泥浆、无粘土相冲洗液、乳状液、泡沫和压缩空气等.其主要作用有：清洁井底，携带岩屑、冷却和润滑钻头及钻柱、降低岩屑沉降速度，避免沉沙卡钻等。", //商品描述
          unitPrice:9000, //单价人民币
          unitCn:"吨", //计价单位
          unitEn:"Ton", //计价单位
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
          batch:"YZY-202302",//批次
        },{
          productionNameCn:"柴油", //商品服务名称
          productionNameEn:"Diesel oil", //商品服务名称
          productionSerialNumber:"30000002", //商品序列号
          productionDescription:"本产品是含有一种或几种农作物生长需要的营养元素的肥料，成分单纯，养分含量高；肥效快，肥劲猛。不仅是增辟肥源的有效方法，对改良土壤也有很大作用。", //商品描述
          unitPrice:7500, //单价人民币
          unitCn:"吨", //计价单位
          unitEn:"Ton", //计价单位
          inventory:1000,          //库存
          salesVolumn:222,  //总销量
          batch:"YZY-202302",//批次
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
          productionDescription:"本产品是含有一种或几种农作物生长需要的营养元素的肥料，成分单纯，养分含量高；肥效快，肥劲猛。不仅是增辟肥源的有效方法，对改良土壤也有很大作用。", //商品描述
          unitPrice:1500, //单价人民币
          unitCn:"吨", //计价单位
          unitEn:"Ton", //计价单位
          inventory:1000,          //库存
          salesVolumn:3223,  //总销量
          batch:"YZY-202302",//批次
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
          productionNameCn:"免烧砖原材料", //商品服务名称
          productionNameEn:"Roadbed free brick", //商品服务名称
          productionSerialNumber:"40000001", //商品序列号
          unitPrice:65, //单价人民币
          unitCn:"平方米", //计价单位
          unitEn:"m^3", //计价单位
          inventory:1000,          //库存
          salesVolumn:860,  //总销量
          batch:"YZY-202302",//批次
          productionDescription:"本产品是由自然条件作用（主要是 岩石风化 ）而形成的，粒径在5mm以下的岩石颗粒，主要用于制浇铸模和免烧砖等产品。", //商品描述
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
    methods:{
      openPurchaseModal(goods){
        this.showPurchaseModal = true;
        this.selectProduction = goods;
      },
      addCommodityToShopCar(goods){
        this.shopCarList.push(goods);
        console.log(this.shopCarList);
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
    CarouselItem,
    Popconfirm,
    Dialog
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
    .dialist-title{
      margin-top:5px;
      padding-left:50px;
      font-size:20px;
      font-weight: 550;
    }
    .dialist-text{
      margin-top:5px;
      font-size:16px;
      line-height: 20px;
      font-weight: 450;
    }
    #shopping-aside{
        position:fixed;
        top:40%;
        right:20px;
        display: flex;
        flex-flow:column;
        .aside-square{
          width:100px;
          height:100px;
          text-align: center;
          background-color: #fff;
          border-style:solid;
          border-width:1px;
          border-color:#dadada;
          font-size:18px;
          font-weight:300;
            color:#737272;
          i{
            width:80px;
            height:80px;
            font-size:64px;
            color:#dadada;
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