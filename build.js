const fs = require('fs');
const path = require('path');

const header = `// ==UserScript==
// @name         东方财富链接跳转
// @namespace    https://github.com/yourname/eastmoney-redirect
// @version      1.0.0
// @description  自动将旧版东方财富股票链接跳转到新版
// @author       YourName
// @match        https://quote.eastmoney.com/*
// @grant        none
// @run-at       document_start
// ==/UserScript==
`;

const srcPath = path.join(__dirname, 'src', 'main.js');
const distPath = path.join(__dirname, 'dist');

if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath);
}

const content = fs.readFileSync(srcPath, 'utf8');
const result = header + '\n' + content;

fs.writeFileSync(path.join(distPath, 'eastmoney-redirect.user.js'), result, 'utf8');

console.log('构建完成: dist/eastmoney-redirect.user.js');
