/*
 * @Author: your name
 * @Date: 2020-12-21 17:41:12
 * @LastEditTime: 2021-01-04 10:48:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\main.ts
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import jsoneditor from 'jsoneditor';
import ElementUI from 'element-ui';
import { codemirror } from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
import jshint from 'jshint';
import 'element-ui/lib/theme-chalk/index.css';

import * as d3 from 'd3';


Vue.prototype.$d3 = d3;

(window as any).d3 = d3;   // 暂时设置为全局变量

Vue.prototype.$jsoneditor = jsoneditor;
Vue.config.productionTip = false;
Vue.use(codemirror);
Vue.use(ElementUI);
(window as any).JSHINT = jshint.JSHINT;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
