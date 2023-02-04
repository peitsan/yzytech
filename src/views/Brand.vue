<template>
  <div class="wrapper">
    <div id="brandBodyer">
      <div class="qjtcoBrand">
        <img :src="brand.img" alt="重庆油之岩科技发展公司运营品牌" />
      </div>
      <h2 v-text="brand.title_1" >油之岩简介</h2>
      <el-card class="brand-card">
        <ul>
        <p v-text="introduction" ></p>
      </ul>
      </el-card>
     
      <h2 v-text="brand.title_2">油之岩理念:</h2>
      <el-card class="brand-card">
        <ul>
        <p v-text="spirit" ></p>
      </ul>
      </el-card>
      
      <h2 v-text="brand.title_3">油之岩愿景</h2>
      <el-card  class="brand-card">
        <ul>
        <p v-text="dream" ></p>
      </ul>
      </el-card>
   
    </div>
  </div>
</template>

<script>
import { Card } from 'element-ui'
export default {
  components:{
    Card
  },
  metaInfo: {
    title:
      "品牌建设-油之岩科技-志鸿-专业服务-油页岩处置-油气副产品",
    meta: [
      {
        name: "keywords",
        content: "品牌,油之岩科技,志鸿,专业服务,油页岩处置,油气副产品,精品服务"
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
      introduction:"重庆油之岩科技发展有限公司以资源化利用为核心,致力于油气资源高效低排处置方案创新研发,现为油气处理行业上游提供油基岩屑处置服务方案,同时向下游提供钻井原液、绿化肥料、免烧砖原料、柴油等。油之岩成立于2022年,是一家立足西南、辐射全国的油基岩屑处理方案服务提供商。本公司在三年研发苦心经营下,发明了以“热解析”与“热脱附”为核心技术的新型油基岩屑高效处理方案。中国工程院罗平亚院士、孙金声院士等专家,均对本司油基岩屑技术方案予以肯定意见,认为本司方案处置技术已达到业界领先水平。",
      spirit:"油之岩始终坚持以“基础研发”为根本,三年以来累计投入研发超五百万,达到项目融资比例的10%以上!公司聘请多位业内权威专家为本项目进行研发评估,并与重庆智库达成战略合作意向,欢迎各行业研发骨干力量融入油之岩大家庭！",
      dream:"油之岩秉承国家绿色、低碳、可持续发展理念,以油基岩屑资源化处理为抓手,基于本司成熟的处置方案技术与经验,力求实现岩屑处理全流程保质、降本、增效,真正达到优于《页岩气油基岩屑处理国家标准》的无害化处置。",
      brand: {
        img: "https://resource.youzhiyan.cn/image/banner2.png",
        title_1: "油之岩简介",
        title_2: "油之岩理念",
        title_3: "油之岩愿景",
        content: [
          "OilRock 为油之岩面向海外市场的国际化品牌",
          "寓意：OilRock为油之岩的英文直译，言简意赅。品牌突出我司主营系列产品——油基岩屑处置方案,在海外页岩油开采岩屑处理具有一定知名度。",
          "重庆油之岩科技发展有限公司立足成渝、辐射全国、面向全球,凭借公司技术经验积累,将会衍生出更多的细化品牌,敬请期待。"
        ]
      }
    };
  },
  created() {
    // axios获取brand页面数据
    this.$axios
      .get("api/brand")
      .then(res => {
        // console.log(res.data);
        this.brand = res.data.brand;
      })
      .catch(function(error) {
        console.log(error);
      });
  },

};
</script>
<style lang="less" scoped>
.wrapper {
  #brandBodyer {
    .qjtcoBrand {
      margin: 20px auto;
      width: 90%;
      height: auto;
      img {
        width: 100%;
      }
    el-card{
      background-color: aliceblue;
      width: 80% !important;
      margin: 0 20%;
    }
  }  

    h2 {
      text-align: center;
      margin: 40px auto;
      color: #030714;
      font-size: 1.8em;
    }
    ul {
      width: 1200px;
      margin: 30px auto;
      line-height: 40px;
      list-style: inside;
    }
}
  @media screen and (max-width: 1200px) {
    #brandBodyer {
      .qjtcoBrand {
        width: 100%;
        display: -webkit-flex;
        display: flex;
        justify-content: center;
       
      }
      h2 {
        text-align: center;
        margin: 20px auto;
      }
      ul {
        width: 93%;
        margin-bottom: 30px;
      }
    }
  }
}
</style>