# AGENTS.md - 开发规范指南

## 项目概述

这是一个 Tampermonkey（油猴）脚本项目，用于将旧版东方财富股票链接自动跳转到新版。

## 目录结构

```
├── src/
│   ├── main.js      # 脚本主逻辑
│   └── config.js    # 配置文件
├── dist/            # 构建输出目录
├── build.js         # 构建脚本
├── test.js          # 单元测试
└── package.json
```

## 构建与测试命令

### 安装依赖
```bash
npm install
```

### 构建
```bash
npm run build
# 或
node build.js
```
输出文件: `dist/eastmoney-redirect.user.js`

## 安装

### 方法1: 从 Greasy Fork 安装（推荐）
访问 https://greasyfork.org/zh-CN/scripts/568097 安装最新版本。

### 方法2: 手动安装
复制 `dist/eastmoney-redirect.user.js` 文件内容，在油猴中创建新脚本并粘贴。

### 测试
```bash
npm test
# 或
node test.js
```

### 运行单个测试用例

修改 `test.js` 中的 `testCases` 数组，只保留需要测试的用例，然后运行：

```bash
npm test
```

或使用 Node.js 直接运行特定测试函数：

```bash
node -e "
const OLD_PATTERN = /^https:\/\/quote\.eastmoney\.com\/(sz|sh)(\d{6})\.html\$/i;
const NEW_BASE = 'https://quote.eastmoney.com/concept/';
function redirectToNewVersion(url) {
    const match = url.match(OLD_PATTERN);
    if (match) {
        const prefix = match[1].toLowerCase();
        const code = match[2];
        return NEW_BASE + prefix + code + '.html';
    }
    return null;
}
console.log(redirectToNewVersion('https://quote.eastmoney.com/sz000568.html'));
"
```

## 代码规范

### 通用规范

- **语言**: JavaScript (ES6+)
- **代码风格**: 简洁、函数式为主
- **严格模式**: 所有 JS 文件开头必须添加 `'use strict';`
- **缩进**: 4 空格

### 命名规范

- **变量/函数**: 驼峰命名 (`camelCase`)
  - `redirectToNewVersion`
  - `oldPattern`
- **常量**: 全大写下划线分隔 (`UPPER_SNAKE_CASE`)
  - `OLD_PATTERN`
  - `NEW_BASE`
- **文件**: 小写连字符 (`kebab-case`)

### 函数设计

- 单一职责，每个函数只做一件事
- 函数应该有明确的返回值
- 避免副作用，优先使用纯函数

### 错误处理

- 本项目为简单脚本，无需复杂错误处理
- 使用正则匹配时确保模式正确
- 不匹配的 URL 应返回 `null` 而不是抛出异常

### 注释

- 除非涉及复杂逻辑，否则不强制要求注释
- 关键逻辑可添加简短注释说明

## Greasy Fork 发布规范

发布到 Greasy Fork 时必须包含以下元数据：

```javascript
// ==UserScript==
// @name         脚本名称
// @namespace    https://github.com/yourname/项目名
// @version      x.x.x
// @description  描述
// @author       作者
// @license      MIT
// @match        https://example.com/*
// @grant        none
// @run-at       document_start
// ==/UserScript==
```

**注意**: 必须声明 `@license`，否则无法发布。

## Git 提交规范

- 使用清晰的提交信息
- 提交前运行 `npm test` 确保测试通过
- 构建产物 `dist/` 目录建议一并提交

## 常用操作

### 添加新的 URL 匹配规则

1. 修改 `src/config.js` 添加新的 URL 模式
2. 修改 `src/main.js` 添加对应的跳转逻辑
3. 在 `test.js` 中添加测试用例
4. 运行 `npm test` 验证
5. 运行 `npm run build` 构建发布文件
