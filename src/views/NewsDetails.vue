<template>
  <div class="wrapper">
    <div id="newsDetail">
      <p>
       当前位置： <router-link style="color:grey" to="/home">首页</router-link>
        <i class="iconfont icon-a-Icon_arrow-right"></i> 资讯详情
      </p>
      <!-- 新闻标题 -->
      <h2 v-text="newsTitle"></h2>
      <!-- 新闻详情 -->
      <div class="centent" v-html="newsDetail"></div>
      <!-- 路由传过来的资讯id -->
      <h3 style="text-align: center;">路由传参传递过来的新闻id：{{newsId}}</h3>
      <!-- <input type="text" v-model="newsId" /> -->

      <div class="other">
        <span v-text="beforeNews.newsTitle" @click="newsChange(beforeNews.newsId)"></span>
        <span v-text="nextNews.newsTitle" @click="newsChange(nextNews.newsId)"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsDetails",
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
        title: "资讯详情",
        keywords: "关键词",
        description: "描述"
      },
      newsId: "",
      newsTitle: "[行业资讯]关于XXXX的重要通知",
      newsDetail: `<p style="line-height:30px;text-indent: 2em;">富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容富文本编辑器输出的内容</p>`,
      beforeNews: { newsTitle: "[行业资讯]关于XXXX的重要通知", newsId: "888" },
      nextNews: { newsTitle: "[行业资讯]关于XXXX的重要通知", newsId: "999" }
    };
  },
  created() {
    // 存储vue-router通过paramss传参传过来的资讯id
    this.newsId = this.$route.params.newsId;

    // // 获取数据演示
    // this.$axios
    //   .get("api/newsDetails")
    //   .then(res => {
    //     // console.log(res.data);
    //     this.meta = res.data.meta;
    //     this.newsTitle = res.data.newsTitle;
    //     this.newsDetail = res.data.newsDetail;
    //     this.beforeNews = res.data.beforeNews;
    //     this.nextNews = res.data.nextNews;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

  },
  watch: {
    newsId(val, oldval) {
      // axios获取newsDetails数据
      this.$axios
        .get("api/newsDetails", {
          params: {
            newsId: val
          }
        })
        .then(res => {
          // console.log(res.data);
          this.meta = res.data.meta;
          this.newsTitle = res.data.newsTitle;
          this.newsDetail = res.data.newsDetail;
          this.beforeNews = res.data.beforeNews;
          this.nextNews = res.data.nextNews;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  methods: {
    newsChange(val) {
      this.newsId = val;
      // 获取上一篇或下一篇文章newsId并更新
    }
  },
  mounted() {
    // 动态设置meta
    setTimeout(() => {
      this.pageName = "NewsDetails";
    }, 2000);
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  // 资讯详情
  #newsDetail {
    // 面包屑
    > p {
      line-height: 50px;
      color: #495a68;
      width: 1200px;
      margin: auto;
    }
    h2 {
      margin: 50px auto 20px;
      text-align: center;
      color: #3b3c3f;
      font-size: 1.8em;
    }
    div {
      width: 1150px;
      height: auto;
      margin: 30px auto;
    }
    .other {
      overflow: hidden;
      span {
        line-height: 50px;
        color: #606061;
        &:hover {
          color: #6390d1;
          cursor: pointer; //鼠标移入变小手
        }
        &:nth-child(1) {
          float: left;
          margin-left: 40px;
          &::before {
            content: "上一篇：";
          }
        }
        &:nth-child(2) {
          float: right;
          margin-right: 40px;
          &::before {
            content: "下一篇：";
          }
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    #newsDetail {
      // 面包屑
      > p {
        width: 100%;
      }
      div {
        width: 93%;
        margin: 20px auto;
      }
      h2 {
        margin: 20px auto 20px;
        font-size: 1.3em;
      }
      .other {
        span {
          display: block;
          text-align: center;
          line-height: 30px;
          overflow: hidden;
          &:nth-child(1) {
            float: none;
            margin-left: 0;
          }
          &:nth-child(2) {
            float: none;
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>