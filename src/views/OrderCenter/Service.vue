<template>
    <div class="wrapper">
        <div id="Service">
          <el-row :row="16">
            <el-col :span="7" style="margin:0 10px">
              <el-row :row="4" class="list-title">服务报价:</el-row>
              <el-card>
                <el-row :row="4" class="list-subtitle-center">服务定价分级</el-row>
                <el-row :row="4" 
                v-for="(service) in this.Services"
                :key="service.serviceSerialNumber">
                    <div class="service-item">
                      <div class="standard">土壤残油率: <span> &lt; </span>{{ service.standard }}</div>
                      <div class="price">每<span>{{ service.unitCn}}</span>收取<span>{{ service.unitPrice }}</span>元</div>
                    </div>
                </el-row>
                <el-row :row="4" class="list-subtitle-center">运费计价标准</el-row>
                <div class="list-yunfei"><span>0.83元</span> /  吨·公里</div>
              </el-card>
             
            </el-col>
            <el-col :span="7" style="margin:0 10px">
                <el-row :row="2" class="list-title">贵司经营地址:</el-row>
               <el-row :row="6" style="height:300px">
                  <el-input class="addressInput" v-model="addressKeyword"  placeholder="请输入或者点击地图选择贵司经营所在地"></el-input>
                      <baidu-map id="BaiduMap" :center="center" :zoom="zoom" @ready="handler"   @click="getClickInfo" :scroll-wheel-zoom='true' v-loading='loadingMap'>
                        <bm-view style="width: 100%; height:500px; flex: 1"></bm-view>
                        <bm-local-search :keyword="addressKeyword" :auto-viewport="true" style="display: none" @searchcomplete="this.onInputHandle"></bm-local-search>
                        <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true" ></bm-geolocation>
                      </baidu-map>
                 </el-row>
            </el-col>
            <el-col :span="7" style="margin:0 10px">
              <el-row :row="2" class="list-title">贵司油基岩屑处理需求量:</el-row>
              <el-card>
              <el-input class="addressInput" v-model="requirement"  placeholder="请输入贵司油基岩屑处理需求量" type="number" > <template slot="append">(单位:吨/Ton)</template></el-input>
              <el-row :row="2" class="list-title">请选择选择油基岩屑处理标准:</el-row>
                <el-row :row="2" class="list-title">
                  <el-radio-group v-model="serviceType">
                    <el-radio v-for="(service,index) in this.Services" :key="service.serviceSerialNumber" :label="index" >{{service.standard}}</el-radio>
                  </el-radio-group>
                </el-row>

                <el-row :row="2" class="list-tips">经我司处理后,贵司油基岩土壤残油率将会低于: <span>{{Services[serviceType].standard}} </span></el-row>
                <el-row :row="2" class="list-subtips"><el-col :span="18">处理费用:  <span>{{ this.unitPrice*this.requirement }}</span> </el-col>   <el-col :span="6">(元/￥)</el-col></el-row>
                <el-row :row="2" class="list-subtips"><el-col :span="18">运输距离:  <span>{{ Math.round(100*this.distance/1000)/100 }} </span> </el-col>   <el-col :span="6">(公里/km)</el-col></el-row>
                <el-row :row="2" class="list-subtips"><el-col :span="18">运输费用: <span>{{ Math.round(0.83*(this.distance/1000)*this.requirement*100)/100 }}</span> </el-col>   <el-col :span="6">(元/￥)</el-col></el-row>
                <el-row :row="2" class="list-subtips"><el-col :span="18">总计费用:  <span>{{ Math.round((this.unitPrice*this.requirement + 0.83*(this.distance/1000)*this.requirement )*100)/100 }}</span></el-col>   <el-col :span="6">(元/￥)</el-col></el-row>
              <el-row :row="4" class="control-btn">
                       <button class="submit-btn" @click="submitServiceOrder">提交订单</button>
               </el-row>
              </el-card>
              </el-col>  
          </el-row>
          
        </div>
    </div>
  </template>
  
  <script>
