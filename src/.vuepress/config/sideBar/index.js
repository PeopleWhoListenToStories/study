const { sidebarConfig } = require('vuepress-theme-hope')

module.exports = {
  zh: sidebarConfig({
    // fallback
    '/': ['', 'note/', 'code/', 'software/', 'about/']
  }),

  en: sidebarConfig({
    '/en/note/': [''],

    '/en/code/': [''],

    '/en/about/': ['', 'site'],

    // fallback
    '/en/': ['', 'code/', 'about/']
  })
}
