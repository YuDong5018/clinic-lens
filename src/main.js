// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from '../node_modules/element-ui/lib/locale/lang/en'

Vue.config.productionTip = false
Vue.use(ElementUI,{locale});
ElementUI.Tooltip.props.openDelay.default = 200

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
