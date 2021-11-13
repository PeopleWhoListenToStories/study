const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = sidebarConfig([
  "",
  {
    title: "前端开发",
    icon: "code",
    collapsable: false,
    children: [
      "node-js/",
      "vue/",
      "react/",
    ],
  },
]);