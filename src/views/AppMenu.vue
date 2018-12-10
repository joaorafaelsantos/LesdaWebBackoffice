<template>
    <div class="menu">
        <template v-if="!isAuth">
            <router-link to="/signup" class="mr-4">
                Sign up
            </router-link>
            <router-link to="/login">
                Log in
            </router-link>
        </template>
        <template v-else>
            <router-link to="/restaurant">
                Restaurant
            </router-link>
            <router-link to="/discounts">
                Discounts
            </router-link>
            <a @click="logout()">Logout</a>
        </template>
    </div>
</template>

<script>
    import { isAuth } from "../mixins/authentication/isAuth"
    import { logout } from "../mixins/authentication/logout"

    export default {
        name: "AppMenu",
        mixins: [isAuth, logout]
    }
</script>

<style scoped lang="scss">

    @import "../assets/scss/main";

    .menu {
        padding: 10px 10px 50px 10px;
        text-align: center;
        a {
            font-weight: bold;
            color: $white;
            &.router-link-exact-active {
                color: $red;
                border-bottom: 2px solid $red;
                padding-bottom: 10px;
            }
        }
        a:hover {
            text-decoration: none;
            border-bottom: 2px solid $white;
            padding-bottom: 10px;
        }

        a:not(:first-child) {
            margin-left: 20px;
        }
    }

    @media only screen and (min-width: 767.98px) {
        .menu {
            text-align: right;
        }
    }
</style>