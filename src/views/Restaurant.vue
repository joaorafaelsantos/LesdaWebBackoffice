<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col">
                <RestaurantOwnerManager v-if="!isAdmin"></RestaurantOwnerManager>
                <RestaurantAdminManager v-if="isAdmin"></RestaurantAdminManager>
            </div>
        </div>
    </div>
</template>

<script>

    import RestaurantOwnerManager from '../components/Restaurant/RestaurantOwnerManager'
    import RestaurantAdminManager from '../components/Restaurant/RestaurantAdminManager'
    import { userRole } from '../mixins/authentication/userRole'

    export default {
        name: "RestaurantManager",
        components: {
            RestaurantOwnerManager,
            RestaurantAdminManager
        },
        mixins: [userRole],
    }
</script>

<style scoped>

</style>