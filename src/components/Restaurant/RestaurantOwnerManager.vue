<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col">
                <h1 class="display mb-3">My restaurant</h1>
                <!-- Page controllers -->
                <div class="mb-3">
                    <a class="btn btn-secondary mr-2" v-show="!isCurrentPage(1)"
                       @click="changePage('previous')">Previous</a>
                    <a class="btn btn-secondary" v-show="!isCurrentPage(5)"
                       @click="changePage('next')">Next</a>
                </div>
                <!-- Restaurant form -->
                <b-form @submit="submitRestaurantData" novalidate="true">
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
                        <!-- Category -->
                        <label>Category</label>
                        <b-form-group id="sltGrpCategory">
                            <b-form-select id="sltCategory"
                                           :options="categories"
                                           required
                                           v-model="form.categoryId">
                            </b-form-select>
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
                                          v-model="form.address.zipCode"
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
                    <!-- Page 4 -->
                    <div v-show="isCurrentPage(4)">
                        <!-- Image -->
                        <b-form-group id="inpGrpImage">
                            <b-form-input id="inpImage"
                                          type="text"
                                          v-model="form.logoUri"
                                          placeholder="Enter your logo">
                            </b-form-input>
                        </b-form-group>
                        <!-- Facebook -->
                        <b-form-group id="inpGrpFacebook">
                            <b-form-input id="inpFacebook"
                                          type="text"
                                          v-model="form.facebookUrl"
                                          placeholder="Enter your Facebook">
                            </b-form-input>
                        </b-form-group>
                        <!-- Instagram -->
                        <b-form-group id="inpGrpInstagram">
                            <b-form-input id="inpInstagram"
                                          type="text"
                                          v-model="form.instagramUrl"
                                          placeholder="Enter your Instagram">
                            </b-form-input>
                        </b-form-group>
                        <!-- Site -->
                        <b-form-group id="inpGrSite">
                            <b-form-input id="inpSite"
                                          type="text"
                                          v-model="form.site"
                                          placeholder="Enter your site">
                            </b-form-input>
                        </b-form-group>
                        <!-- Phone number -->
                        <b-form-group id="inpGrpPhoneNumber">
                            <b-form-input id="inpPhoneNumber"
                                          type="text"
                                          v-model="form.phoneNumber"
                                          placeholder="Enter your phone number">
                            </b-form-input>
                        </b-form-group>
                    </div>
                    <!-- Page 5 -->
                    <div v-show="isCurrentPage(5)">
                        <!-- Sunday -->
                        <label>Sunday</label>
                        <div class="row">
                            <!-- Opens at -->
                            <div class="col-4">
                                <b-form-group id="inpGrpSundayOpens">
                                    <b-form-input id="inpSundayOpens"
                                                  type="time"
                                                  v-model="form.sundaySchedule.opensAt">
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <!-- Closes at-->
                            <div class="col-4">
                                <b-form-group id="inpGrpSundayCloses">
                                    <b-form-input id="inpSundayCloses"
                                                  type="time"
                                                  v-model="form.sundaySchedule.closesAt">
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <!-- Is open -->
                            <div class="col-4">
                                <b-form-checkbox v-model="form.sundaySchedule.isOpen" value=true>Is open
                                </b-form-checkbox>
                            </div>
                        </div>
                        <!-- Monday -->
                        <label>Monday</label>
                        <div class="row">
                            <!-- Opens at -->
                            <div class="col-4">
                                <b-form-group id="inpGrpMondayOpens">
                                    <b-form-input id="inpMondayOpens"
                                                  type="time"
                                                  v-model="form.mondaySchedule.opensAt">
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <!-- Closes at-->
                            <div class="col-4">
                                <b-form-group id="inpGrpMondayCloses">
                                    <b-form-input id="inpMondayCloses"
                                                  type="time"
                                                  v-model="form.mondaySchedule.closesAt">
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <!-- Is open -->
                            <div class="col-4">
                                <b-form-checkbox v-model="form.mondaySchedule.isOpen" value=true>Is open
                                </b-form-checkbox>
                            </div>
                        </div>
                        <!-- Tuesday -->
                        <label>Tuesday</label>
                        <div class="row">
                            <!-- Opens at -->
                            <div class="col-4">
                                <b-form-group id="inpGrpTuesdayOpens">
                                    <b-form-input id="inpTuesdayOpens"
                                                  type="time"
                                                  v-model="form.tuesdaySchedule.opensAt">
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <!-- Closes at-->
                            <div class="col-4">
                                <b-form-group id="inpGrpTuesdayCloses">
                                    <b-form-input id="inpTuesdayCloses"
                                                  type="time"
                                                  v-model="form.tuesdaySchedule.closesAt">
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <!-- Is open -->
                            <div class="col-4">
                                <b-form-checkbox v-model="form.tuesdaySchedule.isOpen" value=true>Is open
                                </b-form-checkbox>
                            </div>
                        </div>
                        <!-- Wednesday -->
                        <label>Wednesday</label>
                        <div class="row">
                            <!-- Opens at -->
                            <div class="col-4">
                                <b-form-group id="inpGrpWednesdayOpens">
                                    <b-form-input id="inpWednesdayOpens"
                                                  type="time"
                                                  v-model="form.wednesdaySchedule.opensAt">
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <!-- Closes at-->
                            <div class="col-4">
                                <b-form-group id="inpGrpWednesdayCloses">
                                    <b-form-input id="inpWednesdayCloses"
                                                  type="time"
                                                  v-model="form.wednesdaySchedule.closesAt">
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <!-- Is open -->
                            <div class="col-4">
                                <b-form-checkbox v-model="form.wednesdaySchedule.isOpen" value=true>Is open
                                </b-form-checkbox>
                            </div>
                        </div>
                        <!-- Thursday -->
                        <label>Thursday</label>
                        <div class="row">
                            <!-- Opens at -->
                            <div class="col-4">
                                <b-form-group id="inpGrpThursdayOpens">
                                    <b-form-input id="inpThursdayOpens"
                                                  type="time"
                                                  v-model="form.thursdaySchedule.opensAt">
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <!-- Closes at-->
                            <div class="col-4">
                                <b-form-group id="inpGrpThursdayCloses">
                                    <b-form-input id="inpThursdayCloses"
                                                  type="time"
                                                  v-model="form.thursdaySchedule.closesAt">
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <!-- Is open -->
                            <div class="col-4">
                                <b-form-checkbox v-model="form.thursdaySchedule.isOpen" value=true>Is open
                                </b-form-checkbox>
                            </div>
                        </div>
                        <!-- Friday -->
                        <label>Friday</label>
                        <div class="row">
                            <!-- Opens at -->
                            <div class="col-4">
                                <b-form-group id="inpGrpFridayOpens">
                                    <b-form-input id="inpFridayOpens"
                                                  type="time"
                                                  v-model="form.fridaySchedule.opensAt">
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <!-- Closes at-->
                            <div class="col-4">
                                <b-form-group id="inpGrpFridayCloses">
                                    <b-form-input id="inpFridayCloses"
                                                  type="time"
                                                  v-model="form.fridaySchedule.closesAt">
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <!-- Is open -->
                            <div class="col-4">
                                <b-form-checkbox v-model="form.fridaySchedule.isOpen" value=true>Is open
                                </b-form-checkbox>
                            </div>
                        </div>
                        <!-- Saturday -->
                        <label>Saturday</label>
                        <div class="row">
                            <!-- Opens at -->
                            <div class="col-4">
                                <b-form-group id="inpGrpSaturdayOpens">
                                    <b-form-input id="inpSaturdayOpens"
                                                  type="time"
                                                  v-model="form.saturdaySchedule.opensAt">
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <!-- Closes at-->
                            <div class="col-4">
                                <b-form-group id="inpGrpSaturdayCloses">
                                    <b-form-input id="inpSaturdayCloses"
                                                  type="time"
                                                  v-model="form.saturdaySchedule.closesAt">
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <!-- Is open -->
                            <div class="col-4">
                                <b-form-checkbox v-model="form.saturdaySchedule.isOpen" value=true>Is open
                                </b-form-checkbox>
                            </div>
                        </div>

                    </div>

                    <!-- Action buttons -->
                    <div class="mt-3 mb-4">
                        <b-button type="submit" variant="primary" class="mr-2">Save</b-button>
                        <b-button v-if="$store.getters['restaurant/getRestaurant']" @click="deleteRestaurantById" variant="danger">Delete</b-button>
                    </div>
                </b-form>

            </div>
        </div>
    </div>
