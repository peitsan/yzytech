<template>
    <div class="wrapper">
        <div id="AdminCenter">
            <!-- 筛选状态 -->
          <el-tabs v-model="tabView">
            <el-tab-pane v-for="(tab,tabIndex) in this.tabList" :key="'tabList-'+tabIndex" :label="tab.label+'('+countDataSets(tab.name)+')'" :name="tab.name">
            </el-tab-pane>
          </el-tabs>
          <!-- 表格组件 -->
        <el-table
        max-height="400"
        :data="tmpData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        :stripe="stripe"
        :current-page.sync="currentPage"
        style="width: 100%;height: 600px;">
        <el-table-column
            type="index"
            label="序号"
            :index="indexMethod"
            width="90">
         </el-table-column>
         <el-table-column
            prop="orderStatus"
            label="状态"
            width="120"
            >
              <template slot-scope="scope"> 
                <el-tag 
                :effect="tranTagTheme(scope.row.orderStatus)"
                :type="tranTagStyle(scope.row.orderStatus)">
              {{ tranTag(scope.row.orderStatus) }}
            </el-tag></template>
         </el-table-column>
         <el-table-column
            prop="orderSerialNumber"
            label="订单号"
            width="120">
         </el-table-column>
         <el-table-column
            prop="orderStartTime"
            label="下单时间"
            width="180">
            <template slot-scope="scope"> 
               {{ tranDateStamp(scope.row.orderStartTime) }}
            </template>
         </el-table-column>
         <el-table-column
            prop="contactsPerson"
            label="联系人"
            width="120">
         </el-table-column>
         <el-table-column
            prop="contactsAddress"
            label="联系地址"
            width="180">
         </el-table-column>
         <el-table-column
            prop="transactionAmount"
            label="成交价"
            width="120">
         </el-table-column>
         <el-table-column
            prop="shipmentAmount"
            label="发货额"
            width="120">
         </el-table-column>
         <el-table-column
            prop="shipmentAmount"
            label="未收款"
            width="120">
         </el-table-column>
         <el-table-column
            prop="grossProfitRate"
            label="毛利率"
            width="120">
            <template slot-scope="scope">{{ (scope.row.grossProfitRate *100) + '%' }}</template>
         </el-table-column>
      </el-table>
      <div class="pagination">
          <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :page-sizes="[10, 15, 20]"
              :page-size="pagesize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total">
      </el-pagination>
    </div>
    </div>
  </div>
  </template>
  
  <script>
