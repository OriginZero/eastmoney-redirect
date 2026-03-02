// 配置文件
const CONFIG = {
    // 旧版链接匹配模式
    oldPattern: /^https:\/\/quote\.eastmoney\.com\/([shzs])(\d{6})\.html$/,
    
    // 新版链接基础URL
    newBaseUrl: 'https://quote.eastmoney.com/concept/',
    
    // 排除的路径（不跳转）
    excludePaths: [
        '/concept/',
        '/center/',
        '/bk/',
    ],
    
    // 是否在控制台输出调试信息
    debug: false,
};

module.exports = CONFIG;
