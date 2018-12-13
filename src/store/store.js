/**
 * @author João Santos <up201809187@fe.up.pt>
 */

import Vue from 'vue'
import Vuex from 'vuex'

import authentication from './modules/authentication'
import restaurant from './modules/restaurant'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        authentication,
        restaurant
    }
})