import { Row, Col, Card,Button, Radio,RadioGroup,Message} from 'element-ui'
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
    // 地图初始化
    data() {
      return {
        imageUrl: '',
        serviceType:0, //选中类型
        unitPrice:1450, //单价
        requirement:0, //处理需求
        distance:0, //距离单位为m
        Services:[
        {
          serviceNameCn:"油基岩屑无害化处理服务(低于2‰残油率)", //商品服务名称
          serviceNameEn:"Oil-based cuttings harmless treatment service (Residual oil rate<2‰)", //商品服务名称
          servicenSerialNumber:"10000001", //商品序列号
          serviceDescription:"业界领先标准的油基岩岩屑无害化处理方案", //商品描述
          unitPrice:1450, //单价人民币
          unitCn:"吨", //计价单位
          unitEn:"Ton", //计价单位
          standard:"2/1000", //执行标准
          seriviceTimes:100,          //服务次数
          samplePicture:[
            {
              pictureAlt:"油基岩屑无害化处理服务案例(低于2‰残油率)",
              url:"https://resource.youzhiyan.cn/commodity/2023020301/30000001-1.png"
            },{
              pictureAlt:"油基岩屑无害化处理技术专利(低于2‰残油率)",
              url:"https://resource.youzhiyan.cn/commodity/2023020301/30000001-2.png"
            }
          ]
        },
        {
          serviceNameCn:"油基岩屑无害化处理服务(低于3‰残油率)", //商品服务名称
          serviceNameEn:"Oil-based cuttings harmless treatment service (Residual oil rate<3‰)", //商品服务名称
          servicenSerialNumber:"10000002", //商品序列号
          serviceDescription:"业界领先标准的油基岩岩屑无害化处理方案", //商品描述
          unitPrice:1200, //单价人民币
          unitCn:"吨", //计价单位
          unitEn:"Ton", //计价单位
          standard:"3/1000", //执行标准
          seriviceTimes:100,          //服务次数
          samplePicture:[
            {
              pictureAlt:"油基岩屑无害化处理服务案例(低于2‰残油率)",
              url:"https://resource.youzhiyan.cn/commodity/2023020301/30000001-1.png"
            },{
              pictureAlt:"油基岩屑无害化处理技术专利(低于2‰残油率)",
              url:"https://resource.youzhiyan.cn/commodity/2023020301/30000001-2.png"
            }
          ]
        },{
          serviceNameCn:"油基岩屑无害化处理服务(低于5‰残油率)", //商品服务名称
          serviceNameEn:"Oil-based cuttings harmless treatment service (Residual oil rate<5‰)", //商品服务名称
          servicenSerialNumber:"10000003", //商品序列号
          serviceDescription:"业界领先标准的油基岩岩屑无害化处理方案", //商品描述
          unitPrice:1070, //单价人民币
          unitCn:"吨", //计价单位
          unitEn:"Ton", //计价单位
          standard:"5/1000", //执行标准
          seriviceTimes:100,          //服务次数
          samplePicture:[
            {
              pictureAlt:"油基岩屑无害化处理服务案例(低于5‰残油率)",
              url:"https://resource.youzhiyan.cn/commodity/2023020301/30000001-1.png"
            },{
              pictureAlt:"油基岩屑无害化处理技术专利(低于5‰残油率)",
              url:"https://resource.youzhiyan.cn/commodity/2023020301/30000001-2.png"
            }
          ]
        },
        ],
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
          },
          loadingMap: true,
          BMap: '',
          map: '',
          geoc: '',
          showMap: false,
          addressKeyword: '',
          pointLngLat: '',
          center: { lng: 109.45744048529967, lat: 36.49771311230842 },
          zoom: 13,
          homePoint:{lng:105.3700000000000,lat: 28.770000000000000 },
      };
    },
    watch:{
    serviceType: {
        handler(newVal, oldVal) {
          this.unitPrice = this.Services[newVal].unitPrice;
        },
        immediate: true
        },
    },
    methods:{
      submitServiceOrder(){
        Message({
          message:'提交订单成功!',
          type:'success'
        })
      },
  handleRadioSelect(val){
    this.unitPrice = val.unitPrice;
  },
  handler ({BMap, map}) {
 this.BMap = BMap
 this.map = map
 this.loadingMap = true
 var geolocation = new BMap.Geolocation()
 this.geoc = new BMap.Geocoder() // 地址解析对象
 var $this = this
 // 调用百度地图api 中的获取当前位置接口
 geolocation.getCurrentPosition(function (r) {
   let myGeo = new BMap.Geocoder()
   myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), function (result) {
     if (result) {
       $this.loadingMap = false
       $this.$set($this, 'pointLngLat', {lng: result.point.lng, lat: result.point.lat})
       map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放,默认关闭
       $this.addPoint({BMap, map})
     }
   })
 })
},
// 添加点位
addPoint ({BMap, map}) {
 map.clearOverlays()
 var point = new BMap.Point(this.pointLngLat.lng, this.pointLngLat.lat)
 let zoom = map.getZoom()
 setTimeout(() => {
   map.centerAndZoom(point, zoom)
 }, 0)
 var marker = new BMap.Marker(point) // 创建标注
 map.addOverlay(marker) // 将标注添加到地图中
},
// 点击地图
getClickInfo (e) {
 this.center = {lng: e.point.lng, lat: e.point.lat}
 this.pointLngLat = {lng: e.point.lng, lat: e.point.lat}
 // 获取点位信息
 let $this = this
 this.geoc.getLocation(e.point, function (rs) {
   var addComp = rs.addressComponents
   $this.pointAddress = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber
 })
 this.addressKeyword = $this.pointAddress;
},
onInputHandle(e){
  if(e){
    if(e.Yr.length>0)
     this.center.lng = e.Yr[0].point.lng;
     this.center.lat = e.Yr[0].point.lat;
      // var map = new BMap.Map("BaiduMap")
      var map = new BMap.Map();  
      var point1 = new BMap.Point(this.center.lng,this.center.lat);  
      var point2 = new BMap.Point(this.homePoint.lng,this.homePoint.lat);  
     this.distance = map.getDistance(point1,point2);
      
  }
},
},
    created() {
      
    },
    components:{
    Message,
    Row,
    Col,
    Card,
    Button, 
    Radio,
    RadioGroup
}
  };
  </script>
  <style lang="less" scoped>
  .wrapper {
    #Service {
      .list-title{
        font-size:24px;
        font-weight:550;
        line-height: 30px;
        margin:10px 5%;
     
      }
      .list-subtitle-center{
          font-size:20px;
          font-weight:550;
          text-align: center;
        }
      .service-item{
        width:92%;
        margin:10px 4%;
        background-color: rgb(250, 255, 241);
        border-style: none;
        border-radius:80px;
        height:120px;
        .standard{
          line-height: 54px;
          font-size: large;
          text-align: center;
          color: #565656;
          font-weight: 550;
          span{
            font-size: 28px;
            color:rgb(151, 170, 9);
            font-weight: 550;
          }
        }
        .price{
          line-height: 54px;
          font-size: 28px;
          text-align: center;
          span{
            font-size: 32px;
            color:gold;
            font-weight: 550;
          }
        }
      }
      .list-yunfei{
        margin-top: 8px;
          font-size:24px;
          font-weight:500;
          text-align: center;
          span{
            font-size: 28px;
            color:goldenrod;
            font-weight: 550;
          }
      }
      .list-tips{
         margin-left:12px;
          margin-bottom:20px;
          font-size:20px;
          font-weight:550;
          span{
            font-size: 28px;
            color:goldenrod;
            font-weight: 550;
          }
      }

      .list-subtips{
          font-size:18px;
          font-weight:480;
         margin-left:12px;
          margin-bottom:20px;
          span{
            font-size: 28px;
            color:rgb(0, 185, 185);
            font-weight: 550;
          }
      }
      .control-btn .submit-btn{
        margin:30px 10% 0 10%;
        width:280px;
        height:48px;
        border-color:aquamarine;
        background-color: aliceblue;
        color:#131216;
        border-radius: 24px;
      }
    }
  }
    @media screen and (max-width: 1200px) {
   .wrapper {
    #Service {
      .list-title{
        font-size:24px;
        font-weight: 550;
        .highLight{
          color:gold;
         }
        }
      }
      
    }
   
  }
</style>