if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,d,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-24b366c7"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/03/28/反转链表/index.html",revision:"51ced54fa6eebb6b8d99556929682097"},{url:"2021/03/28/蒙特卡洛方法计算圆周率/index.html",revision:"38819ffd941dd54a656bbff294165dc9"},{url:"2021/03/28/证券基金公司招聘页/index.html",revision:"7ead0f59475c9d690b2c81b0ae029de3"},{url:"2021/03/28/C-头文件库/index.html",revision:"b2b2323b20adfbb5fd638b5426459cf5"},{url:"2021/03/28/JSDelivr 加速 Github、博客文件/index.html",revision:"fb02d77c8c3b65c820372c2e31403bf4"},{url:"2021/03/28/LightGBM两种使用方式/index.html",revision:"a7a62711e23639e489f1f9ff16f539a6"},{url:"2021/03/28/markdown学习教程/index.html",revision:"ab390bdcb3112285eeb7ca9be7c03b7c"},{url:"2021/03/30/jsdelivr加速博客/index.html",revision:"de428860b30a746b2d14f486f77058aa"},{url:"archives/2021/03/index.html",revision:"fed9b84785dec04021c20037ee09ea3c"},{url:"archives/2021/index.html",revision:"54a22d1051188cbb23d947a6aadd4982"},{url:"archives/index.html",revision:"e9b06b41638ad22b52ace5d4c6e8ed0e"},{url:"categories/博客搭建/index.html",revision:"95d5565cd9f01e27af1e611af2e6a0f6"},{url:"categories/工作/index.html",revision:"ab69da07bf6cd08f21e2144533303538"},{url:"categories/学习/index.html",revision:"11e39b9d12f4af84b65a1fc0dddca51b"},{url:"categories/index.html",revision:"ec81a24fd19ccc8e95e4b0f1fc54d521"},{url:"css/index.css",revision:"7dfa60255234d245330fa979deb23a5e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"index.html",revision:"1618e83e8850b9b28e183783856cc929"},{url:"js/main.js",revision:"5641b1a6b817df7d81f465c27ed538d9"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"tags/工作/index.html",revision:"0a12724314107ae15eac2dc60638897f"},{url:"tags/机器学习/index.html",revision:"1a77a48f2a54b21f2f18b8bf4169189a"},{url:"tags/算法/index.html",revision:"a068bef6bcae8454bce7f0aa6945968e"},{url:"tags/C/index.html",revision:"c5a44069ef07d8c0370baec04148cb34"},{url:"tags/HEXO/index.html",revision:"4375744697b4e1c4bf9d83b044c7e481"},{url:"tags/index.html",revision:"df039c4791157798d54216cbbde13080"},{url:"tags/Jsdelivr/index.html",revision:"e116a67961a54fec65f4fc9e3e361be4"},{url:"tags/markdown/index.html",revision:"96c767ca5368f0d33c184caa11824963"}],{})}));
//# sourceMappingURL=service-worker.js.map
