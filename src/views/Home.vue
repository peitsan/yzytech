<template>
  <div class="wrapper">
    <el-carousel left="0" width="100%" :height="bannerHeight">
      <el-carousel-item v-for="(item,index) in homeBanner" :key="index">
        <img class="homeBanner" :src="item.src" :alt="item.alt" />
      </el-carousel-item>
    </el-carousel>
    <!-- bodyer开始 -->
    <div id="homeBodyer">
      <div class="ourService">
        <h2>公 司 业 务</h2>
        <h3>
Corporation Business</h3>
        <ul>
          <li>
            <router-link to="/Corperation">
              <i class="iconfont icon-guanliancailiao"></i>
              <h3>岩油加工产链合作</h3>
              <p>B2B Contract</p>
            </router-link>
          </li>
          <li>
            <router-link to="/Oilforindustry">
              <i class="iconfont icon-Bio-Gas"></i>
              <h3>工业油&岩油馏分</h3>
              <p>Oil&Material For Industry</p>
            </router-link>
          </li>
          <li>
            <router-link to="/ContructionMaterial">
              <i class="iconfont icon-cailiaokufang"></i>
              <h3>建筑业原材料</h3>
              <p>
Raw Materials for Construction</p>
            </router-link>
          </li>
          <li>
            <router-link to="/Solution">
              <i class="iconfont icon-service1"></i>
              <h3>岩油废油处置方案</h3>
              <p>Plan Of Waste Oil Disposal</p>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- <div class="discounts">
        <h2>优惠活动</h2>
        <h3>Discounts</h3>
        <ul>
          <li>
            <i class="iconfont icon-yun"></i>
            <strong>首年赠服务器</strong>
          </li>
          <li>
            <i class="iconfont icon-shiwuzhongxin_yumingshenqingfuwu"></i>
            <strong>首年赠.com域名</strong>
          </li>
          <li>
            <i class="iconfont icon-houqiweihuweihuweihuguanli"></i>
            <strong>免费运维3个月</strong>
          </li>
          <li>
            <i class="iconfont icon-peixun"></i>
            <strong>免费培训使用方法</strong>
          </li>
        </ul>
      </div> -->
      <div class="workFlow">
        <h2>工作流程</h2>
        <h3>Work Flow</h3>
        <ul>
          <li>
            <i class="iconfont icon-jishuhezuoqiatanhezuohuitan"></i>
            <h3>商务洽谈</h3>
          </li>
          <li>
            <i class="iconfont icon-hetong"></i>
            <h3>签订合同</h3>
          </li>
          <li>
            <i class="iconfont icon-qian4"></i>
            <h3>支付定金</h3>
          </li>
          <li>
            <i class="iconfont icon-yanshou"></i>
            <h3>项目交付</h3>
          </li>
          <li>
            <i class="iconfont icon-zhifuweikuan"></i>
            <h3>支付尾款</h3>
          </li>
        </ul>
      </div>
      <div class="ourFriends">
        <h2>合 作 伙 伴</h2>
        <h3>Strategic Partners</h3>
        <ul>
          <li v-for="(item,index) in ourFriends" :key="index">
            <a :href="item.link">
            <img v-lazy="item.src" :alt="item.alt" />
            </a>
          </li>
        </ul>
      </div>
      <div class="homeSeo">
        <!-- 这里是给百度爬虫爬取的、用户查看不到,此处经过css处理可放置想让蜘蛛爬取却不想用户见到的内容 -->
      </div>
    </div>
    <!-- bodyer结束 -->
  </div>
</template>

