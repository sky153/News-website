module.exports = {
    devServer: {
        //针对开发服务器的配置
        proxy: {
            "/api": { //当请求路径以 /api 开头时， 开发服务器需要代理到 http://study.yuanjin.tech
                target: "http://study.yuanjin.tech",
            }
        }
    }
}