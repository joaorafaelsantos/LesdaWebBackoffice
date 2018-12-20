/**
 * @author João Santos <up201809187@fe.up.pt>
 */

import {get, post, put, remove} from '../utils/http'

export function loadDiscounts(context) {
    const restaurantId = context.$store.getters['restaurant/getRestaurant'].restaurantId
    return get(`/api/v1/admin/${restaurantId}/discounts`)
}

export function submitDiscount(context, data) {
    const restaurantId = context.$store.getters['restaurant/getRestaurant'].restaurantId
    return post(`/api/v1/admin/${restaurantId}/discounts`, data)
}

export function updateDiscount(context, data) {
    const restaurantId = context.$store.getters['restaurant/getRestaurant'].restaurantId
    return put(`/api/v1/admin/${restaurantId}/discounts`, data)
}

export function deleteDiscount(context, id) {
    const restaurantId = context.$store.getters['restaurant/getRestaurant'].restaurantId
    return remove(`/api/v1/admin/${restaurantId}/discounts/${id}`)
}