<script>
export default {
  name: "home",
  metaInfo() {
    return {
      title: this.meta.title,
      meta: [
        {
          name: "keywords",
          content: this.meta.keywords
        },
        {
          name: "description",
          content: this.meta.description
        }
      ]
    };
  },
  data() {
    return {
      meta: {
        title:
          "重庆油之岩科技发展有限公司-油基岩屑处置-油基岩油气副产品-处置水平业界领先-双碳减排技术研发-院士专家青睐的油气处置",
        keywords:
          "油基岩屑处置方案,钻井原液,绿化肥料,免烧砖原料,柴油,汽油,教育部智库研发,数字化平台",
        description: "描述"
      },
      bannerHeight: "", //轮播图高度
      homeBanner: [
        {
          src: "https://resource.youzhiyan.cn/image/banner1.png",
          alt: "业界领先\"油基岩屑处置\"方案服务提供商"
        },
        {
          src: "https://resource.youzhiyan.cn/image/banner2.png",
          alt: "页岩油开采副产品、钻井原液、绿肥、免烧砖原料、柴油汽油"
        },
        {
          src: "https://resource.youzhiyan.cn/image/banner3.png",
          alt: "多位学术泰斗认可推荐,油气处置技术专业研发团队"
        },
        {
          src: "https://resource.youzhiyan.cn/image/banner4.jpg",
          alt: "数字化服务管理平台、智慧+页岩油开采"
        }
      ],
      ourFriends: [
        {
          src: "https://resource.youzhiyan.cn/image/co1.png",
          alt: "油气藏地质及开发工程国家重点实验室",
          link: "https://www.swpu.edu.cn/lab/"
        },
        {
          src: "https://resource.youzhiyan.cn/image/co2.png",
          alt: "华为云",
          link: "https://activity.huaweicloud.com/"
        },
        {
          src: "https://resource.youzhiyan.cn/image/co3.png",
          alt: "新网数码",
          link: "https://www.xinnet.com/"
        },
        {
          src: "https://resource.youzhiyan.cn/image/co4.png",
          alt: "中国科学院重庆绿色智能技术研究院",
          link:"http://www.cigit.cas.cn/"
        },
        {
          src: "https://resource.youzhiyan.cn/image/co5.png",
          alt: "西南四校",
          link:"https://www.swpu.edu.cn/"
        },
        {
          src: "https://resource.youzhiyan.cn/image/co6.png",
          alt: "eyouspace众创空间",
          link:"http://siee.cqupt.edu.cn/"
        },
        {
          src: "https://resource.youzhiyan.cn/image/co7.png",
          alt: "聚购科技",
          link:"https://www.juugoo.com/"
        },
        {
          src: "https://resource.youzhiyan.cn/image/co8.png",
          alt: "腾讯公益",
          link:"https://gongyi.qq.com/"
        }
      ]
    };
  },
  created() {
    // axios获取home数据
    this.$axios
      .get("api/home")
      .then(res => {
        // console.log(res.data);
        this.meta = res.data.meta;
        this.homeBanner = res.data.homeBanner;
        this.ourFriends = res.data.ourFriends;
      })
      .catch(function(error) {
        console.log(error);
      });
    // 获取当前窗口宽度通过计算动态设置轮播图高度
    this.bannerHeight = (document.body.clientWidth * 400) / 1390 + "px";
  },
  mounted() {
    // 动态设置meta
    setTimeout(() => {
      this.pageName = "home";
    }, 2000);
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  // 解决轮播图ie低版本滚动条问题
  .el-carousel {
    overflow: hidden;
  }
  // element轮播图组件样式
  .homeBanner {
    width: 100%;
    height: auto;
  }
  // 其他样式
  #homeBodyer {
    // 隐藏给百度爬虫看的内容
    .homeSeo {
      width: 0px;
      height: 0px;
      position: fixed;
      z-index: 9999;
    }
    overflow: hidden;
    .ourService {
      width: 1200px;
      margin: auto;
      text-align: center;
      overflow: hidden;
      h2 {
        margin: 30px auto 10px;
        line-height: 40px;
        color: #3b3c3f;
        font-size: 1.8em;
      }
      h3 {
        color: #6390d1;
      }
      ul {
        overflow: hidden;
        li {
          a {
            display: block;
            width: 100%;
            height: 100%;
          }
          width: 220px;
          height: auto;
          display: block;
          float: left;
          margin: 0 40px;
          padding-top: 30px;
          i {
            font-size: 6em;
            color: #6390d1;
          }
          h3 {
            line-height: 40px;
            color: #2c2c2c;
          }
          p {
            line-height: 20px;
            color: #808080;
          }
          &:hover {
            i {
              color: #ffb400;
            }
            h3 {
              color: #6390d1;
            }
          }
        }
      }
    }
    // 优惠活动
    .discounts {
      width: 1200px;
      margin: auto;
      text-align: center;
      overflow: hidden;
      h2 {
        margin: 30px auto 10px;
        line-height: 40px;
        color: #3b3c3f;
        font-size: 1.8em;
      }
      h3 {
        color: #6390d1;
      }
      ul {
        margin: 30px 0;
        overflow: hidden;
        li {
          float: left;
          width: 280px;
          margin: 10px 10px;
          height: 140px;
          line-height: 140px;
          background: #495a80;
          color: #ffffff;
          font-size: 1.3em;
          border-bottom: #ffb400 solid 5px;
          i {
            font-size: 1.5em;
            margin-right: 15px;
          }
          &:hover {
            color: #ffb400;
          }
        }
      }
    }
    // 工作流程
    .workFlow {
      width: 1200px;
      margin: auto;
      text-align: center;
      overflow: hidden;
      h2 {
        margin: 30px auto 10px;
        line-height: 40px;
        color: #3b3c3f;
        font-size: 1.8em;
      }
      h3 {
        color: #6390d1;
      }
      ul {
        text-align: center;
        margin: 30px 0;
        overflow: hidden;
        li {
          background: #e7791a;
          padding: 30px 0;
          margin: 0 20px;
          width: 200px;
          float: left;
          i {
            font-size: 4em;
            color: #ffffff;
          }
          h3 {
            color: #ffffff;
            line-height: 40px;
            margin-top: 20px;
          }
          &:nth-child(2),
          &:nth-child(4) {
            background: #196193;
            margin-top: 50px;
          }
          // 合作流程鼠标移入旋转
          -moz-transition: all 1s; /* Firefox 4 */
          -webkit-transition: all 1s; /* Safari and Chrome */
          -o-transition: all 1s; /* Opera */
          transition: all 1s; /* ie9+及其他 */
          &:hover {
            // 鼠标移入旋转
            -moz-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
      }
    }
    // 合作伙伴
    .ourFriends {
      width: 1200px;
      margin: auto;
      text-align: center;
      h2 {
        margin: 30px auto 10px;
        line-height: 40px;
        color: #3b3c3f;
        font-size: 1.8em;
      }
      h3 {
        color: #6390d1;
      }
      ul {
        background: #f2efe6;
        width: 1200px;
        overflow: hidden;
        margin: 30px auto;
        li {
          width: 220px;
          height: 100px;
          margin: 20px 40px;
          float: left;
          border-radius: 10px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
          -moz-transition: all 1s; /* Firefox 4 */
          -webkit-transition: all 1s; /* Safari and Chrome */
          -o-transition: all 1s; /* Opera */
          transition: all 1s; /* ie9+及其他 */
          &:hover {
            // 鼠标移入放大
            -moz-transform: scale(1.2);
            -webkit-transform: scale(1.2);
            -o-transform: scale(1.2);
            transform: scale(1.2);
          }
        }
      }
    }
  }

  // 首页响应式
  @media screen and (max-width: 1200px) {
    #homeBodyer {
      .ourService {
        width: 93%;
        h2 {
          margin: 20px auto 10px;
          line-height: 30px;
        }
        h3 {
          font-size: 1em;
        }
        ul {
          li {
            padding-top: 20px;
            width: 50%;
            margin: 0;
            i {
              font-size: 4em;
            }
            h3 {
              font-size: 1em;
              line-height: 25px;
            }
            p {
              font-size: 0.8em;
              line-height: 12px;
            }
          }
        }
      }
      // 优惠活动
      .discounts {
        width: 93%;
        ul {
          margin: 30px 0 0;
          display: -webkit-flex;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          li {
            width: 45%;
            margin: 10px 0;
            font-size: 1em;
            height: 100px;
            line-height: 50px;
            background: #6491d1;
            i {
              display: block;
              font-size: 2em;
              margin: 0;
            }
          }
        }
      }
      // 工作流程
      .workFlow {
        width: 93%;
        ul {
          margin: 30px 0;
          display: -webkit-flex;
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
          li {
            padding: 0;
            margin: 0;
            width: 18%;
            overflow: hidden;
            padding-top: 15px;
            i {
              font-size: 2em;
            }
            h3 {
              font-size: 0.8em;
              margin-top: 0;
            }
          }
        }
      }
      // 合作伙伴
      .ourFriends {
        width: 93%;
        ul {
          width: 93%;
          overflow: hidden;
          margin: 30px auto;
          padding: 15px 0;
          display: -webkit-flex;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          li {
            width: 40%;
            height: auto;
            margin: 5px auto;
            border-radius: 4px;
            img {
              width: 100%;
              height: 100%;
            }
            &:hover {
              // 取消鼠标移入放大动画
              -moz-transform: none;
              -webkit-transform: none;
              -o-transform: none;
              transform: none;
            }
          }
        }
      }
    }
  }
}
</style>