<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col">
                <DiscountsOwnerManager v-if="!isAdmin"></DiscountsOwnerManager>
                <!--<DiscountsAdminManager v-if="isAdmin"></DiscountsAdminManager>-->
            </div>
        </div>
    </div>
</template>

<script>

    import DiscountsOwnerManager from '../components/Discounts/DiscountsOwnerManager'
    // import DiscountsAdminManager from '../components/Discounts/DiscountsAdminManager'
    import { userRole } from '../mixins/authentication/userRole'

    export default {
        name: "DiscountsManager",
        components: {
            DiscountsOwnerManager,
            // DiscountsAdminManager
        },
        mixins: [userRole],
    }
</script>

<style scoped>

</style>