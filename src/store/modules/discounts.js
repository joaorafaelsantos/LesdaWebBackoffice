/**
 * @author João Santos <up201809187@fe.up.pt>
 */

// Initial state
const state = {
    discounts: null,
}

// Getters
const getters = {
    getDiscounts(state, getters) {
        return state.discounts
    },
}

// Mutations
const mutations = {
    setDiscounts(state, discounts) {
        state.discounts = discounts
    }
}

// Actions
const actions = {
    setDiscounts (context, discounts) {
        context.commit('setDiscounts', discounts)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
