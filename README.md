# 东方财富链接跳转

油猴脚本 - 自动将旧版东方财富股票链接跳转到新版

## 功能

- 自动将旧版股票链接跳转到新版
- 旧版: `https://quote.eastmoney.com/sz000568.html`
- 新版: `https://quote.eastmoney.com/concept/sz000568.html`

## 安装

### 方法1: 从 Greasy Fork 安装（推荐）

访问 https://greasyfork.org/zh-CN/scripts/568097 安装最新版本。

### 方法2: 手动安装

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
