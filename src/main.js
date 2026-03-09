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
