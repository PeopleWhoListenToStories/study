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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "45271a7bf8e88a8f6b7196500d0159aa"
  },
  {
    "url": "assets/css/1.styles.0fe269c9.css",
    "revision": "6870d057739d792ee6d996a8644726d4"
  },
  {
    "url": "assets/css/2.styles.d0460abf.css",
    "revision": "27c433152cbe829319ee7413419f35a3"
  },
  {
    "url": "assets/css/3.styles.2f76a459.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/4.styles.5139086f.css",
    "revision": "0b206cd3449d5d7b849d06494f4910f8"
  },
  {
    "url": "assets/css/5.styles.b4b507c8.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/6.styles.b8a7204b.css",
    "revision": "bcd98c4c96942cac836cc250bb115c4f"
  },
  {
    "url": "assets/css/7.styles.56a25df9.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.6d64267e.css",
    "revision": "ad84749f732eff64a3b5b547b8ca91de"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a65dc34d.js",
    "revision": "60f52ede1d02130377d00224c17f19c7"
  },
  {
    "url": "assets/js/11.72a867fd.js",
    "revision": "e7c2e01c0fe72a3baafa12b8725c9e4e"
  },
  {
    "url": "assets/js/12.68b0a337.js",
    "revision": "a75e9d343226bd8d7ed7473087034663"
  },
  {
    "url": "assets/js/13.48b511e3.js",
    "revision": "501a563ac9cff97a8498753501bf20b1"
  },
  {
    "url": "assets/js/14.50fb4192.js",
    "revision": "0df762e050a82079044a20f8880a93e9"
  },
  {
    "url": "assets/js/15.16976e3f.js",
    "revision": "67412325a3271aefef5307d56525f9aa"
  },
  {
    "url": "assets/js/16.6983dae5.js",
    "revision": "419269eb6b191549a0047fda9b2716fb"
  },
  {
    "url": "assets/js/17.9797582d.js",
    "revision": "2c14b416af25226202727d6f04c8ee4f"
  },
  {
    "url": "assets/js/18.43307358.js",
    "revision": "a6786c22a91e376baf2962869bc8f193"
  },
  {
    "url": "assets/js/19.65753b18.js",
    "revision": "16dfbd3616afb74fddb7166263d3e809"
  },
  {
    "url": "assets/js/2.d0460abf.js",
    "revision": "405ca9b73931107b944f2e2939e935ac"
  },
  {
    "url": "assets/js/20.f9c55197.js",
    "revision": "efe2f8d80c2e123d4a10a7de0b755d32"
  },
  {
    "url": "assets/js/21.9ae76986.js",
    "revision": "19aebd92a319c522fbe9037ebcd6fb14"
  },
  {
    "url": "assets/js/22.48025607.js",
    "revision": "2a8cb112d2194f24ac9966aaca166a8f"
  },
  {
    "url": "assets/js/23.38d4e481.js",
    "revision": "403495993b64ec9ce975881512a3bfab"
  },
  {
    "url": "assets/js/24.a1c82064.js",
    "revision": "cdeb6f5a832d673e6fa9182fc3f2ca04"
  },
  {
    "url": "assets/js/25.d14a836e.js",
    "revision": "443fb93592176db9d4d4013ae6574d87"
  },
  {
    "url": "assets/js/26.5b4a18c5.js",
    "revision": "229404b9a28748ec4c01e0ab69721057"
  },
  {
    "url": "assets/js/27.5b04a2a6.js",
    "revision": "5ceed8470797429cf136fc05bc409708"
  },
  {
    "url": "assets/js/28.702bdb4a.js",
    "revision": "e9000bc14bf12a592d193af608c97321"
  },
  {
    "url": "assets/js/29.78fadddb.js",
    "revision": "276471a896168af6d1657d1b93834f58"
  },
  {
    "url": "assets/js/3.2f76a459.js",
    "revision": "eb75e9540a9b34153cbbe85aa788426d"
  },
  {
    "url": "assets/js/30.285dece4.js",
    "revision": "6c91bcc15e6225124407d3beea124c56"
  },
  {
    "url": "assets/js/31.f4da52c9.js",
    "revision": "5f7fea448ffcf4ab253e54f800cc5e1d"
  },
  {
    "url": "assets/js/32.3f795fc5.js",
    "revision": "1c8c4c81db4959445251f11d223a74b1"
  },
  {
    "url": "assets/js/33.ae5b3d45.js",
    "revision": "5bfc8729411aac8316f5cd5cfc17361f"
  },
  {
    "url": "assets/js/34.674ba92e.js",
    "revision": "90e9382526e8972aaee7673f85e27053"
  },
  {
    "url": "assets/js/35.61dca2b2.js",
    "revision": "bf1dac43e0b071781dea1583bff4a738"
  },
  {
    "url": "assets/js/36.feebdefb.js",
    "revision": "0a46e87222f9b970bacbebf80932af9d"
  },
  {
    "url": "assets/js/37.2fa42697.js",
    "revision": "344b8b48b9561203604fac08eb2cbe6a"
  },
  {
    "url": "assets/js/38.9c5c7947.js",
    "revision": "38646c34834c6b1bccf6e2208a3668ad"
  },
  {
    "url": "assets/js/39.99425328.js",
    "revision": "bdb593513eb5fa78b28c9b9d0b60f1f0"
  },
  {
    "url": "assets/js/4.5139086f.js",
    "revision": "1f6c2e0c872f139fc88e17b1547eecfb"
  },
  {
    "url": "assets/js/40.88681663.js",
    "revision": "7a4d3ed207caa3227046a081a931ff9c"
  },
  {
    "url": "assets/js/41.a0ba9118.js",
    "revision": "6387ee3c6db980e3de042853fb7ced78"
  },
  {
    "url": "assets/js/42.97149ab9.js",
    "revision": "27fdec56f3a25228a96e754f96691899"
  },
  {
    "url": "assets/js/43.8b6866e9.js",
    "revision": "19b509e25647f8aecb3bcf18eeddcf59"
  },
  {
    "url": "assets/js/5.b4b507c8.js",
    "revision": "83abd6f260b5dca4d8654430425f3eec"
  },
  {
    "url": "assets/js/6.b8a7204b.js",
    "revision": "a8c628cd6ef3d766861037c7bec04e74"
  },
  {
    "url": "assets/js/7.56a25df9.js",
    "revision": "5f93280f15fff023320974d923093ab1"
  },
  {
    "url": "assets/js/8.05bf0677.js",
    "revision": "ec7f4784e231e3812cfd642be940a6ae"
  },
  {
    "url": "assets/js/9.ac4f528b.js",
    "revision": "1b493ea880274e64761ff96bac1e1652"
  },
  {
    "url": "assets/js/app.6d64267e.js",
    "revision": "cb5ed22566866b5d9292f07cf9baee15"
  },
  {
    "url": "assets/js/vendors~docsearch.0fe269c9.js",
    "revision": "6b030ec6d2cdb4ca43512de9a077dce3"
  },
  {
    "url": "bar/image.png",
    "revision": "6d8a077777224254aaeccd693d92f947"
  },
  {
    "url": "config/index.html",
    "revision": "22bd24e6c0bf0b484dda62a6409362ce"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "3f3f421cc200b23bb0d03cf99ff8ce9d"
  },
  {
    "url": "guide/assets.html",
    "revision": "e25ef8b016778cb83c7d8948b8f05bc3"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "a026d0e19f83c4179b521aa0513d50ab"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "7b79e224e4691388e2431b7c627e515f"
  },
  {
    "url": "guide/deploy.html",
    "revision": "d19976e3927a4d28bca2c627ad3e9841"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "0843d0bfba47d94151309c7b80ac3c82"
  },
  {
    "url": "guide/i18n.html",
    "revision": "4231ca023f6ac2177949ca93ca843a7d"
  },
  {
    "url": "guide/index.html",
    "revision": "650bcda55a99d3885c57aff2faca4b03"
  },
  {
    "url": "guide/markdown.html",
    "revision": "23d1dd1818c35a95f911a4a1762d9188"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "51e9bf2c3b652b5371f3291c8d8fbaed"
  },
  {
    "url": "index.html",
    "revision": "2f173602a8e10016e7751f59a65a35c3"
  },
  {
    "url": "zh/algorithm/Charpter4.html",
    "revision": "82e7d167dc5b5b28426030fbd41633bf"
  },
  {
    "url": "zh/algorithm/Charpter5.html",
    "revision": "a68bc6627fd47472b4ed2134183e8cdb"
  },
  {
    "url": "zh/algorithm/Charpter6.html",
    "revision": "1d0cd93fcb6de3f86a1545321926bace"
  },
  {
    "url": "zh/algorithm/index.html",
    "revision": "44a9362424041b03697aba5b6fb07e8a"
  },
  {
    "url": "zh/config/index.html",
    "revision": "841c0bdfce85274e19bd95c41a92066b"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "3c2ac9edb44aa24dd96735bfae84f07e"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "1f02ef028b5d11d4139b43b602d0113c"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "f36e2406f433801da974c1eafac61296"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "47d55e11229906cdb3f369b5b6a7d159"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "9028ad735f8797122af5992450164de0"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "dbd17de1aa2f0dbac1d29c1332bf1b1a"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "f148a5b7ce5e21d8c51adbceec40697a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "7123319d74a0a16e3436d8b58fc143ff"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "45ad0ef74e5fc18a3bbe8e95e8197cce"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "1fba33aa9c09450c3a9666b8b2ecc56d"
  },
  {
    "url": "zh/index.html",
    "revision": "e0e11f5b7a9453b7bc4abfa2bb339d9b"
  },
  {
    "url": "zh/nested/index.html",
    "revision": "97e867583e09995576495e306a89c56d"
  },
  {
    "url": "zh/standard/Cache.html",
    "revision": "a0b971b75b7bd7faf56efbe60f03e608"
  },
  {
    "url": "zh/standard/Compatibility.html",
    "revision": "c57099362d9f00fb7c9dd8755470d8bd"
  },
  {
    "url": "zh/standard/Cooperation.html",
    "revision": "7deee74fd0e929c6d15e8fafcfb0b7bb"
  },
  {
    "url": "zh/standard/Hooks.html",
    "revision": "db691431fc0567469b556b0466087612"
  },
  {
    "url": "zh/standard/Improve.html",
    "revision": "9c72f7afc807b9751e7825515cf3a742"
  },
  {
    "url": "zh/standard/Project.html",
    "revision": "3d664d94d59646e58886ccb32d8ce164"
  },
  {
    "url": "zh/standard/Pwa.html",
    "revision": "a9b2a3c4683539eb6f9ec0fb72bac2fb"
  },
  {
    "url": "zh/standard/Security.html",
    "revision": "7d0fe57cf5d8138018d9a8ae25e447ac"
  },
  {
    "url": "zh/standard/Spa.html",
    "revision": "067d29c4360baea7e96174004c6e8a35"
  },
  {
    "url": "zh/standard/Standard.html",
    "revision": "6f145acb00ac8f183e189898dc2ea5b5"
  },
  {
    "url": "zh/standard/Start.html",
    "revision": "13374ae0fd9e9369cad69e2092c557ba"
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
