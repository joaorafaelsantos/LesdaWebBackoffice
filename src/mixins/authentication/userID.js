/**
 * @author João Santos <up201809187@fe.up.pt>
 */
import jwtDecode from 'jwt-decode'

export const userID = {
    computed: {
        userID() {
            if (sessionStorage.getItem('token')) {
                const decodedToken = jwtDecode(sessionStorage.getItem('token'))
                return decodedToken.user_id
            }
        }
    }
}
 