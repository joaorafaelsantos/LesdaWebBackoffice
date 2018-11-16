/**
 * @author João Santos <up201809187@fe.up.pt>
 */

import { post } from '../utils/http'

export function authentication(data) {
    return post('/auth/', data)
}