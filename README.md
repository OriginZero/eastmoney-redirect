# 东方财富链接跳转

油猴脚本 - 自动将旧版东方财富股票链接跳转到新版

## 功能

- 自动将旧版股票链接跳转到新版
- 旧版: `https://quote.eastmoney.com/sz000568.html`
- 新版: `https://quote.eastmoney.com/concept/sz000568.html`

## 安装

### 方法1: 直接安装

复制 `dist/eastmoney-redirect.user.js` 文件内容，在油猴中创建新脚本并粘贴。

### 方法2: 从Greasy Fork安装

（待发布）

## 开发

```bash
# 安装依赖
npm install

# 构建脚本
npm run build
```

## 支持的链接类型

| 类型 | 旧版格式 | 新版格式 |
|------|----------|----------|
| 深圳股 | `https://quote.eastmoney.com/sz000568.html` | `https://quote.eastmoney.com/concept/sz000568.html` |
| 上海股 | `https://quote.eastmoney.com/sh600519.html` | `https://quote.eastmoney.com/concept/sh600519.html` |

## License

MIT
