if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,f,d)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(f.map((a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}}))).then((e=>{const a=d(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-282d8a9c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.4954a283.css",revision:"281151ade0cfe17358a0e055529c29b6"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/45.03213488.js",revision:"7328f6372aea966ca28758a1d81dc0dd"},{url:"assets/js/46.aaf62129.js",revision:"ce235ac3403bfdfc7e43479da183e13c"},{url:"assets/js/47.d1ed0c68.js",revision:"8cbb8bf920d7357d25f8183a0e22e950"},{url:"assets/js/48.0401e2a3.js",revision:"c9a2d4b3f2428004a2c72eaa64b40961"},{url:"assets/js/49.1fd3964a.js",revision:"e87d8d8051dc3013fd9fe05b08e22c04"},{url:"assets/js/app.a4b3ded6.js",revision:"05dcfc06244d1af35d9c096d26ec8f81"},{url:"assets/js/layout-Blog.4e1943f1.js",revision:"2c0b2356cb11589ca9d458330fbf23e1"},{url:"assets/js/layout-Layout.196029ba.js",revision:"3b9a261c5e8f14ea432254ee34c6359b"},{url:"assets/js/layout-NotFound.150d3d5e.js",revision:"4914eeb3112d99b7ef95043dfe17427e"},{url:"assets/js/layout-Slide.833eb45f.js",revision:"8e87fe1c371b41cac5f377735504af27"},{url:"assets/js/page-Blogs.5a4faae4.js",revision:"8054bb8126903e830021f0ef9c31c52d"},{url:"assets/js/page-Componentdisabled.aa4ad459.js",revision:"e08e7839423c4a7c1718f1329640ea0e"},{url:"assets/js/page-CustomLayout.29307460.js",revision:"a058a8f38810106151bf93acb0814e17"},{url:"assets/js/page-Emoji列表.2bb4ed2d.js",revision:"7f6f73685f5a990abfccbadebd49dc73"},{url:"assets/js/page-Encryptionarticle.83de658a.js",revision:"a6b614ca3290f2ba00793cd84da20cf4"},{url:"assets/js/page-Guides.1d1595f3.js",revision:"ab8fdcc3781bb7d41b86bfd7073c3765"},{url:"assets/js/page-IntroPage.72e7686f.js",revision:"91aab7e373b8b6be56192ac48274283b"},{url:"assets/js/page-Markdown.9f4b2b44.js",revision:"28600c709cb234d7f43587d4026cb6c2"},{url:"assets/js/page-MarkdownEnhance.dec1ae38.js",revision:"5e60bd3cc533e3e01659b1ee3b239503"},{url:"assets/js/page-Markdown介绍.7d91a73c.js",revision:"24ecbfdebcca860444cc509f8da5413d"},{url:"assets/js/page-Markdown块元素.ddc8fb17.js",revision:"f7040384fbdbb948d36b6d9cf0708774"},{url:"assets/js/page-Markdown增强.0436ee2b.js",revision:"5c87a44c9fc60c4691804ecb9aa297c4"},{url:"assets/js/page-Markdown扩展.ecb209db.js",revision:"5e3f0109bfc7afe3f63ade912c9ae1ca"},{url:"assets/js/page-Markdown示例.c9e19438.js",revision:"eb13e1786654995bc8d992254ee71903"},{url:"assets/js/page-Markdown行内元素.ccaa221b.js",revision:"904a02b46d78223d0c748898d4f9118d"},{url:"assets/js/page-pageconfig.68ade317.js",revision:"577927b710c187485b7e762b3dd098a7"},{url:"assets/js/page-Projecthome.8e067ca6.js",revision:"3938bf47d4aaff5d22123353930a8248"},{url:"assets/js/page-Slidepage.022580e6.js",revision:"694daabe008cf32a330361cae11ccc55"},{url:"assets/js/page-主要功能与配置演示.ffa5bbd3.js",revision:"3f3e4b5b7fefcb41c595464c1d8cda05"},{url:"assets/js/page-人物.d56b113f.js",revision:"d4e388ccb357d4e63a7a6dbaa2c6b1ca"},{url:"assets/js/page-代码相关.270281d6.js",revision:"49d7cae4741ff346033dd0c9f2306a9e"},{url:"assets/js/page-博客主页.6955975d.js",revision:"f9db25f726441a5f66a7c75b77cb76c2"},{url:"assets/js/page-哎.9d7796ff.js",revision:"484be295a0c267d9fbecca61560278c8"},{url:"assets/js/page-地点.4f14fac6.js",revision:"e719a59179d27d8d3bc79a1d3ae49753"},{url:"assets/js/page-密码加密的文章.721f7adc.js",revision:"c92251100929b27fec47fcee1ea1e1c5"},{url:"assets/js/page-对象.b83265ab.js",revision:"accecde5bc07220e3efbe8e05f83dc1d"},{url:"assets/js/page-幻灯片页.ac824dd2.js",revision:"331e2ffcdc0808d81ec7f09145b9bd83"},{url:"assets/js/page-符号.14ce3266.js",revision:"d842bccce233bb95ff410e1def0c1a9f"},{url:"assets/js/page-组件禁用.de6ebee5.js",revision:"7383f198e859f4398397726dbcb10672"},{url:"assets/js/page-自定义布局.1e16f52e.js",revision:"6c2923fb35a4ab61e3cab8a0b0efc682"},{url:"assets/js/page-自然.4548431b.js",revision:"37fe23b0efac4b8c9cd2b68de528714a"},{url:"assets/js/page-页面配置.f57e0314.js",revision:"ee76ea0ac44db2967b6dfad1ece63ac3"},{url:"assets/js/page-项目主页.cace064a.js",revision:"de77d48986a39609f6224618b7fd04ec"},{url:"assets/js/vendors~flowchart.5fb833c7.js",revision:"9dc10f7290cf4cb1983ec9db255ca6e6"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.8f32f90a.js",revision:"e640b9fa7b309d244e91e32c16217599"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.1bdff5eb.js",revision:"47947fc735383142befe357877448757"},{url:"assets/js/vendors~layout-Layout.5b05d257.js",revision:"f597320e0a1b395cea931664e60fb495"},{url:"assets/js/vendors~photo-swipe.690203eb.js",revision:"2eadd19aa8a1cf1c6a852f3608e1f3e9"},{url:"assets/js/vendors~reveal.d228d9b4.js",revision:"3f54ded3fd683dc778b1509cc8d6e710"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.10824af7.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/fonts/KaTeX_AMS-Regular.56573229.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/fonts/KaTeX_AMS-Regular.66c67820.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.497bf407.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.e6fb499f.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/fonts/KaTeX_Fraktur-Bold.40934fc0.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/fonts/KaTeX_Fraktur-Bold.796f3797.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/fonts/KaTeX_Fraktur-Bold.b9d7c449.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/fonts/KaTeX_Fraktur-Regular.97a699d8.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/fonts/KaTeX_Fraktur-Regular.e435cda5.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/fonts/KaTeX_Fraktur-Regular.f9e6a99f.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/fonts/KaTeX_Main-Bold.4cdba646.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/fonts/KaTeX_Main-Bold.8e431f7e.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/fonts/KaTeX_Main-Bold.a9382e25.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/fonts/KaTeX_Main-BoldItalic.52fb39b0.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/fonts/KaTeX_Main-BoldItalic.5f875f98.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/fonts/KaTeX_Main-BoldItalic.d8737343.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/fonts/KaTeX_Main-Italic.39349e0a.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/fonts/KaTeX_Main-Italic.65297062.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/fonts/KaTeX_Main-Italic.8ffd28f6.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/fonts/KaTeX_Main-Regular.818582da.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/fonts/KaTeX_Main-Regular.f1cdb692.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/fonts/KaTeX_Main-Regular.f8a7f19f.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/fonts/KaTeX_Math-BoldItalic.1320454d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.48155e43.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.6589c4f1.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/fonts/KaTeX_Math-Italic.d8b7a801.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/fonts/KaTeX_Math-Italic.ed7aea12.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/fonts/KaTeX_Math-Italic.fe5ed587.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/fonts/KaTeX_SansSerif-Bold.0e897d27.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/fonts/KaTeX_SansSerif-Bold.ad546b47.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f2ac7312.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e934cbc8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/fonts/KaTeX_SansSerif-Italic.ef725de5.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/fonts/KaTeX_SansSerif-Italic.f60b4a34.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/fonts/KaTeX_SansSerif-Regular.1ac3ed6e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/fonts/KaTeX_SansSerif-Regular.3243452e.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5f8637ee.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/fonts/KaTeX_Script-Regular.a189c37d.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/fonts/KaTeX_Script-Regular.a82fa2a7.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/fonts/KaTeX_Size1-Regular.0d8d9204.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/fonts/KaTeX_Size2-Regular.1fdda0e5.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/fonts/KaTeX_Size4-Regular.27a23ee6.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/fonts/KaTeX_Typewriter-Regular.0e046058.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6bf42875.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b8b8393d.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"404.html",revision:"973ec2246414056af5b1a590cad4e5b8"},{url:"article/index.html",revision:"cb953c1fad4ea697d8385d8ead78ef41"},{url:"category/Guide/index.html",revision:"88ded4bd36d9fbac5cc4fe731fc24d9a"},{url:"category/index.html",revision:"6efe5879ce115bbf447f3bfcb54f995f"},{url:"category/Markdown/index.html",revision:"f8f3a02572b9b2efb3daf0ed05b97323"},{url:"category/Markdown/page/2/index.html",revision:"f4115dfb528d6284c05d5ba0ae2136d0"},{url:"category/使用指南/index.html",revision:"aa14ea955d962014311c5f1646d16425"},{url:"code/index.html",revision:"28a80335dc13a3c0772651c949f62e52"},{url:"code/language/markdown/block/index.html",revision:"dc7cb0caf57dfcca72cc713a218fe0a3"},{url:"code/language/markdown/demo/index.html",revision:"96ce090d57d66a84605e129c5b6a1bee"},{url:"code/language/markdown/emoji/index.html",revision:"ad4c10b15985f850fe70769554a7afb9"},{url:"code/language/markdown/emoji/nature/index.html",revision:"d7f223d8de3395ccceb80a7fa7006881"},{url:"code/language/markdown/emoji/object/index.html",revision:"05b095a67d3b8fa6fa3899e0e86ee0b7"},{url:"code/language/markdown/emoji/people/index.html",revision:"2c6ba4df695431c42abed7759b1cab4d"},{url:"code/language/markdown/emoji/place/index.html",revision:"dc993b992850f33d19889a47ffc669bf"},{url:"code/language/markdown/emoji/symbol/index.html",revision:"660d9f8bf3db40f12e37fbe50d4cbde0"},{url:"code/language/markdown/extend/index.html",revision:"5ee2aff72e68adc75caaafb9de305876"},{url:"code/language/markdown/index.html",revision:"109086c089dd04ae0633de860f2fe3f1"},{url:"code/language/markdown/inline/index.html",revision:"56932da50783c5a410aeebf020fd4e5b"},{url:"code/language/markdown/intro/index.html",revision:"f6148233e730595aad20783a528b8d5a"},{url:"en/index.html",revision:"188a41e34db3c87379b36af822a01a30"},{url:"encrypt/index.html",revision:"f555dbe3b5823430b00f6dccab2e5a4f"},{url:"guide/disable/index.html",revision:"ebe769826df34bfbbcaa43456f57ce8c"},{url:"guide/encrypt/index.html",revision:"644abc5f9fb5bf1fdc4064ebfc96d98b"},{url:"guide/index.html",revision:"71388d480f1695141a6edaa6663844ad"},{url:"guide/markdown/index.html",revision:"73ab62f64da21a93491fec94f895c0f4"},{url:"guide/page/index.html",revision:"6dcd830b6566199d7928aca638dd146e"},{url:"home/index.html",revision:"09ceb3bce61933083a295339aa8d63b1"},{url:"index.html",revision:"f33eae2148874237f980118876156a84"},{url:"intro/index.html",revision:"17efcc4c570534123b391bb0884ad7ac"},{url:"layout/index.html",revision:"829f341e912f3cce1dfbf3e602032f90"},{url:"slide/index.html",revision:"108b947a4638a6a2e439dd811458a06e"},{url:"slides/index.html",revision:"a5508ae8652a4fa6f1045400c4651502"},{url:"star/index.html",revision:"d2a296c1ce1ea8f59e9a137f61fee60a"},{url:"tag/Emoji/index.html",revision:"29738fbca9b1b7f5bf6d3a4c730367a2"},{url:"tag/encryption/index.html",revision:"9e95ec84f8e7d817693825158f3a0c85"},{url:"tag/Guide/index.html",revision:"8220f0973108b7f1a4fef84a0b214903"},{url:"tag/index.html",revision:"93bb8272d3650d6be02905aead36b3dd"},{url:"tag/markdown/index.html",revision:"b23bbf2a757cc60a47a6e220846f7c01"},{url:"tag/Markdown/index.html",revision:"6463de1bca691ea257e0b72bd083f98f"},{url:"tag/Markdown/page/2/index.html",revision:"4b11852a32df1a3d7696fdf0b85fcc83"},{url:"tag/Page config/index.html",revision:"309a6e427e49345624a68348d804f6e6"},{url:"tag/使用指南/index.html",revision:"e815e340ff90450ce461365130f00f86"},{url:"tag/文章加密/index.html",revision:"ea1595de3940386ca410fa6ef39fccb8"},{url:"tag/页面配置/index.html",revision:"d67d767eff74fc4a51034c8f2f27731d"},{url:"timeline/index.html",revision:"a75becad3aa80f57250e2676f10d04a8"},{url:"zh/guide/disable/index.html",revision:"786b2f6d174077a29a3b2579df0ed8bd"},{url:"zh/guide/encrypt/index.html",revision:"e0a9bf3695f6d0c628eb5eaf290295fc"},{url:"zh/guide/index.html",revision:"59f8096e0796caec8aaa391f41829de5"},{url:"zh/guide/markdown/index.html",revision:"cc1af98c2defa9718b64163b3482cb5b"},{url:"zh/guide/page/index.html",revision:"ac158f78803cf65f3c995dc589bd2b0d"},{url:"zh/home/index.html",revision:"413e80f0608b5540ed3680601dedf3f4"},{url:"zh/index.html",revision:"1e0248dcf7de8100e761842845e7a80b"},{url:"zh/layout/index.html",revision:"4bb8b8f34f75f4e7e445fcd8ec4b2587"},{url:"zh/slides/index.html",revision:"cda5e0ad88a5e9c7756e40c3af68a06a"},{url:"assets/icon/apple-icon-152.png",revision:"d4306bea1a73a50cce7651ddbc2f11f7"},{url:"assets/icon/chrome-192.png",revision:"d4306bea1a73a50cce7651ddbc2f11f7"},{url:"assets/icon/chrome-512.png",revision:"d4306bea1a73a50cce7651ddbc2f11f7"},{url:"assets/icon/chrome-mask-192.png",revision:"d4306bea1a73a50cce7651ddbc2f11f7"},{url:"assets/icon/chrome-mask-512.png",revision:"d4306bea1a73a50cce7651ddbc2f11f7"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"d4306bea1a73a50cce7651ddbc2f11f7"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"d4306bea1a73a50cce7651ddbc2f11f7"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
