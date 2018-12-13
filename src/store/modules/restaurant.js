/**
 * @author João Santos <up201809187@fe.up.pt>
 */

// Initial state
const state = {
    restaurant: null
}

// Getters
const getters = {
    getRestaurant(state, getters) {
        return state.restaurant
    }
}

// Mutations
const mutations = {
    setRestaurant(state, restaurant) {
        state.restaurant = restaurant
    }
}

// Actions
const actions = {
    setRestaurant (context, restaurant) {
        context.commit('setRestaurant', restaurant)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
