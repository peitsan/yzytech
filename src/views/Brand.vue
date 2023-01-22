<template>
  <div class="wrapper">
    <div id="brandBodyer">
      <div class="qjtcoBrand">
        <img :src="brand.img" alt="重庆油之岩科技发展公司运营品牌" />
      </div>
      <h2 v-text="brand.title">重庆油之岩科技发展公司运营品牌</h2>
      <ul>
        <li v-for="(item,index) in brand.content" v-text="item" :key="index"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
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
      brand: {
        img: "https://resource.youzhiyan.cn/image/banner2.png",
        title: "油之岩科技产品系列品牌",
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
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  #brandBodyer {
    .qjtcoBrand {
      margin: 20px auto;
      width: 800px;
      height: auto;
      img {
        width: 100%;
      }
    }
    h2 {
      text-align: center;
      margin: 40px auto;
      color: #3b3c3f;
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
        width: 93%;
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