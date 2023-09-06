import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import router from './router'
import canDirective from "./util/directives/can"

Vue.config.productionTip = false;
Vue.use(canDirective);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
