// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import fastclick from 'fastclick';
import 'babel-polyfill';
import 'common/scss/index.scss';
import router from './router';
import App from './App';
import store from './store';

fastclick.attach(document.body);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
