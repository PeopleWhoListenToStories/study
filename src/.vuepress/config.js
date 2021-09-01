module.exports = {
  dest: './docs/',
  base: '/study/',
  title: 'Hello VuePress',
  description: 'Just playing around',
  host: '0.0.0.0',
  port: 8088,
  // theme: 'vuepress-theme-reco',
  theme: 'vue',
  cache: false,
  //  指定 vuepress build 的输出目录
  // dest: './dist',
  serviceWorker: true,
  head: [
    // ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'icon', href: '/vuepress/favicon.ico' }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  plugins: [
    ['@vuepress/nprogress'],
    // [
    //   '@vuepress/pwa',
    //   {
    //     serviceWorker: true,
    //     popupComponent: 'MySWUpdatePopup',
    //     updatePopup: {
    //       message: '新的风暴已经出现',
    //       buttonText: '盘他'
    //     }
    //   }
    // ],
    // [
    //   '@vuepress/google-analytics',
    //   {
    //     ga: '**-*********-*'
    //   }
    // ],
    ['@vuepress/medium-zoom', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新'
        }
      }
    ]
  ],
  markdown: {
    lineNumbers: true, // 代码块显示行号
    anchor: { permalink: false }
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器'
    }
  },
  themeConfig: {
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'GitHub',
    // 以下为可选的编辑链接选项
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'https://github.com',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: false,
    // 默认为 "Edit this page"
    editLinkText: 'Git EditLink [Private]',
    // 文档更新时间：每个文件git最后提交的时间,
    lastUpdated: 'Last Updated',
    // 侧边栏搜索深度
    sidebarDepth: 2, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    nav: [
      { text: 'Wiki', link: '/Links/Wiki/' },
      { text: 'Devil', link: '/Links/Devil/' },
      { text: 'FAQ', link: '/FAQ/Console/A000' },
      { text: 'Thought', link: '/Thought/' },
      {
        text: 'Another',
        items: [
          { text: 'AboutMe', link: '/Another/MySelf' },
          { text: 'Fillory', link: '/Another/Fillory' },
          { text: 'Review', link: '/Another/Review' }
        ]
      }
    ],
    sidebar: {
      '/FAQ/': [
        {
          title: 'Console',
          children: [['/FAQ/Console/A000', '#FAQ1000']]
        },
        {
          title: 'Digest',
          children: [['/FAQ/DigestionHeap/DigestWill', '#DigestWill']]
        }
      ],
      '/Thought/': [
        ['', 'Thought'],
        {
          title: '断章取义',
          children: [['/Thought/TheWord/Les_Confessions', '#《忏悔录》']]
        }
      ],
      '/Another/': [['/Another/Fillory', '#Fillory']]
    },
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        algolia: {},
        nav: [{ text: 'Nested', link: '/nested/', ariaLabel: 'Nested' }],
        sidebar: {
          '/': [
            /* ... */
          ],
          '/nested/': [
            /* ... */
          ]
        }
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用.',
            buttonText: '刷新'
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [{ text: '嵌套', link: '/zh/nested/' }],
        sidebar: {
          '/zh/': [
            /* ... */
          ],
          '/zh/nested/': [
            /* ... */
          ]
        }
      }
    }
  }
}