</template>

<script>
    import {loadRestaurant, submitRestaurant, deleteRestaurant} from "../../api/restaurants";
    import {loadUserInfo} from "../../api/userInfo";
    import {userID} from "../../mixins/authentication/userID";

    export default {
        name: "RestaurantOwnerManager",
        mixins: [userID],
        data() {
            return {
                form: {
                    "name": "",
                    "legalName": "",
                    "ownerId": "",
                    "address": {
                        "streetName": "",
                        "city": "",
                        "zipCode": "",
                        "country": ""
                    },
                    "fiscalNumber": "",
                    "gpsPosition": {
                        "latitude": null,
                        "longitude": null
                    },
                    "email": "",
                    "phoneNumber": null,
                    "site": null,
                    "facebookUrl": null,
                    "instagramUrl": null,
                    "categoryId": 1,
                    "categoryName": null,
                    "features": null,
                    "paymentOptions": null,
                    "logoUri": null,
                    "rating": 0,
                    "comments": null,
                    "sundaySchedule": {
                        "opensAt": "11:30",
                        "closesAt": "12:00",
                        "isOpen": true
                    },
                    "mondaySchedule": {
                        "opensAt": "11:30",
                        "closesAt": "12:00",
                        "isOpen": true
                    },
                    "tuesdaySchedule": {
                        "opensAt": "11:30",
                        "closesAt": "12:00",
                        "isOpen": true
                    },
                    "wednesdaySchedule": {
                        "opensAt": "11:30",
                        "closesAt": "12:00",
                        "isOpen": true
                    },
                    "thursdaySchedule": {
                        "opensAt": "11:30",
                        "closesAt": "12:00",
                        "isOpen": true
                    },
                    "fridaySchedule": {
                        "opensAt": "11:30",
                        "closesAt": "12:00",
                        "isOpen": true
                    },
                    "saturdaySchedule": {
                        "opensAt": "11:30",
                        "closesAt": "12:00",
                        "isOpen": true
                    }
                },
                categories: [
                    {text: 'Oriental', value: 1},
                    {text: 'Pizzeria', value: 2},
                    {text: 'Fast Food', value: 3},
                    {text: 'Bars and Pubs', value: 4},
                    {text: 'Hamburgers', value: 5},
                    {text: 'Barbecue', value: 6},
                    {text: 'Snack bar', value: 7},
                    {text: 'Hot Dogs', value: 8},
                    {text: 'Buffet', value: 9},
                    {text: 'Italian', value: 10},
                    {text: 'Arabic', value: 11},
                    {text: 'Mexican', value: 12},
                    {text: 'French', value: 13},
                    {text: 'Portuguese', value: 14},
                    {text: 'Healthy', value: 15},
                    {text: 'Vegan', value: 16},
                    {text: 'Candyshop', value: 17},
                    {text: 'Regional', value: 18},
                ],
                logInDataIsWrong: false,
                currentPage: 1
            }
        },
        created() {
            loadUserInfo(this.userID)
                .then(response => {
                    this.$store.dispatch('restaurant/setRestaurant', response.data.restaurant.restaurant)
                    // this.$store.dispatch('discount/setDiscounts', response.data.restaurant.discounts)
                    if (response.data.restaurant.restaurant) {
                        this.loadRestaurantData()
                    }

                })
                .catch(error => {
                    console.log(error)
                })

        },
        methods: {
            loadRestaurantData() {
                loadRestaurant(this)
                    .then(response => {
                        this.$store.dispatch('restaurant/setRestaurant', response.data)
                        this.form = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            submitRestaurantData(evt) {
                evt.preventDefault();

                this.form.ownerId = this.userID
                this.form.gpsPosition.latitude = parseFloat(this.form.gpsPosition.latitude)
                this.form.gpsPosition.longitude = parseFloat(this.form.gpsPosition.longitude)

                this.form.sundaySchedule.isOpen = (this.form.sundaySchedule.isOpen === 'true')
                this.form.mondaySchedule.isOpen = (this.form.mondaySchedule.isOpen === 'true')
                this.form.tuesdaySchedule.isOpen = (this.form.tuesdaySchedule.isOpen === 'true')
                this.form.wednesdaySchedule.isOpen = (this.form.wednesdaySchedule.isOpen === 'true')
                this.form.thursdaySchedule.isOpen = (this.form.thursdaySchedule.isOpen === 'true')
                this.form.fridaySchedule.isOpen = (this.form.fridaySchedule.isOpen === 'true')
                this.form.saturdaySchedule.isOpen = (this.form.saturdaySchedule.isOpen === 'true')

                submitRestaurant(this.form)
                    .then(response => {
                        alert('Changed with success!')
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            deleteRestaurantById() {
                deleteRestaurant(this.$store.getters['restaurant/getRestaurant'].restaurantId)
                    .then(response => {
                        alert('Deleted with success!')
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