// ==UserScript==
// @name         东方财富链接跳转
// @namespace    https://github.com/OriginZero/eastmoney-redirect
// @version      1.0.1
// @description  自动将旧版东方财富股票链接跳转到新版
// @author       OriginZero
// @license      MIT
// @match        https://quote.eastmoney.com/*
// @grant        none
// @run-at       document_start
// ==/UserScript==

(function() {
    'use strict';

    const OLD_PATTERN = /^https:\/\/quote\.eastmoney\.com\/(sz|sh)(\d{6})\.html$/i;
    const NEW_BASE = 'https://quote.eastmoney.com/concept/';

    function redirectToNewVersion() {
        const url = window.location.href;

        const match = url.match(OLD_PATTERN);
        if (match) {
            const prefix = match[1].toLowerCase();
            const code = match[2];

            const isShanghaiFund = prefix === 'sh' && /^5\d{5}$/.test(code);
            const isShenzhenFund = prefix === 'sz' && /^1\d{5}$/.test(code);

            if (isShanghaiFund || isShenzhenFund) {
                return;
            }

            const newUrl = `${NEW_BASE}${prefix}${code}.html`;

            if (url !== newUrl) {
                window.location.replace(newUrl);
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', redirectToNewVersion);
    } else {
        redirectToNewVersion();
    }
})();
