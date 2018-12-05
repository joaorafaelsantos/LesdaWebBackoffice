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
            path: '/login',
            name: 'LogIn',
            component: () => import('../views/LogIn.vue')
        },
        {
            path: '/signup',
            name: 'SignUp',
            component: () => import('../views/SignUp.vue')
        },
        {
            path: '/restaurant',
            name: 'Restaurant',
            component: () => import('../views/Restaurant.vue')
        }
    ]
})
