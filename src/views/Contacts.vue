<template>
  <div class="wrapper">
    <div id="contactsBodyer">
      <h2>油自岩生 相伴油你 油之岩科技欢迎您的到访</h2>
      <div class="contactsMsg">
        <div class="surround" >
          <!-- <img :src="contactWay.siteImg" alt="重庆油之岩科技发展有限公司地址" /> 
          -->
          <!-- <iframe src="https://www.720yun.com/t/72fjOzwnsv2?scene_id=3155825" 
          frameborder="no"
          width="500px"
          height="300px"
          alt="重庆油之岩科技发展有限公司地址"></iframe> -->
          <iframe src="https://map.baidu.com/poi/%E9%87%8D%E5%BA%86%E9%82%AE%E7%94%B5%E5%A4%A7%E5%AD%A6/@11868389,3422995,21z,87t?uid=844a750e01b56cba626858cd&ugc_type=3&ugc_ver=1&device_ratio=2&compat=1&pcevaname=pc4.1&querytype=detailConInfo&da_src=shareurl#panoid=61bf56a3d876176ab21e36cf&panotype=inter&heading=206.52&pitch=-63.09&l=21&tn=B_NORMAL_MAP&sc=0&newmap=1&shareurl=1&pid=1902920001160814131606733UZ&iid=61bf56a3d876176ab21e36cf&psp=%7B%22PanoIndoorPoiModule%22%3A%7B%22uid%22%3A%22844a750e01b56cba626858cd%22%7D%7D" 
          frameborder="no"
          width="120%"
          height="350px"
          alt="重庆油之岩科技发展有限公司地址"></iframe>
        </div>
        <ul>
          <!-- <li>
            <i class="iconfont icon-dianhua"></i>
            <a :href="'tel:'+contactWay.tel" v-text="contactWay.tel"></a>
          </li>
          <li>
            <i class="iconfont icon-qq"></i>
            <a
              :href="'tencent://message/?uin=' + contactWay.qq + '&Site=&Menu=yes'"
              v-text="contactWay.qq"
            ></a>
          </li> -->
          <li>
            <i class="iconfont icon-shangye"></i>
            <a :href="'mailto:'+contactWay.email" v-text="contactWay.email"></a>
          </li>
          <li>
            <i class="iconfont icon-shangye"></i>
            <a href="#" v-text="contactWay.site"></a>
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
      "联系我们-油之岩科技-官方微信-邮箱-服务号-地址",
    meta: [
      {
        name: "keywords",
        content:
          "重庆油之岩科技联系方式-油之岩科技-官方微信-邮箱-服务号-地址"
      },
      {
        name: "description",
        content:
          "C",
      }
    ]
  },
  data() {
    return {
      contactWay: {
        // 网站底部部邮箱
        email: "cqyzytech@163.com",
        // 网站底部电话
        tel: "",
        // 网站底部客服QQ
        qq: "",
        // 地址
        site: "重庆市南岸区南山街道崇文路2号“eYouSpace”众创空间202201号",
        siteImg: "https://resource.youzhiyan.cn/image/site.jpg"
      }
    };
  },
  created() {
    // axios获取contacts页面数据
    this.$axios
      .get("api/contacts")
      .then(res => {
        // console.log(res.data);
        this.contacts = res.data.contacts;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  #contactsBodyer {
    width: 85%;
    margin: 90px 0% 130px 10% ;
    overflow: hidden;
    h2 {
      margin: 10px auto 30px;
      text-align: center;
      color: #3b3c3f;
      font-size: 1.8em;
    }
    .contactsMsg {
      div {
        // width: 400px;
        // height: 300px;
        float: left;
        margin: 40px;
        img {
          width: 400px;
          height: 300px;
        }
      }
      ul {
        display: block;
        width: 50%;
        height: 230px;
        float: right;
        margin: 40px 5% 0 0;
        line-height: 40px;
        font-size: 1.2em;
        padding-top: 70px;
        li {
          i {
            font-size: 1.5em;
            margin-right: 20px;
          }
          a {
            color: #000000;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    #contactsBodyer {
      margin: 40px auto 10px;
      width: 100%;
      .contactsMsg {
       
        .surround{
          width: 200%;
          height: auto;
          margin: 20px auto;
          float: none;
          img {
            width: 100%;
            height: auto;
          }
        }
        ul {
          width: 80%;
          float: none;
          margin: 20px auto;
          padding-top: 0;
        }
      }
    }
  }
}
</style>