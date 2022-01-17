const { config } = require('vuepress-theme-hope')
const navBarConfig = require('./config/navbar')
const sideBarConfig = require('./config/sideBar')

module.exports = config({
  title: '明天你好',
  description: '不忘初心 方得始终',

  base: '/study/', // 打包仓库的跟路径
  dest: 'study',
  comment: true,

  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js'
      }
    ],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }]
  ],

  locales: {
    '/': { lang: 'zh-CN' },
    '/en/': {
      title: 'Theme Demo',
      description: 'vuepress-theme-hope 的 demo'
    }
  },

  themeConfig: {
    logo: '/logo.png',
    hostname: 'https://peoplewholistentostories.github.io/study',
    author: 'Lei Xu',
    repo: 'https://github.com/PeopleWhoListenToStories/study',
    repoDisplay: false,
    docsDir: 'src',
    timeline: '明天你是否会想起',
    nav: navBarConfig.zh,
    sidebar: sideBarConfig.zh,
    shouldPrefetch: filename => !filename.includes('page-'),

    themeColor: {
      blue: "#2196f3",
      red: "#f26d6d",
      green: "#3eaf7c",
      orange: "#fb9b5f",
    },

    locales: {
      /** 英文设置 */
      '/en/': {
        nav: navBarConfig.en,
        sidebar: sideBarConfig.en
      }
    },

    blog: {
      intro: '/about/',
      sidebarDisplay: 'mobile',
      timeline:'明天你是否会想起',
      links: {
        Github: 'https://github.com/PeopleWhoListenToStories',
        Gmail: 'mailto:leisuyaemail@gmail.com'
      }
    },

    footer: {
      display: true,
      content: 'Copyright © 2021-present'
    },

    comment: {
      el:"",
      type: 'valine',
      appId: 'K7Gnu90TqMOuwdnWEwRYdsR8-MdYXbMMI',
      appKey: 'mbFqf2MNrNWAuwysuvQ3RxnF',
      placeholder:"请输入...",
      recordIP: true,
      avatar:"retro",
    },

    copyright: {
      status: 'global'
    },

    algolia: {
      apiKey: '',
      indexName: ''
    },

    algoliaType: 'full',

    git: {
      timezone: 'Asia/Shanghai'
    },

    mdEnhance: {
      align: true,
      demo: true,
      flowchart: true,
      footnote: true,
      presentation: true,
      sub: true,
      sup: true,
      tex: true
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
      themeColor: "#5c92d1",
      cacheHTML: false,
      maxSize: 3072,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
    },
  }
})
