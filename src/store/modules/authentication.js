/**
 * @author João Santos <up201809187@fe.up.pt>
 */

// Initial state
const state = {
    isAuth: false
}

// Getters
const getters = {
    getIsAuth(state, getters) {
        return state.isAuth
    }
}

// Mutations
const mutations = {
    changeIsAuth(state, isAuth) {
        state.isAuth = isAuth
    }
}

// Actions
const actions = {
    changeIsAuth (context, isAuth) {
        context.commit('changeIsAuth', isAuth)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
