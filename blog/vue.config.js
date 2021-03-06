const path = require("path");

function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'?'/public':'/',
    //反向代理的配置
    devServer: {
        proxy: {
            '/': {
                target: 'http://127.0.0.1:7001/',//目标地址
                changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {'^/': '/'}    //这里重写路径
            },
        },
        port: 8888,
        open: true, //配置自动启动浏览器
        compress: true,
        disableHostCheck: true,
    },


    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, "./src/common/css/variable.less")
            ]
        }
    },

    configureWebpack:config=>{
        if(process.env.NODE_ENV === 'production'){
            config.externals = {
                'vue': "Vue",
                'vuex': "Vuex",
                "vue-router": "VueRouter",
            }
        }
    },

   
    chainWebpack: config => {
        // console.log(config,'chainWebpack')
        // 移除 prefetch 插件
        config.plugins.delete('prefetch')
        // 移除 preload 插件
        config.plugins.delete('preload');
        // 打包时带引号（“”）
        // config.plugin("html").tap(args => {
        //     args[0].minify = false;
        //     return args;
        // });
        config.resolve.alias.set('@', resolve('src'))
        // config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js')
    },

    productionSourceMap : false,

    
}
