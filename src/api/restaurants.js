/**
 * @author João Santos <up201809187@fe.up.pt>
 */

import { get, post } from '../utils/http'

export function loadRestaurant() {
    return get('/api/v1/admin/restaurants?page=1&pageSize=20')
}

export function submitRestaurant(data) {
    return post('/api/v1/admin/restaurants', data)
}