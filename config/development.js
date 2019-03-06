/*
 * @Author: Sky.Sun 
 * @Date: 2018-07-09 16:23:41 
 * @Last Modified by: Sky.Sun
 * @Last Modified time: 2018-07-18 15:30:01
 */
module.exports = {
    /**
     * SSL 设置
     */
    ssl: {
        /**
         * 是否开启 HTTPS
         */
        enable: false,

        /**
         * 私钥文件路径
         */
        key: '/ssl/website.key',

        /**
         * 证书文件路径
         */
        cert: '/ssl/website.crt'
    },

    /**
     * 反向代理的超时时长，单位毫秒
     */
    proxyTimeout: 60000,

    /**
     * 反向代理keep-alive时长，单位毫秒
     */
    keepAlive: 5000,

    /**
     * 调度规则，开发环境设置为每整秒触发
     * 格式：https://github.com/node-schedule/node-schedule#cron-style-scheduling
     */
    job: '*/1 * * * * *',

    /**
     * 文件选择器中的静态文件根目录
     */
    staticDirPath: 'C:',

    /**
     * 调试模式的参数名
     */
    debugParam: 'h5debug',

    /**
     * 请求方式
     */
    methods: ['Get', 'Post', 'Put', 'Delete', 'Options'],

    /**
     * 页面的身份验证
     * 这是一个数组，元素类型为对象，对象属性包含：file: 文件名，对应permissions目录下的；title: 验证规则名称，显示在新增或修改身份验证的模态框
     */
    permissions: [{
        title: '示例验证',
        file: 'example.js'
    }],

    /**
     * noginx系统的访问权限
     */
    auth: {
        /**
         * 允许登录的用户，密码必须经过md5加密
         */
        users: {
            dev: 'e10adc3949ba59abbe56e057f20f883e',
            admin: 'e10adc3949ba59abbe56e057f20f883e'
        },

        /**
         * 拥有编辑权限的用户，如：['user1', 'user2']，配置为 ['*'] 则所有用户都有编辑权限
         */
        editableUsers: ['*']
    },

    /**
     * 静态资源服务端缓存设置
     */
    serverFileCache: {
        /**
         * 是否开启服务端缓存
         */
        enable: false,

        /**
         * 所有缓存值的总大小限制
         */
        max: 1024 * 1024 * 50,

        /**
         * 缓存过期时间，单位毫秒
         */
        maxAge: 1000 * 60 * 5
    },

    /**
     * 数据库配置
     */
    db: {
        /**
         * MongoDB 连接字符串，支持集群
         */
        mongodb: 'mongodb://111.231.215.55:27017/noginx',

        /**
         * Redis 键前缀
         */
        redisKeyPrefix: 'Noginx:',

        /**
         * Redis 连接信息，如果配置为一个数组则视为集群
         */
        redisConnect: 'redis://111.231.215.55:6379'
    },

    /**
     * 日志配置
     */
    log4js: {
        appenders: [{
            type: 'stdout'
        }]
    }
};
