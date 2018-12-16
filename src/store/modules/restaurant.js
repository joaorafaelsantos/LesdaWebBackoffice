/**
 * @author João Santos <up201809187@fe.up.pt>
 */

// Initial state
const state = {
    restaurant: null,
    restaurants: null
}

// Getters
const getters = {
    getRestaurant(state, getters) {
        return state.restaurant
    },
    getRestaurants(state, getters) {
        return state.restaurants
    }
}

// Mutations
const mutations = {
    setRestaurant(state, restaurant) {
        state.restaurant = restaurant
    },
    setRestaurants(state, restaurants) {
        state.restaurants = restaurants
    }
}

// Actions
const actions = {
    setRestaurant (context, restaurant) {
        context.commit('setRestaurant', restaurant)
    },
    setRestaurants (context, restaurants) {
        context.commit('setRestaurants', restaurants)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
