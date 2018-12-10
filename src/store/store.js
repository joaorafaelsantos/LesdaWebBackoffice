/**
 * @author João Santos <up201809187@fe.up.pt>
 */

import Vue from 'vue'
import Vuex from 'vuex'

import authentication from './modules/authentication'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        authentication
    }
})