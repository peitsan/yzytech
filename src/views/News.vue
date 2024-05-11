<template>
  <div class="wrapper">
    <div id="news">
      <!-- 新闻列表 -->
      <div class="newsItem">
        <ul>
          <li v-for="(item,index) in newsName" :key="index">
            <router-link :to="{name:'NewsDetails',params:{newsId:item.id}}">
              <i class="iconfont icon-a-Icon_arrow-right"></i>
              <p v-text="item.title"></p>
              <span v-text="item.time"></span>
            </router-link>
          </li>
        </ul>
        <!-- 分页器 -->
        <div class="pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :page-count="pageAll"
            :pager-count="5"
            @current-change="handleCurrentChange"
          ></el-pagination>
          <!-- pager-count设置超过5页隐藏页码--要求大于等于5小于21的奇数 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title:
      "行业咨询-油之岩科技-页岩油处置最新-技术进展-公司公告",
    meta: [
      {
        name: "keywords",
        content:
          "行业咨询-油之岩科技-新闻-柴油汽油-油价-石油污染-处置废油"
      },
      {
        name: "description",
        content:
        "重庆油之岩科技发展有限公司以资源化利用为核心,致力于油气资源高效低排处置方案创新研发,现为油气处理行业上游提供油基岩屑处置服务方案,同时向下游提供钻井原液、绿化肥料、免烧砖原料、柴油等",
      }
    ]
  },
  data() {
    return {
      newsName: [
        // 最多显示每页8条资讯
        {
          id: "1",
          title: "[公司公告] 重庆油之岩科技发展有限公司成立,有望成为行业领头羊",
          time: "2022-05-18 9:00:00"
        },
      ],
      pageAll: 5, //总页码
      pageNumber: 1 //当前页码
    };
  },
  created() {
    // axios获取news数据
    this.$axios
      .get("api/news")
      .then(res => {
        // console.log(res.data);
        this.newsName = res.data.newsName;
        this.pageAll = res.data.pageAll;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    handleCurrentChange(val) {
      // 获取当前页码
      this.pageNumber = val;
      // console.log("当前是第"+this.pageNumber+"页")
      this.$axios
        .get("api/news", {
          params: {
            pageNumber: this.pageNumber
          }
        })
        .then(res => {
          // console.log(res.data);
          this.newsName = res.data.newsName;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  // element-ui分页器居中
  .pagination {
    text-align: center;
    margin-top: 20px;
  }
  #news {
    .newsItem {
      margin: 30px auto;
      overflow: hidden;
      padding: 30px 0;
      width: 1200px;
      box-shadow: 0 0 15px #eeeeee;
      ul {
        width: 1100px;
        margin: auto;
        height: 488px;
        overflow: hidden;
        background: #ffffff;
        li {
          width: 100%;
          height: 60px;
          float: left;
          border-bottom: 1px dashed #aaaaaa;
          overflow: hidden;
          a {
            display: block;
            width: 100%;
            height: 100%;
            line-height: 60px;
            color: #333333;
            position: relative;
            i {
              position: absolute;
              left: 0;
              top: 0;
              z-index: 1;
              color: #aaaaaa;
            }
            p {
              margin-left: 20px;
              width: 600px;
              float: left;
              overflow: hidden;
              // 文字单行省略
              text-overflow: ellipsis;
              white-space: nowrap;
              text-align: left;
            }
            span {
              width: 200px;
              float: right;
              text-align: right;
            }
            &:hover {
              color: #0092ff;
            }
            &:hover i {
              color: #0092ff;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    #news {
      .newsItem {
        width: 93%;
        font-size: 1em;
        ul {
          width: 92%;
          li {
            a {
              p {
                width: 60%;
              }
              span {
                width: 30%;
                overflow: hidden;
              }
            }
          }
        }
      }
    }
  }
}
</style>