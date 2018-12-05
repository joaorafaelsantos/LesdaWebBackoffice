<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col">
                <h1 class="display mb-3">My restaurant</h1>
                <b-form @submit="submitRestaurant()" validate="true">
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
                    <!-- Street name -->
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


                    <p v-if="logInDataIsWrong" class="text-danger mb-4">
                        Incorrect email or password.
                    </p>
                    <b-button type="submit" variant="primary" @click="submitRestaurant()">Save</b-button>
                </b-form>

            </div>
        </div>
    </div>
</template>

<script>
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
                logInDataIsWrong: false
            }
        },
        created() {
            this.loadRestaurantData()
        },
        methods: {
            loadRestaurantData() {
                fetch('https://lesdaapi.azurewebsites.net/api/v1/restaurants')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log('success -> loadrestaurants');
                        console.log(data);
                        this.form = data[0]
                        // TODO -> remove index, because it's an object
                    });
            },
            submitRestaurant() {
                fetch('https://lesdaapi.azurewebsites.net/api/v1/admin/restaurants',
                    {
                        method: 'PUT',
                        body: this.form
                    })
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (myJson) {
                        console.log('success -> submit');
                        console.log(myJson);
                    });
            }
        }
    }
</script>

<style scoped>

</style>