import { Row, Col, Card, Button,Table, TableColumn, Pagination,Tag,Message} from 'element-ui'
import { GetAllOrder }  from '@/api/api.js'
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
        counts:0,
        stripe:true,//是否为斑马纹 table
        currentPage:1,
        pagesize:10,
        total:0,
        tableRowClassName:'',
        tabView:'',
        tabList:[
        {
          label:"全部",
          name:"All",
        },
          {
          label:"新订单",
          name:"NewOrder",
        },{
          label:"进行中",
          name:"Processing",
        },{
          label:"异常",
          name:"Abnormity",
        },{
          label:"己取消",
          name:"Cancel",
        },{
          label:"己完成",
          name:"Over",
        },{
          label:"待报价",
          name:"Quoting",
        },{
          label:"待审核",
          name:"Auditing",
        }
      ],
      dataSet:[],
      //   dataSet:[{
      //     orderStatus:0, //订单状态  0为新订单 1为进行中 2为待报价 3为待审核 4为已完成 5为状态异常 -1为已取消
      //     orderSerialNumber: "AP22358269",//订单号（序列号唯一）
      //     orderStartTime:"2022-03-09T20:07:59Z",//下单时间
      //     contactsPerson:"刘启", //联系人
      //     contactsAddress:"成都锦江", //联系地址
      //     customCompany:"圣都装饰", //客户单位
      //     transactionAmount:351, //成交价
      //     shipmentAmount:101,  //发货额
      //     unreceivedAmount:351, //未收款
      //     grossProfitRate:-5.718, //毛利率
      //   },{
      //     orderStatus:1, //订单状态  0为新订单 1为进行中 2为待报价 3为待审核 4为已完成  5为状态异常 -1为已取消
      //     orderSerialNumber: "AP22358269",//订单号（序列号唯一）
      //     orderStartTime:"2022-03-09T20:07:59Z",//下单时间
      //     contactsPerson:"刘启", //联系人
      //     contactsAddress:"成都锦江", //联系地址
      //     customCompany:"圣都装饰", //客户单位
      //     transactionAmount:351, //成交价
      //     shipmentAmount:101,  //发货额
      //     unreceivedAmount:351, //未收款
      //     grossProfitRate:-5.718, //毛利率
      //   },{
      //     orderStatus:4, //订单状态  0为新订单 1为进行中 2为待报价 3为待审核 4为已完成 5为状态异常 -1为已取消
      //     orderSerialNumber: "AP22358269",//订单号（序列号唯一）
      //     orderStartTime:"2022-03-09T20:07:59Z",//下单时间
      //     contactsPerson:"刘启", //联系人
      //     contactsAddress:"成都锦江", //联系地址
      //     customCompany:"圣都装饰", //客户单位
      //     transactionAmount:351, //成交价
      //     shipmentAmount:101,  //发货额
      //     unreceivedAmount:351, //未收款
      //     grossProfitRate:-5.718, //毛利率
      //   },{
      //     orderStatus:4, //订单状态  0为新订单 1为进行中 2为待报价 3为待审核 4为已完成 5为状态异常 -1为已取消
      //     orderSerialNumber: "AP22358269",//订单号（序列号唯一）
      //     orderStartTime:"2022-03-09T20:07:59Z",//下单时间
      //     contactsPerson:"刘启", //联系人
      //     contactsAddress:"成都锦江", //联系地址
      //     customCompany:"圣都装饰", //客户单位
      //     transactionAmount:351, //成交价
      //     shipmentAmount:101,  //发货额
      //     unreceivedAmount:351, //未收款
      //     grossProfitRate:-5.718, //毛利率
      //   },{
      //     orderStatus:4, //订单状态  0为新订单 1为进行中 2为待报价 3为待审核 4为已完成 5为状态异常 -1为已取消
      //     orderSerialNumber: "AP22358269",//订单号（序列号唯一）
      //     orderStartTime:"2022-03-09T20:07:59Z",//下单时间
      //     contactsPerson:"刘启", //联系人
      //     contactsAddress:"成都锦江", //联系地址
      //     customCompany:"圣都装饰", //客户单位
      //     transactionAmount:351, //成交价
      //     shipmentAmount:101,  //发货额
      //     unreceivedAmount:351, //未收款
      //     grossProfitRate:-5.718, //毛利率
      //   },{
      //     orderStatus:4, //订单状态  0为新订单 1为进行中 2为待报价 3为待审核 4为已完成 5为状态异常 -1为已取消
      //     orderSerialNumber: "AP22358269",//订单号（序列号唯一）
      //     orderStartTime:"2022-03-09T20:07:59Z",//下单时间
      //     contactsPerson:"刘启", //联系人
      //     contactsAddress:"成都锦江", //联系地址
      //     customCompany:"圣都装饰", //客户单位
      //     transactionAmount:351, //成交价
      //     shipmentAmount:101,  //发货额
      //     unreceivedAmount:351, //未收款
      //     grossProfitRate:-5.718, //毛利率
      //   }
      
      // ],
        tmpData:[],
          count:{
          NewOrder: 0,
          Processing: 0,
          Abnormity: 0,
          Cancel: 0,
          Over: 0,
          Quoting: 0,
          Auditing:0,
          },
          category:{
          NewOrder: [],
          Processing: [],
          Abnormity: [],
          Cancel: [],
          Over: [],
          Quoting: [],
          Auditing:[],
          }
      };
    },
    watch:{
      tabView:{
      handler(newVal, oldVal) {
        switch(newVal){
            case 'All': return this.tmpData = this.dataSet;
            case 'NewOrder': return this.tmpData = this.category.NewOrder;
            case 'Processing': return this.tmpData = this.category.Processing;
            case 'Abnormity': return this.tmpData = this.category.Abnormity;
            case 'Cancel': return this.tmpData = this.category.Cancel;
            case 'Over': return this.tmpData = this.category.Over;
            case 'Quoting': return this.tmpData = this.category.Quoting;
            case 'Auditing': return this.tmpData = this.category.Auditing;
          }
      },
      immediate: true
    },
    },
    methods:{
      async GetAllOrder(){
        let res = await GetAllOrder();
        if(res.status == 200){
          this.dataSet = res.data;
          this.tmpData = this.dataSet;
          this.countSets();
        }else{
          Message({
          message: '服务器匆忙,请稍后重试!',
          type: 'error'
         })
        }
      },
      indexMethod(index) {
          return (
            // 索引分页自增累加，   (当前页-1)*每页显示的条数+table索引+1
            (this.currentPage - 1) * this.pagesize + index + 1
          );
        },
      handleSizeChange(val) {
            this.pagesize=val;
        },
        handleCurrentChange(val) {
            this.currentPage = val;
        },
        tranTag(status){
          switch(status){
            case -1: return '已取消';
            case 0: return '新订单';
            case 1: return '进行中';
            case 2: return '待报价';
            case 3: return '待审核';
            case 4: return '已完成';
            case 5: return '状态异常';
          }
        },
        tranTagStyle(status){
          switch(status){
            case -1: return 'info';
            case 0: return '';
            case 1: return 'success';
            case 2: return 'warning';
            case 3: return 'warning';
            case 4: return 'primary';
            case 5: return 'danger';
          }
        },
        tranTagTheme(status){
          switch(status){
            case -1: return 'dark';
            case 0: return 'light';
            case 1: return 'dark';
            case 2: return 'light';
            case 3: return 'dark';
            case 4: return 'dark';
            case 5: return 'dark';
          }
        },
        tranDateStamp(timestamp){
          return timestamp.substring(0,10)+' '+timestamp.substring(11,19)
        },
        countSets (){
            this.dataSet.map((item,index)=>{
            switch(item.orderStatus){
            case -1: return (
            this.count.Cancel++,
            this.category.Cancel.push(item)
            );
            case 0: return (
            this.count.NewOrder++,
            this.category.NewOrder.push(item)
            );
            case 1: return (
            this.count.Processing++,
            this.category.Processing.push(item)
            );
            case 2: return (
            this.count.Quoting++,
            this.category.Quoting.push(item)
            );
            case 3: return (
            this.count.Auditing++,
            this.category.Auditing.push(item)
            );
            case 4: return (
            this.count.Over++,
            this.category.Over.push(item)
            );
            case 5: return (
            this.count.Abnormity++,
            this.category.Abnormity.push(item)
            );
            }
            })
          },
        countDataSets(status){
          this.total = this.dataSet.length;
          switch(status){
            case 'All': return this.dataSet.length;
            case 'NewOrder': return this.count.NewOrder;
            case 'Processing': return this.count.Processing;
            case 'Abnormity': return this.count.Abnormity;
            case 'Cancel': return this.count.Cancel;
            case 'Over': return this.count.Over;
            case 'Quoting': return this.count.Quoting;
            case 'Auditing': return this.count.Auditing;
          }
        }
        
    },
    mounted() {
      this.GetAllOrder();
    },
    components:{
    Row, Col, Card,  Button,Table, TableColumn,Pagination,Tag,Message
  }
  };
  </script>
  <style lang="less" scoped>
      .wrapper {
        #AdminCenter{
          height: 600px;
          ::-webkit-scrollbar {
       display: none; /* Chrome Safari */
      }
      scrollbar-width: none; /* firefox */
   -ms-overflow-style: none; /* IE 10+ */
          .pagination{
            height: 100px;
            position: relative;
            top: 20px;
          }
          .el-tabs__content{
            display:none;
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
          width:50px;
          height:50px;
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