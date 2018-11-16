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

import vuexI18n from 'vuex-i18n'
Vue.use(vuexI18n.plugin, store)

// Translations
import locale_pt from './translations/pt-PT/pt-PT'
import locale_en from './translations/en-GB/en-GB'
Vue.i18n.add('pt-PT', locale_pt)
Vue.i18n.add('en-GB', locale_en)
// Initial language
Vue.i18n.set('en-GB')


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')