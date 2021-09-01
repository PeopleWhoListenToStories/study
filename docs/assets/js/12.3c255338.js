(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{180:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"起步"}},[s._v("起步")]),s._v(" "),s._m(0),s._v(" "),a("h2",{attrs:{id:"全局安装"}},[s._v("全局安装")]),s._v(" "),a("p",[s._v("如果你只是想随便用下 VuePress，你可以在全局安装它：")]),s._v(" "),s._m(1),a("h2",{attrs:{id:"在已有项目中安装"}},[s._v("在已有项目中安装")]),s._v(" "),a("p",[s._v("如果你想要在一个已有项目中维护文档，就应该将 VuePress 安装为本地依赖。此设置还允许你使用 CI 或 Netlify 服务，在推送时自动部署。")]),s._v(" "),s._m(2),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),a("p",[s._v("当将 VuePress 安装到以 webpack 3.x 作为依赖项的已有项目中时，推荐使用"),a("a",{attrs:{href:"https://yarnpkg.com/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Yarn"),a("OutboundLink")],1),s._v(" 而不是 npm。因为在这种情况下，Npm 无法生成正确的依赖关系树。")])]),s._v(" "),s._m(3),s._v(" "),s._m(4),a("p",[s._v("你现在就可以开始编写文档了：")]),s._v(" "),s._m(5),a("p",[s._v("要生成静态资源，请运行：")]),s._v(" "),s._m(6),a("p",[s._v("默认情况下，构建的文件会位于 "),a("code",[s._v(".vuepress/dist")]),s._v(" 中，该文件可以通过 "),a("code",[s._v(".vuepress/config.js")]),s._v(" 中的 "),a("code",[s._v("dest")]),s._v(" 字段进行配置。构建的文件可以部署到任何静态文件服务器。关于如何部署到一些常用服务，请参考 "),a("router-link",{attrs:{to:"./deploy.html"}},[s._v("部署指南")]),s._v("。")],1)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("兼容性注意事项")]),this._v(" "),t("p",[this._v("VuePress 要求 Node.js >= 8。")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# 全局安装")]),s._v("\nyarn global add vuepress "),a("span",{attrs:{class:"token comment"}},[s._v("# 或 npm install -g vuepress")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 创建一个 markdown 文件")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'# Hello VuePress'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" README.md\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 开始编写文档")]),s._v("\nvuepress dev\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 构建")]),s._v("\nvuepress build\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# 安装为本地依赖项")]),s._v("\nyarn add -D vuepress "),a("span",{attrs:{class:"token comment"}},[s._v("# 或 npm install -D vuepress")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 创建一个 docs 目录")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" docs\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 创建一个 markdown 文件")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'# Hello VuePress'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" docs/README.md\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("然后，给 "),t("code",[this._v("package.json")]),this._v(" 添加一些 scripts 脚本：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token property"}},[s._v('"docs:dev"')]),a("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token property"}},[s._v('"docs:build"')]),a("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("yarn docs:dev "),t("span",{attrs:{class:"token comment"}},[this._v("# 或 npm run docs:dev")]),this._v("\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("yarn docs:build "),t("span",{attrs:{class:"token comment"}},[this._v("# 或 npm run docs:build")]),this._v("\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])}],!1,null,null,null);t.default=e.exports}}]);