/**
 * @author João Santos <up201809187@fe.up.pt>
 */

// Initial state
const state = {
    language: 'en-GB'
}

// Getters
const getters = {
    getLanguage(state, getters) {
        return state.language
    }
}

// Mutations
const mutations = {
    changeLanguage(state, language) {
        state.language = language
    }
}

// Actions
const actions = {
    changeLanguage (context, language) {
        context.commit('changeLanguage', language)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
