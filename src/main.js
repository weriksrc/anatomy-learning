import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import router from './router'
import canDirective from "./util/directives/can"
import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.config.productionTip = false;
Vue.use(canDirective);
Vue.use(VueQuillEditor)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
