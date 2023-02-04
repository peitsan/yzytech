const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');
const WEBPACK_CONFIG_HOST = 'http://139.9.81.3:8088'
// const WEBPACK_CONFIG_HOST = '139.9.81.3:8088'
module.exports = {
    assetsDir: "static", //静态资源打包到static文件夹
    productionSourceMap: false,
    lintOnSave: false,
    devServer: {
        host:'127.0.0.1',
        port:8081,
        disableHostCheck: true, 
        proxy: { //代理
            '/api': { //遇到这个开头的，就是拼上下面的target，我是这样理解的
                target: WEBPACK_CONFIG_HOST,
                ws: true,
                secure:false,
                changeOrigin: true,
                pathRewrite:{
                    '^/api': ''//重写路径
               }
            }
        }
        // proxy: 'http://127.0.0.1:3000',//json-server启动在3000端口，在此处配置vue-cli的代理服务
       
    },
    // devServer: {
    //     disableHostCheck: true,
    //     historyApiFallback: true,
    //     noInfo: true,
    //     host: 'localhost',
    //     port: 8081,
    //     open: true,
    //     proxy: { // 配置代理（只在本地开发有效，上线无效）
    //       "/api": { // 这是请求接口中要替换的标识
    //         target: WEBPACK_CONFIG_HOST, // 被替换的目标地址，即把 /api 替换成这个
    //         ws:true,//代理websocked
    //         secure: false, // 若代理的地址是https协议，需要配置这个属性
    //         pathRewrite:{
    //         '^/api':''//重写路径
    //         }
    //     }
    //     }
    //   },
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: WEBPACK_CONFIG_HOST,//接口的前缀
    //             secure:false,
    //             ws:true,//代理websocked
    //             changeOrigin:true,//虚拟的站点需要更管origin
    //             pathRewrite:{
    //                 '^/api':''//重写路径
    //             }
    //         }
    //     }
   
    // },
    configureWebpack: config => {
        if (process.env.NODE_ENV !== 'production') return;
        return {
            plugins: [
                new PrerenderSPAPlugin({
                    // 生成文件的路
                    // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
                    staticDir: path.join(__dirname, 'dist'),
                    // 此处填写需要预渲染页面路由path
                    routes: ['/', '/webSite', '/applet', '/account', '/appDevelopment', '/brand', '/about', '/employ', '/kit', '/contacts'],
                    renderer: new Renderer({
                        inject: {
                            foo: 'bar'
                        },
                        headless: false,
                        // 在 main.js 中 d ('render-event'))，两者的事件名称要对应上。
                        renderAfterDocumentEvent: 'render-event'
                    })
                }),
            ],
        };
    }
}
// module.exports = {
//     transpileDependencies: true,
//     lintOnSave: false,
//     devServer: {
//         port: 8081, //修改项目端口用的
//         proxy: { //代理
//             '/api': { //遇到这个开头的，就是拼上下面的target，我是这样理解的
//                 target: WEBPACK_CONFIG_HOST,
//                 ws: true,
//                 changeOrigin: true,
//                 pathRewrite:{
//                 '^/api':''//重写路径
//                }
//             }
//         }
//     }
// }

