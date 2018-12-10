/**
 * @author João Santos <up201809187@fe.up.pt>
 */
import jwtDecode from 'jwt-decode'

export const userRole = {
    computed: {
        isAdmin() {
            if (sessionStorage.getItem('token')) {
                const decodedToken = jwtDecode(sessionStorage.getItem('token'))
                return decodedToken.role === 'Admin'
            }
        }
    }
}
 