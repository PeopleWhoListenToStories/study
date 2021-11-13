const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = {
  zh: sidebarConfig({

    "/code/": require("./code"),

    "/about/": ["", "site"],

    // fallback
    "/": ["", "note/", "code/", "about/"],
  }),

  en: sidebarConfig({
    "/en/note/": [""],

    "/en/code/": [""],

    "/en/about/": ["", "site"],

    // fallback
    "/en/": ["", "code/", "about/"],
  }),
};