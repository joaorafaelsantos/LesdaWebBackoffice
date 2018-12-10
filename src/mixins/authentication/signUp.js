/**
 * @author João Santos <up201809187@fe.up.pt>
 */

import {post} from '../../utils/http'

export const signUp = {
    methods: {
        signUp(data) {
            return post('/api/v1/admin/restaurant_owners', data)
        }
    }
}
 