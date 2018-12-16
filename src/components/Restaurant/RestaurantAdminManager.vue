<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col">
                <!-- Title -->
                <h1 class="display mb-3">All restaurants</h1>
                <!-- Restaurants -->
                <div v-if="restaurants.length > 0" v-for="(restaurant, index) in restaurants">
                    <div class="col-md-12 mb-5">
                        <span>{{ restaurant.name }}
                            <a class="btn btn-danger btn-sm ml-2"
                               @click="deleteRestaurantById(restaurant.restaurantId, index)">Deactivate</a>
                        </span>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
    import {loadRestaurants, deleteRestaurant} from "../../api/restaurants";

    export default {
        name: "RestaurantAdminManager",
        computed: {
          restaurants() {
              return this.$store.getters['restaurant/getRestaurants']
          }
        },
        created() {
            this.loadRestaurantsData()
        },
        methods: {
            loadRestaurantsData() {
                loadRestaurants(this)
                    .then(response => {
                        this.$store.dispatch('restaurant/setRestaurants', response.data.resultSet)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            deleteRestaurantById(restaurantId, index) {
                deleteRestaurant(restaurantId)
                    .then(response => {
                        this.restaurants.splice(index, 1)
                        alert('Restaurant successfully deactivated!')
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }
</script>

<style scoped>

</style>