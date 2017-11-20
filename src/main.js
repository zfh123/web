import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/'


Vue.config.productionTip = false;


import './statics/css/base.css';

import __components from './__components/' //加载公共组件
Object.keys(__components).forEach((key) => {
  let name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
  Vue.component(`v${name}`, __components[key])
});

import Components from './components/' //加载公共组件
Object.keys(Components).forEach((key) => {
  let name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
  Vue.component(`v${name}`, Components[key])
});


/**
 // TODO 跟踪异常框架，发布时需要加入
 import Raven from 'raven-js';
 import RavenVue from 'raven-js/plugins/vue';

 Raven
 .config('https://a247e172898c41e28ab0542c24e7c2d4@sentry.io/197247')
 .addPlugin(RavenVue, Vue)
 .install();
 // 跟踪异常框架 END

 Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
  console.group()
  console.error(err, vm, info)
  console.groupEnd()
}
 Vue.config.warnHandler = function (msg, vm, trace) {
  // 只在 2.4.0+ 可用
}

 */


import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import {Mandarin} from 'flatpickr/dist/l10n/zh';
Vue.use(flatPickr);
Vue.prototype.$flatpickrLang = Mandarin;
Vue.prototype.$appConfig = require('./config.js');

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.http.options.root = `http://${Vue.prototype.$appConfig.apiDomain}`;
// Vue.http.headers.common['Authorization'] = '';
// Vue.http.headers.common['business_id'] = '';
Vue.http.interceptors.push((request, next) => {
  const token = store.state.user.token;
  if (token) {
    Vue.http.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete Vue.http.headers.common["Authorization"];
  }
  const business_id = store.state.business.id;
  if (business_id) {
    Vue.http.headers.common["business_id"] = business_id;
  } else {
    delete Vue.http.headers.common["business_id"];
  }
  const client_id = store.state.client.id;
  if (client_id) {
    Vue.http.headers.common["client_id"] = client_id;
  } else {
    delete Vue.http.headers.common["client_id"];
  }

  next()
});
Vue.http.interceptors.push((request, next) => {
  NProgress.start();
  next(() => {
    NProgress.done();
  });
});
Vue.http.interceptors.push((request, next) => {
  let timeout = request.timeout || 3000;
  setTimeout(() => {
    next(request.respondWith(request.body, {
      status: 401,
      statusText: '请求超时'
    }));

  }, timeout);
  next((response) => {
    console.log(response.status)
    return response;
  })
});

import {mapState} from 'vuex'




new Vue({
  data() {
    return {
      softName: '零售宝门店管理系统',
      isXP: null
    }
  },
  store,
  router,
  watch: {

  },
  beforeCreate() {

  },
  created() {



    console.info(this);
    console.log('%cmain.js  created', 'color:amber');

    this.isXP = navigator.userAgent.indexOf("Windows NT 5.1") > -1
      || navigator.userAgent.indexOf("Windows NT 5.2") > -1
      || navigator.userAgent.indexOf("Windows 2003") > -1;





  },
  mounted() {
    this.checkIE()
  },
  computed: {
    ...mapState({
      business: state => state.business
    })
  },
  methods: {
    checkIE(){
      function emulatedIEMajorVersion() {
        var groups = /MSIE ([0-9.]+)/.exec(window.navigator.userAgent)
        if (groups === null) {
          return null
        }
        var ieVersionNum = parseInt(groups[1], 10)
        var ieMajorVersion = Math.floor(ieVersionNum)
        return ieMajorVersion
      }
      function actualNonEmulatedIEMajorVersion() {
        var jscriptVersion = new Function('/*@cc_on return @_jscript_version; @*/')() // eslint-disable-line no-new-func
        if (typeof jscriptVersion === 'undefined') {
          return 11 // IE11+ not in emulation mode
        }
        if (jscriptVersion < 9) {
          return 8 // IE8 (or lower; haven't tested on IE<8)
        }
        return jscriptVersion // IE9 or IE10 in any mode, or IE11 in non-IE11 mode
      }

      let ua = window.navigator.userAgent;
      if (ua.indexOf('Opera') > -1 || ua.indexOf('Presto') > -1) {
        return // Opera, which might pretend to be IE
      }
      let emulated = emulatedIEMajorVersion();
      if (emulated === null) {
        return // Not IE
      }
      let nonEmulated = actualNonEmulatedIEMajorVersion();
      if (emulated !== nonEmulated) {
        this.$router.replace('/ie-warning')
      }
    },
  },
  beforeDestroy() {

  },
  template: '<App/>',
  components: {App},

  el: "#app"
});
