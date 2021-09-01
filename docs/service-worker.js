/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "636a4529b6dca0847061d93eb21efa08"
  },
  {
    "url": "assets/css/0.styles.f7f08380.css",
    "revision": "4be4cd71126d9abe5cca405077c24d8d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9d6838d4.js",
    "revision": "3aeb2c1f7a2b59a1a5749b4249add0e9"
  },
  {
    "url": "assets/js/11.8699c7d3.js",
    "revision": "85d302c098ad912a056ef600c9b802c1"
  },
  {
    "url": "assets/js/12.3c255338.js",
    "revision": "0f84b47bad22b595dfd8b1fbfcbf69ed"
  },
  {
    "url": "assets/js/13.6fd1ed5f.js",
    "revision": "3e07b5be6e13ef3bc585af42f4078cf0"
  },
  {
    "url": "assets/js/14.9e29da19.js",
    "revision": "8d34019fd482926a7254f9d9ede932b5"
  },
  {
    "url": "assets/js/15.7ffea734.js",
    "revision": "7fd4058d6e720a3d310cbb4a8feee92c"
  },
  {
    "url": "assets/js/16.2e324bd6.js",
    "revision": "fec7df9c5c8d7eb3ea5bb10c080b6a70"
  },
  {
    "url": "assets/js/17.837436de.js",
    "revision": "f6ad91388636153ef1add4530a91c17c"
  },
  {
    "url": "assets/js/18.0d3bc762.js",
    "revision": "69d798343960da2cfd8ee99d20bde377"
  },
  {
    "url": "assets/js/19.cfc8225b.js",
    "revision": "1eff70fae7bd86d29bd94dab01d50802"
  },
  {
    "url": "assets/js/2.e145edc5.js",
    "revision": "2014c261c578f3061f13f24cf3464593"
  },
  {
    "url": "assets/js/20.c9d36a44.js",
    "revision": "63aeecc501483f59da65758cfc737358"
  },
  {
    "url": "assets/js/21.43f4cf10.js",
    "revision": "6a6068e02c216f9112a81e3c4e96e322"
  },
  {
    "url": "assets/js/22.f2447709.js",
    "revision": "d100a724a8f6a0b2dfce9ab8609381ab"
  },
  {
    "url": "assets/js/23.a9cbb3d8.js",
    "revision": "bfdc2a01be675e2f00775bae2777e579"
  },
  {
    "url": "assets/js/24.fa4f5bc5.js",
    "revision": "b7ae0bdf206a58726bcca66d9bfb82b0"
  },
  {
    "url": "assets/js/25.bf8e2034.js",
    "revision": "fb8806b8f96b1f85d59f462bd526d453"
  },
  {
    "url": "assets/js/26.3f76cfa6.js",
    "revision": "b61c7f0a192df9dba8aa0ae525eaa844"
  },
  {
    "url": "assets/js/27.b71db2b2.js",
    "revision": "65963d77d445a0af316085bb6d10d801"
  },
  {
    "url": "assets/js/28.f6ceec92.js",
    "revision": "87771bd634b2d5bb70faa525bc52b560"
  },
  {
    "url": "assets/js/29.610a6ccb.js",
    "revision": "cdf78d23f7cd6a7f7bbaa54ce694af08"
  },
  {
    "url": "assets/js/3.5ebbe880.js",
    "revision": "9431caf10cf076db5621bd151caee714"
  },
  {
    "url": "assets/js/30.92d53838.js",
    "revision": "ba22c5eb16e47cd34f5635d6b2209434"
  },
  {
    "url": "assets/js/31.de464985.js",
    "revision": "9c59c21c57617bb6117cc0d83a30f25b"
  },
  {
    "url": "assets/js/32.cb76b2cc.js",
    "revision": "f1729741a7572c1cc0e2398de5102f7f"
  },
  {
    "url": "assets/js/33.5e0df8e3.js",
    "revision": "8fce20c8de4a24887cf1716a5bed5f4f"
  },
  {
    "url": "assets/js/34.214314c1.js",
    "revision": "2ceb9e17863f5556a6584472adcc138d"
  },
  {
    "url": "assets/js/35.be975980.js",
    "revision": "5f3003d3649e19085bc462176089a3d6"
  },
  {
    "url": "assets/js/36.deed55f8.js",
    "revision": "0f49b1c859a59519181126e0e0e4b230"
  },
  {
    "url": "assets/js/37.fe562213.js",
    "revision": "6bf4b568cbaab7e4da700cc7464778ea"
  },
  {
    "url": "assets/js/38.fc8c444a.js",
    "revision": "2f8bea5ed7b6e370d8b520a579d50419"
  },
  {
    "url": "assets/js/39.71ca8154.js",
    "revision": "8fd95679a9e9e5e7cc118577c5c4fc10"
  },
  {
    "url": "assets/js/4.7a79df2b.js",
    "revision": "3acf17208d34aec99deef93cb4a6e735"
  },
  {
    "url": "assets/js/40.cafd44ab.js",
    "revision": "c14c2d3101ccd8d109ee9dcd5566c0ba"
  },
  {
    "url": "assets/js/41.29728bfd.js",
    "revision": "6549986e3ae70325ea21a1ce1a55ef92"
  },
  {
    "url": "assets/js/42.827eb996.js",
    "revision": "83e2e318d73872418fbe2d13ff7d5cb1"
  },
  {
    "url": "assets/js/43.654c3dc8.js",
    "revision": "800bb80abdbabe11cebe2efe25d5e7c1"
  },
  {
    "url": "assets/js/5.0ec598c8.js",
    "revision": "c002b5e90667ea1ccf69c6c8465b4da1"
  },
  {
    "url": "assets/js/6.7e9edb79.js",
    "revision": "b32fcb457d5509af8c14fb46ed8d33d0"
  },
  {
    "url": "assets/js/7.51eb931c.js",
    "revision": "c20ed2ed3db70e343aed87dd02118817"
  },
  {
    "url": "assets/js/8.cc1339da.js",
    "revision": "5b84ca551ed5f934ac35b3d5a174c9e8"
  },
  {
    "url": "assets/js/9.bd2368fe.js",
    "revision": "f1b53b7bfe7ff1658c6a0369ff0b908d"
  },
  {
    "url": "assets/js/app.36b95710.js",
    "revision": "62dde340bbf76f41e2d5b028e1dcb3d4"
  },
  {
    "url": "assets/js/vendors~docsearch.0c1f19aa.js",
    "revision": "4ba97f65cf360335fd76d705c0c9780d"
  },
  {
    "url": "bar/image.png",
    "revision": "6d8a077777224254aaeccd693d92f947"
  },
  {
    "url": "config/index.html",
    "revision": "69701f0d3c99fd834ac490bde6723043"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "d42d7536d7c34b17764da336ff6e5f6c"
  },
  {
    "url": "guide/assets.html",
    "revision": "26a13c497eb714259f3550acfc74725b"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "243336b20591c35ffc26533c7db98242"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "4fa4b1fd5132b4fd7d3add8ee1d655dd"
  },
  {
    "url": "guide/deploy.html",
    "revision": "8386034ca4990af83f9067bbeb68c35d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "253fa706c21ff375131bae3cd2f503f9"
  },
  {
    "url": "guide/i18n.html",
    "revision": "0f0ad9083f419a6d7f8976b203cc6054"
  },
  {
    "url": "guide/index.html",
    "revision": "97fcc231fa110d3145bd3ceae3f975ab"
  },
  {
    "url": "guide/markdown.html",
    "revision": "3627a3270c7c4a25eabefe59102d4355"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "e213a7400645df34dd072ec5f54112c8"
  },
  {
    "url": "index.html",
    "revision": "d068e12ea95aa4e4a60c231dfaf21e89"
  },
  {
    "url": "zh/algorithm/Charpter4.html",
    "revision": "51403b3e0bf96718021479180dbd4f9f"
  },
  {
    "url": "zh/algorithm/Charpter5.html",
    "revision": "7ed986ab7f2e74096da7ac969c231d4a"
  },
  {
    "url": "zh/algorithm/Charpter6.html",
    "revision": "8d7864ab1686838d5b736f21fb40cb65"
  },
  {
    "url": "zh/algorithm/index.html",
    "revision": "11b2860fe5e87a52fba3259718c77fc0"
  },
  {
    "url": "zh/config/index.html",
    "revision": "b1494969dc18450b91ba1908cd34db56"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "57e2ab9a2249e24d4b0464deeb949b70"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "0db2c7665843a6a51ca1efa1b0196433"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "c5f8b111be96b446e33de960bc2a6ed8"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "beec6148f4da31a6d1a5a95d555f2a85"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "a7e057470be34be69fb7bdbd777787bf"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "001acf43f2703f90718cab312da4d24d"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "0ea74111cd64edb9325a788803a7c97d"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "9e3387fbf3aabb7ae9ae39c25c22d8b3"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "70a731f0d1bd9dcc89b6ccb405324c00"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "bdbc1b07c21cf804e3d00cdd9ab00116"
  },
  {
    "url": "zh/index.html",
    "revision": "07edd4d2738789fcd143596b05e5d614"
  },
  {
    "url": "zh/nested/index.html",
    "revision": "883e7988abd3d17612e0f17e6e844136"
  },
  {
    "url": "zh/standard/Cache.html",
    "revision": "b92dd462ac976af4d56fdad7ad417afb"
  },
  {
    "url": "zh/standard/Compatibility.html",
    "revision": "1e9c25336a460d65cf978bd0216b2bcb"
  },
  {
    "url": "zh/standard/Cooperation.html",
    "revision": "97fba658071a2d81c93822cbe9c685a2"
  },
  {
    "url": "zh/standard/Hooks.html",
    "revision": "8ff32bbf3ccdc191633cd82e0e248c64"
  },
  {
    "url": "zh/standard/Improve.html",
    "revision": "d542bc3467647335d476781accbf05ac"
  },
  {
    "url": "zh/standard/Project.html",
    "revision": "692416c1ecb55fa0d29809728d19a4ec"
  },
  {
    "url": "zh/standard/Pwa.html",
    "revision": "e50575ee0ec7708e39b3432ffb4ab26c"
  },
  {
    "url": "zh/standard/Security.html",
    "revision": "4c1d7cda34dd8f0dbd47ce75ad7f88d9"
  },
  {
    "url": "zh/standard/Spa.html",
    "revision": "5a07809a1e4d006c1c3b973ce315597d"
  },
  {
    "url": "zh/standard/Standard.html",
    "revision": "73e98dc920ef40008a523b43dea23bc0"
  },
  {
    "url": "zh/standard/Start.html",
    "revision": "265b2714530b5b50dad5fe94a390f62e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
