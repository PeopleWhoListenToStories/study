const { config } = require("vuepress-theme-hope");
const navBarConfig = require("./config/navbar");
const sideBarConfig = require("./config/sideBar");

module.exports = config({
  title: "Blogs",
  description: "工具用得好 下班回家早",

  dest: "docs",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  locales: {
    "/": { lang: "zh-CN" },
    "/en/": {
      title: "Theme Demo",
      description: "vuepress-theme-hope 的 demo",
    },
  },

  themeConfig: {
    logo: "/logo.png",
    hostname: "https://peoplewholistentostories.github.io/study/",
    author: "Lei Xu",
    repo: "https://github.com/PeopleWhoListenToStories/study",
    repoDisplay: false,
    docsDir: "src",
    nav: navBarConfig.zh,
    sidebar: sideBarConfig.zh,
    shouldPrefetch: (filename) => !filename.includes("page-"),
    sidebar: {
      "/": [
        "",
        "home",
        "slides",
        "layout",
        {
          title: "Guide",
          icon: "creative",
          prefix: "guide/",
          children: ["", "page", "markdown", "disable", "encrypt"],
        },
      ],
    },

    locales: {
      /** 英文设置 */
      "/en/": {
        nav: navBarConfig.en,
        sidebar: sideBarConfig.en,
      },
    },

    blog: {
      intro: "/intro/",
      sidebarDisplay: "mobile",
      links: {
        Github: "https://github.com/PeopleWhoListenToStories",
        Gmail: "mailto:leisuyaemail@gmail.com",
      },
    },

    footer: {
      display: true,
      content: "Copyright © 2021-present",
    },

    // comment: {
    //   type: "waline",
    //   serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

    copyright: {
      status: "global",
    },

    algolia: {
      apiKey: "",
      indexName: "",
    },

    algoliaType: "full",

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      align: true,
      demo: true,
      flowchart: true,
      footnote: true,
      presentation: true,
      sub: true,
      sup: true,
      tex: true,
      // enableAll: true,
      // presentation: {
      //   plugins: [
      //     "highlight",
      //     "math",
      //     "search",
      //     "notes",
      //     "zoom",
      //     "anything",
      //     "audio",
      //     "chalkboard",
      //   ],
      // },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
