<template>
  <div class="wrapper">
    <div id="kitBorder">
      <h2>油之岩数字化服务平台(陆续推出)</h2>
      <div v-for="(item,index) in kitItem" :key="index">
        <h3 v-text="item.itemClass"></h3>
        <ul>
          <li v-for="(item2,index2) in item.list" :key="index2">
            <a :href="item2.href" v-text="item2.title"></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title:
      "产品服务-油之岩科技-废油处置方案定制-智慧采购-数字合同-合作流程",
    meta: [
      {
        name: "keywords",
        content: "产品服务,数字化平台,智慧订单,智慧采购,服务流程"
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
      kitItem: [
        {
          itemClass: "转换类工具:",
          list: [
            {
              title: "pdf转word",
              href: "#"
            },
            {
              title: "pdf转excel",
              href: "#"
            },
            {
              title: "pdf转ppt",
              href: "#"
            },
            {
              title: "psd转png",
              href: "#"
            },
            {
              title: "psd转jpg",
              href: "#"
            },
            {
              title: "png转jpg",
              href: "#"
            },
            {
              title: "jpg转png",
              href: "#"
            }
          ]
        },
        {
          itemClass: "下载工具:",
          list: [
            {
              title: "抖音视频无水印下载",
              href: "#"
            },
            {
              title: "今日头条视频下载",
              href: "#"
            },
            {
              title: "YouTube视频下载",
              href: "#"
            },
            {
              title: "bilibili视频下载",
              href: "#"
            }
          ]
        },
        {
          itemClass: "在线开发工具:",
          list: [
            {
              title: "在线photoshop",
              href: "#"
            },
            {
              title: "在线压缩代码",
              href: "#"
            },
            {
              title: "在线json数据格式化",
              href: "#"
            },
            {
              title: "php在线工具",
              href: "#"
            },
            {
              title: "python在线工具",
              href: "#"
            },
            {
              title: "node.js在线工具",
              href: "#"
            },
            {
              title: "js压缩/解压工具",
              href: "#"
            },
            {
              title: "html压缩/解压工具",
              href: "#"
            },
            {
              title: "在线Markdown",
              href: "#"
            },
            {
              title: "在线图片压缩",
              href: "#"
            },
            {
              title: "rgb16进制工具",
              href: "#"
            },
            {
              title: "在线配色",
              href: "#"
            }
          ]
        }
      ]
    };
  },
  created() {
    // axios获取首页数据
    this.$axios
      .get("api/kit")
      .then(res => {
        // console.log(res.data);
        this.kitItem = res.data.kitItem;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  #kitBorder {
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

  @media screen and (max-width: 1200px) {
    #kitBorder {
      div {
        width: 93%;
        height: auto;
        overflow: hidden;
        margin: 30px auto;
        h3 {
          width: 100%;
        }
        ul {
          width: 100%;
          display: -webkit-flex;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          li {
            flex: 40%;
          }
        }
      }
    }
  }
}
</style>