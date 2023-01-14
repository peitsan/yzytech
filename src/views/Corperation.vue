<template>
    <div class="wrapper">
      <div id="appBodyer">
        <p>
            当前位置： <router-link style="color:grey" to="/home">首页</router-link>
          <i class="iconfont icon-a-Icon_arrow-right"></i> 战略合作
        </p>
        <div>
          <i style="color:burlywood;font-size:100px" class="iconfont icon-gongyi"></i>
          <h3>
            友好<strong>合作</strong>
          </h3>
<p>油之岩科技秉承着以<strong>“互惠营销”</strong>的经营理念，将本公司的消费企业转化为合作伙伴共同参与社会福利的分配，以便达成更长久的合作关系。</p>
<p>公司创立以来,在多方共同努力磋商下,重庆<strong>油之岩科技</strong>发展有限公司已经与<strong>华为云计算</strong>技术有限公司、山西<strong>中通汇金投资</strong>有限公司、<strong>重庆聚购</strong>科技发展有限公司、山西省交城县华晋加油站等兄弟单位达成合作意向。</p>
<p>油之岩奉行<strong>开放包容</strong>的协作观念, 公司对有意与油之岩保持长期对接合作关系的单位表示欢迎与感谢!</p>
<p>商业合作业务请以书面形式发件到<strong>cqyzytech@163.com</strong>!</p>          
  
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
        "产链协作-战略合作-石油馏分-油之岩科技-方案提供商-废油处理-处置水平业界领先-双碳减排技术研发",
      meta: [
        {
          name: "keywords",
          content:
            "产链协作-战略合作-重庆油之岩-油基岩屑处置-油基岩油气副产品-油之岩科技-方案提供商-废油处理-处置水平业界领先-处置水平业界领先-双碳减排技术研发"
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