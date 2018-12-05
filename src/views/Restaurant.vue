<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col">
                <RestaurantOwnerManager v-if="!isAdmin"></RestaurantOwnerManager>
            </div>
        </div>
    </div>
</template>

<script>

    import RestaurantOwnerManager from '../components/Restaurant/RestaurantOwnerManager'

    export default {
        name: "Manager",
        components: {
            RestaurantOwnerManager
        },
        data() {
            return {
                isAdmin: false
            }
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>