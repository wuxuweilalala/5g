export default {
    /**
   * @description api请求基础路径
   */
    baseUrl: {
        dev: 'http://5gplatform.sparta.html5.qq.com/api/usermanager',
        idc: 'http://5gplatform.sparta.html5.qq.com/api/usermanager'
        // idc: 'https://helper5g.3g.qq.com/api/usermanager'
    },

    /**
     *  微信扫码appid配置
     */
    // appid : 'wx7f19de6b83b4faad',  // 正式appid
    appid : 'wxd0136ac573c841db', // 测试appid

    /**
   * @description 默认打开的首页的路由name值，默认为index
   */
    homeName: 'index',
    
    /**
   * @description 需要加载的插件
   */
    plugin: {
    }
};
