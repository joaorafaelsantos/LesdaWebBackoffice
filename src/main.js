/**
 * @author João Santos <up201809187@fe.up.pt>
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

// Libraries modules
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')