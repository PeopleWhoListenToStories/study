const { navbarConfig } = require("vuepress-theme-hope");

module.exports = {
  zh: navbarConfig([
    { text: "主页", icon: "home", link: "/" },
    // {
    //   text: "随笔",
    //   icon: "note",
    //   prefix: "/note/",
    //   items: [
    //     { text: "随笔", link: "", icon: "note" },
    //     {
    //       text: "诗集: 四季",
    //       items: [
    //         { text: "春之诗", link: "spring/", icon: "flower" },
    //         { text: "夏之歌", link: "summer/", icon: "leaf" },
    //         { text: "秋之思", link: "fall/", icon: "autumn" },
    //         { text: "冬之语", link: "winter/", icon: "snow" },
    //       ],
    //     },
    //     {
    //       text: "其他作品",
    //       items: [
    //         { text: "笑谈人生", link: "life/", icon: "form" },
    //         { text: "轻言细语", link: "poem/", icon: "like" },
    //       ],
    //     },
    //     { text: "Node.js", link: "node-js/", icon: "nodeJS" },
    //   ],
    // },
    {
      text: "代码笔记",
      icon: "code",
      items: [
        { text: "代码笔记", icon: "code", link: "/code/" },
        // {
        //   text: "产品设计",
        //   items: [{ text: "设计教程", icon: "skin", link: "/design/" }],
        // },
        // {
        //   text: "后端运维",
        //   items: [{ text: "Linux 教程", icon: "linux", link: "/linux/" }],
        // },
      ],
    },
    {
      text: "每日一题",
      icon: "dailytopic",
      prefix: "/dailytopic/",
      items: [
        {
          text: "基础算法题",
          icon: "software",
          link: "",
          items: [
            { text: "数组", icon: "linux", link: "array/" },
            { text: "字符串", icon: "linux", link: "string/" },

            // { text: "Git", icon: "git", link: "git/" },
            // { text: "COMSOL", icon: "app", link: "comsol/" },
          ],
        },
      ],
    },
  ]),

  en: navbarConfig([
    { text: "Home", link: "/en/", icon: "home" },
    {
      text: "Code Note",
      icon: "code",
      items: [{ text: "Code Note", icon: "code", link: "/en/code/" }],
    },
    {
      text: "A daily topic",
      icon: "software",
      link: "/en/dailytopic/",
    },
  ]),
};
