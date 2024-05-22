var metaTags = [
    { name: 'author', content: 'Ticorn' },
    { name: 'copyright', content: 'Copyright © [2024] Ticorn' },
    { name: 'referrer', content: 'no-referrer' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'White' },
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    { 'http-equiv': 'Content-Security-Policy', content: 'directive' },
    { name: 'HandheldFriendly', content: 'True' },
    { name: 'title', content: 'Ticorn - Discover a World of Unlimited Sex Videos.' },
    { name: 'description', content: 'Dive into the world of Ticorn, the premier sex website that transports you to an enchanting world.' },
    { name: 'robots', content: 'index, follow' },
    { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
    { name: 'language', content: 'English' },
    { 'http-equiv': 'Cache-Control', content: 'no-cache' },
    { 'http-equiv': 'Expires', content: '0' },
    { 'http-equiv': 'Refresh', content: '0' },
    { 'http-equiv': 'Pragma-directive', content: 'no-cache' }
];

// Append meta tags to the head element
var head = document.head || document.getElementsByTagName('head')[0];
metaTags.forEach(function(meta) {
    var metaTag = document.createElement('meta');
    for (var key in meta) {
        if (meta.hasOwnProperty(key)) {
            metaTag.setAttribute(key, meta[key]);
        }
    }
    head.appendChild(metaTag);
});
