/**
 * @author João Santos <up201809187@fe.up.pt>
 */

export const logout = {
    methods: {
        logout() {
            this.$store.dispatch('authentication/setToken', '')
            this.$router.push('/')
        }
    }
}
 