/**
 * @author João Santos <up201809187@fe.up.pt>
 */

// Initial state
const state = {
    token: sessionStorage.getItem('token')
}

// Getters
const getters = {
    getToken(state, getters) {
        return state.token
    }
}

// Mutations
const mutations = {
    setToken(state, token) {
        state.token = token
    }
}

// Actions
const actions = {
    setToken (context, token) {
        context.commit('setToken', token)
        sessionStorage.setItem('token', token)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
