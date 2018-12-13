/**
 * @author João Santos <up201809187@fe.up.pt>
 */

import { get } from '../utils/http'

export function loadUserInfo(id) {
    return get(`/identity/${id}`)
}