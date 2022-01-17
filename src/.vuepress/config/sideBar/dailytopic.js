const { sidebarConfig } = require('vuepress-theme-hope')

module.exports = sidebarConfig([
  {
    title: '算法',
    icon: 'code',
    collapsable: false,
    children: ['array/', 'string/', 'other/']
  }
])
