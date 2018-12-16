/**
 * @author João Santos <up201809187@fe.up.pt>
 */

import {get, post, remove} from '../utils/http'

export function loadRestaurant(context) {
    const id = context.$store.getters['restaurant/getRestaurant'].restaurantId
    return get(`/api/v1/admin/restaurants/${id}`)
}

export function loadRestaurants() {
    return get(`/api/v1/admin/restaurants`)
}

export function submitRestaurant(data) {
    return post('/api/v1/admin/restaurants', data)
}

export function deleteRestaurant(id) {
    return remove(`/api/v1/admin/restaurants/${id}`)
}