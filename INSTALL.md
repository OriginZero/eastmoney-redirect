# 东方财富链接跳转 - 安装指南

## 快速开始

### 方法一：直接安装（推荐）

1. 复制 `dist/eastmoney-redirect.user.js` 文件的全部内容
2. 打开油猴扩展，点击"添加新脚本"
3. 粘贴内容并保存
4. 访问旧版链接自动跳转

### 方法二：从文件安装

1. 打开油猴扩展
2. 点击"实用工具"
3. "从文件添加用户脚本"
4. 选择 `dist/eastmoney-redirect.user.js`

## 开发相关

```bash
# 克隆项目
git clone <repo-url>
cd eastmoney-redirect

# 安装依赖
npm install

# 运行测试
npm run test

# 构建脚本
npm run build
```

## 常见问题

### Q: 为什么跳转不生效？
A: 确保油猴扩展已启用，并允许访问 eastmoney.com

### Q: 支持哪些股票类型？
A: 支持深圳股(sz)和上海股(sh)，如 sz000568、sh600519
