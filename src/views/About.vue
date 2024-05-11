<template>
  <div class="wrapper">
    <div id="aboutBodyer">
      <!-- 公司简介 -->
      <div class="companyProfile">
        <h2 v-text="companyProfile.title"></h2>
        <p v-text="companyProfile.content"></p>
      </div>
      <div class="publicBenefit">
        <!-- 栏目标题 -->
        <h2 v-text="publicBenefit.title"></h2>
        <!-- 公司理念 -->
        <p v-text="publicBenefit.content"></p>
        <div class="item">
          <ul>
            <!-- 公益项目图片 -->
            <li v-for="(item,index) in publicBenefit.publicBenefitImg" :key="index">
              <img :src="item.src" :alt="item.alt" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title:
      "油之岩故事-企业文化-相伴油你-公益奉献-扎根基础-研发历史",
    meta: [
      {
        name: "keywords",
        content:
          "油之岩科技,油之岩,Oilrock,公众号,公司沿革,运营模式,油之岩文化,油污处理"
      },
      {
        name: "description",
        content:
        "重庆油之岩科技发展有限公司以资源化利用为核心,致力于油气资源高效低排处置方案创新研发,现为油气处理行业上游提供油基岩屑处置服务方案,同时向下游提供钻井原液、绿化肥料、免烧砖原料、柴油等。"
      }
    ]
  },
  data() {
    return {
      companyProfile: {
        // 标题
        title: "了解油之岩",
        // 内容
        content:
        "重庆油之岩科技发展有限公司以资源化利用为核心,致力于油气资源高效低排处置方案创新研发,现为油气处理行业上游提供油基岩屑处置服务方案,同时向下游提供钻井原液、绿化肥料、免烧砖原料、柴油等"
      },
      publicBenefit: {
        // 栏目标题
        title: "公益油我们",
        content:
          "重庆油之岩科技始终将社会责任作为公司的固本之基,立足西部,扶持弱势,油之岩响应国家号召,致力于热心公益和社会服务项目。油之岩将以科技赋能公益，从油基岩屑处理中秉轴持钧,助力西部开发与环境保护。",
        // 公益项目图片
        publicBenefitImg: [
          {
            // 公益项目图片
            src: "https://resource.youzhiyan.cn/image/publicBenefit (1).jpg",
            // 公益项目图片描述
            alt: ""
          },
          {
            src: "https://resource.youzhiyan.cn/image/publicBenefit%20(2).jpg",
            alt: ""
          },
          {
            src: "https://resource.youzhiyan.cn/image/publicBenefit (3).jpg",
            alt: ""
          },
          {
            src: "https://resource.youzhiyan.cn/image/publicBenefit (4).jpg",
            alt: ""
          },
          {
            src: "https://resource.youzhiyan.cn/image/publicBenefit (5).jpg",
            alt: ""
          }
        ]
      }
    };
  },
  created() {
    // axios获取about页面数据
    this.$axios
      .get("api/about")
      .then(res => {
        // console.log(res.data);
        this.companyProfile = res.data.companyProfile;
        this.publicBenefit = res.data.publicBenefit;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  #aboutBodyer {
    width: 1200px;
    margin: auto;
    // 公司简介
    .companyProfile {
      margin-bottom: 30px;
      h2 {
        margin: 30px auto;
        text-align: center;
        color: #3b3c3f;
        font-size: 1.8em;
      }
      p {
        margin: auto;
        width: 100%;
        line-height: 40px;
        text-indent: 30px;
        font-weight: 500;
      }
    }
    // 公益事业
    .publicBenefit {
      overflow: hidden;
      // 公益事业标题
      h2 {
        margin: 30px auto;
        text-align: center;
        color: #3b3c3f;
        font-size: 1.8em;
      }
      // 公益理念
      p {
        margin: auto;
        width: 100%;
        line-height: 40px;
        text-indent: 30px;
        font-weight: 500;
      }
      // 公益事业项目
      .item {
        overflow: hidden;
        margin-bottom: 30px;
        ul {
          li {
            float: left;
            margin: 10px 10px;
            height: 220px;
            width: 220px;
            display: block;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    #aboutBodyer {
      width: 100%;
      .companyProfile {
        h2 {
          margin: 30px auto 20px;
        }
        p {
          width: 93%;
          line-height: 30px;
          text-indent: 30px;
          font-weight: 500;
        }
      }
      .publicBenefit {
        h2 {
          margin: 0 auto 20px;
        }
        p {
          width: 93%;
          line-height: 30px;
          text-indent: 30px;
          font-weight: 500;
        }
        .item {
          margin-bottom: 10px;
          ul {
            li {
              float: none;
              width: 93%;
              height: auto;
              margin: 10px auto;
            }
          }
        }
      }
    }
  }
}
</style>