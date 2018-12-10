<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col">
                <h1 class="display mb-3">My restaurant</h1>
                <b-form @submit="submitRestaurantData()" validate="true">
                    <div v-show="isCurrentPage(1)">
                        <!-- Name -->
                        <b-form-group id="inpGrpName">
                            <b-form-input id="inpName"
                                          type="text"
                                          v-model="form.name"
                                          required
                                          placeholder="Enter your restaurant commercial name">
                            </b-form-input>
                        </b-form-group>
                        <!-- Legal name -->
                        <b-form-group id="inpGrpLegalName">
                            <b-form-input id="inpLegalName"
                                          type="text"
                                          v-model="form.legalName"
                                          required
                                          placeholder="Enter your restaurant legal name">
                            </b-form-input>
                        </b-form-group>
                        <!-- Street name -->
                        <b-form-group id="inpGrpStreetName">
                            <b-form-input id="inpStreetName"
                                          type="text"
                                          v-model="form.address.streetName"
                                          required
                                          placeholder="Enter your restaurant street name">
                            </b-form-input>
                        </b-form-group>
                    </div>
                    <!-- Page 2 -->
                    <div v-show="isCurrentPage(2)">
                        <!-- City -->
                        <b-form-group id="inpGrpCity">
                            <b-form-input id="inpCity"
                                          type="text"
                                          v-model="form.address.city"
                                          required
                                          placeholder="Enter your restaurant city">
                            </b-form-input>
                        </b-form-group>
                        <!-- Zipcode -->
                        <b-form-group id="inpGrpZipCode">
                            <b-form-input id="inpZipCode"
                                          type="text"
                                          v-model="form.address.zipcode"
                                          required
                                          placeholder="Enter your restaurant zip code">
                            </b-form-input>
                        </b-form-group>
                        <!-- Country -->
                        <b-form-group id="inpGrpCountry">
                            <b-form-input id="inpCountry"
                                          type="text"
                                          v-model="form.address.country"
                                          required
                                          placeholder="Enter your restaurant country">
                            </b-form-input>
                        </b-form-group>
                    </div>
                    <!-- Page 3 -->
                    <div v-show="isCurrentPage(3)">
                        <!-- Fiscal number -->
                        <b-form-group id="inpGrpFiscalNumber">
                            <b-form-input id="inpFiscalNumber"
                                          type="text"
                                          v-model="form.fiscalNumber"
                                          required
                                          placeholder="Enter your restaurant fiscal number">
                            </b-form-input>
                        </b-form-group>
                        <!-- Latitude -->
                        <b-form-group id="inpGrpLatitude">
                            <b-form-input id="inpLatitude"
                                          type="text"
                                          v-model="form.gpsPosition.latitude"
                                          required
                                          placeholder="Enter your restaurant latitude">
                            </b-form-input>
                        </b-form-group>
                        <!-- Longitude -->
                        <b-form-group id="inpGrpLongitude">
                            <b-form-input id="inpLongitude"
                                          type="text"
                                          v-model="form.gpsPosition.longitude"
                                          required
                                          placeholder="Enter your restaurant longitude">
                            </b-form-input>
                        </b-form-group>
                        <!-- Email -->
                        <b-form-group id="inpGrpEmail">
                            <b-form-input id="inpEmail"
                                          type="text"
                                          v-model="form.email"
                                          required
                                          placeholder="Enter your restaurant email">
                            </b-form-input>
                        </b-form-group>
                    </div>
                    <!-- Page controllers -->
                    <div class="mt-3">
                        <a class="btn btn-secondary mr-2" v-show="isCurrentPage(2) || isCurrentPage(3)"
                           @click="changePage('previous')">Previous</a>
                        <a class="btn btn-secondary" v-show="isCurrentPage(1) || isCurrentPage(2)"
                           @click="changePage('next')">Next</a>
                    </div>

                    <div class="mt-3" v-show="isCurrentPage(3)">
                        <b-button type="submit" variant="primary" @click="submitRestaurantData()">Save</b-button>
                    </div>
                </b-form>

            </div>
        </div>
    </div>
</template>

<script>
    import { loadRestaurant, submitRestaurant } from "../../api/restaurants";

    export default {
        name: "RestaurantOwnerManager",
        data() {
            return {
                form: {
                    name: '',
                    legalName: '',
                    address: {
                        streetName: '',
                        city: '',
                        zipCode: '',
                        country: ''
                    },
                    fiscalNumber: '',
                    gpsPosition: {
                        latitude: '',
                        longitude: ''
                    },
                    email: ''
                },
                logInDataIsWrong: false,
                currentPage: 1
            }
        },
        created() {
            // this.loadRestaurantData()
        },
        methods: {
            loadRestaurantData() {
                loadRestaurant()
                    .then(response => {
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            submitRestaurantData() {
                submitRestaurant(this.form)
                    .then(response => {
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            isCurrentPage(page) {
                return page === this.currentPage
            },
            changePage(direction) {

                if (direction === 'previous') {
                    this.currentPage--
                } else if (direction === 'next') {
                    this.currentPage++
                }
            }
        }
    }
</script>

<style scoped>

</style>