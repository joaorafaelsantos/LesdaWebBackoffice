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

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if (requiresAuth) {

        const token = store.getters['authentication/getToken']
        if (token) {
            next()
        } else {
            router.push('/')
        }
    } else {
        next();
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')