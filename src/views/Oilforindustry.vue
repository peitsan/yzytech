<template>
  <div class="wrapper">
    <div id="appBodyer">
      <p>
       当前位置： <router-link style="color:grey" to="/home">首页</router-link>
        <i class="iconfont icon-a-Icon_arrow-right"></i> 工业用油、石油馏分
      </p>
      <div>
        <i style="color:burlywood;font-size:100px" class="iconfont icon-youpin"></i>
        <h3>
          发动机<strong>燃油</strong>供应
        </h3>
        <p>油之岩采用<strong>热解析及离心分离技术</strong>来处置油基、水基钻井岩屑，相关技术及设备已经成熟，能够极大的简化和合作公司的技术磨合期，为我国石油气钻井行业提供环保服务。油之岩利利用服务回收的油基岩屑成功提取出高比热的5号、0号轻柴油和工业用10号重柴油。</p>
        <p>面向各<strong>加工业工厂</strong>销售供发动机使用的柴油</p>
        <p>面向各<strong>加油站</strong>持续供应消费燃油</p>
        <i style="color:chartreuse;font-size:100px" class="iconfont icon-zu1"></i>
        <h3>
          石油馏分<strong>化工原料</strong>供应
        </h3>
        <p>面向<strong>绿化肥料厂商</strong>销售环保服务的副产品,可用作<strong>绿化肥料原材料</strong></p>
        <p>面向需要油基岩屑处置服务的各<strong>钻井公司</strong>提供处理后可用于石油勘探的<strong>钻井原液</strong></p>
        

<i style="color:darkgrey;font-size:100px" class="iconfont icon-service"></i>
        <h3>
          专业<strong>专员</strong>业务对接
        </h3>
        <p>
          为了确保油之岩尊贵用户的需求满意度,我们承诺:选择<Strong>油之岩</Strong>将为贵公司提供一套完整、可行、高效的油基岩屑废油处置方案,我们的专员客户经理将会与贵司持续联系,保证方案进度的时效性。
</p>
<p>
        <Strong>如果您对油之岩的任何业务抱有意向,请联系我们的客服热线——62464521将为您持续畅通！ </Strong>>
</p>
      </div>

      
    </div>
  </div>
</template>
<script>
export default {
  metaInfo: {
    title:
      "工业用油-石油馏分-油之岩科技-方案提供商-废油处理-处置水平业界领先-双碳减排技术研发",
    meta: [
      {
        name: "keywords",
        content:
          " 工业用油-石油馏分-重庆油之岩-油基岩屑处置-油基岩油气副产品-油之岩科技-方案提供商-废油处理-处置水平业界领先-处置水平业界领先-双碳减排技术研发"
      },
      {
        name: "description",
        content:
          "重庆油之岩科技发展有限公司以资源化利用为核心,致力于油气资源高效低排处置方案创新研发,现为油气处理行业上游提供油基岩屑处置服务方案,同时向下游提供钻井原液、绿化肥料、免烧砖原料、柴油等。"
      }
    ]
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  #appBodyer {
    // 面包屑
    > p {
      line-height: 50px;
      color: #495a68;
      width: 1200px;
      margin: auto;
    }
    div {
      width: 1200px;
      margin: 0 auto 40px;
      h3 {
        line-height: 60px;
        text-align: center;
        font-size: 1.6em;
        color: #333333;
        strong {
          color: #ee5e44;
        }
      }
      p {
        line-height: 25px;
        font-size: 1.1em;
        text-indent: 2em;
        margin: 10px auto;
        strong {
          color: #ee5e44;
        }
      }
      i {
        width: 300px;
        line-height: 100px;
        margin: 20px auto;
        display: block;
        text-align: center;
        font-size: 4em;
      }
      .icon-anzhuo {
        color: #78c257;
      }
      .icon-ios {
        color: #5f5f5f;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    #appBodyer {
      p {
        width: 100%;
      }
      div {
        width: 93%;
      }
    }
  }
}
</style>