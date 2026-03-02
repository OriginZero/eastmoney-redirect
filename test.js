const OLD_PATTERN = /^https:\/\/quote\.eastmoney\.com\/(sz|sh)(\d{6})\.html$/i;
const NEW_BASE = 'https://quote.eastmoney.com/concept/';

function redirectToNewVersion(url) {
    const match = url.match(OLD_PATTERN);
    if (match) {
        const prefix = match[1].toLowerCase();
        const code = match[2];
        return `${NEW_BASE}${prefix}${code}.html`;
    }
    return null;
}

const testCases = [
    {
        input: 'https://quote.eastmoney.com/sz000568.html',
        expected: 'https://quote.eastmoney.com/concept/sz000568.html'
    },
    {
        input: 'https://quote.eastmoney.com/sh600519.html',
        expected: 'https://quote.eastmoney.com/concept/sh600519.html'
    },
    {
        input: 'https://quote.eastmoney.com/concept/sz000568.html',
        expected: null
    },
    {
        input: 'https://quote.eastmoney.com/',
        expected: null
    },
];

console.log('测试链接转换:\n');

let passed = 0;
let failed = 0;

testCases.forEach((tc, i) => {
    const result = redirectToNewVersion(tc.input);
    const success = result === tc.expected;
    
    console.log(`[${i + 1}] ${tc.input}`);
    console.log(`    结果: ${result || '不跳转'}`);
    console.log(`    预期: ${tc.expected || '不跳转'}`);
    console.log(`    状态: ${success ? '✓ PASS' : '✗ FAIL'}\n`);
    
    if (success) passed++;
    else failed++;
});

console.log(`总计: ${passed} 通过, ${failed} 失败`);
