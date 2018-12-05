/**
 * @author João Santos <up201809187@fe.up.pt>
 */

export const isAuth = {
    computed: {
        isAuth() {
            return this.$store.getters['authentication/getIsAuth']
        }
    }
}
 