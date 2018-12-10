<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col">
                <RestaurantOwnerManager v-if="!isAdmin"></RestaurantOwnerManager>
                <!--<AdminManager v-if="isAdmin"></AdminManager>-->
            </div>
        </div>
    </div>
</template>

<script>

    import RestaurantOwnerManager from '../components/Restaurant/RestaurantOwnerManager'
    import { userRole } from '../mixins/authentication/userRole'

    export default {
        name: "Manager",
        components: {
            RestaurantOwnerManager
        },
        mixins: [userRole],
    }
</script>

<style scoped>

</style>