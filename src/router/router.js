/**
 * @author João Santos <up201809187@fe.up.pt>
 */

import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/language',
            name: 'Language',
            component: () => import('../views/Language.vue')
        }
    ]
})
