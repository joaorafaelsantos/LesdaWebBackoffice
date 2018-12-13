/**
 * @author João Santos <up201809187@fe.up.pt>
 */

import { post } from '../../utils/http'

export const logIn = {
    methods: {
        logIn(data) {
            return post('/token/connect', data)
        }
    }
}
 