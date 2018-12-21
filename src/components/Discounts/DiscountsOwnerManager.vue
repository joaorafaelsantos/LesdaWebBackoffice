<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="toggle-buttons-section mb-3">
                    <a class="btn mr-3"
                       :class="isAddDiscountSelected ? 'btn-danger' : 'btn-primary'"
                       @click="isAddDiscountSelected = !isAddDiscountSelected">
                        Show add discount
                    </a>
                    <a v-show="discounts && discounts.length > 0"
                       class="btn mr-3" :class="!isAddDiscountSelected ? 'btn-danger' : 'btn-primary'"
                       @click="isAddDiscountSelected = !isAddDiscountSelected">
                        Show my discounts
                    </a>
                </div>

                <!-- Add discount -->
                <div v-show="isAddDiscountSelected" class="add-discounts-section">
                    <h1 class="display mb-3">Add discount</h1>
                    <b-form @submit="submitNewDiscont" validate="true">
                        <!-- Name -->
                        <b-form-group id="inpGrpTitle">
                            <b-form-input id="inpTitle"
                                          type="text"
                                          v-model="form.newDiscount.title"
                                          required
                                          placeholder="Enter your discount title">
                            </b-form-input>
                        </b-form-group>

                        <!-- Image -->
                        <b-form-group id="inpGrpImage">
                            <b-form-input id="inpImage"
                                          type="text"
                                          v-model="form.newDiscount.imageUri"
                                          placeholder="Enter your discount image">
                            </b-form-input>
                        </b-form-group>

                        <!-- Value -->
                        <b-form-group id="inpGrpValue">
                            <b-form-input id="inpValue"
                                          type="number"
                                          v-model="form.newDiscount.value"
                                          placeholder="Enter your discount value">
                            </b-form-input>
                        </b-form-group>

                        <!-- Start date -->
                        <label>Start date</label>
                        <b-form-group id="inpGrpStartDate">
                            <date-picker v-model="form.newDiscount.startDate" :config="options"></date-picker>
                        </b-form-group>

                        <!-- End date -->
                        <label>End date</label>
                        <b-form-group id="inpGrpEndDate">
                            <date-picker v-model="form.newDiscount.endDate" :config="options"></date-picker>
                        </b-form-group>

                        <!-- Category -->
                        <label>Category</label>
                        <b-form-group id="sltGrpCategory">
                            <b-form-select id="sltCategory"
                                           :options="categories"
                                           required
                                           v-model="form.newDiscount.categoryId">
                            </b-form-select>
                        </b-form-group>
                        <!-- Description -->
                        <label>Description</label>
                        <b-form-textarea id="txtDescription"
                                         v-model="form.newDiscount.description"
                                         placeholder="Enter your discount description"
                                         :rows="3"
                                         :max-rows="6">
                        </b-form-textarea>

                        <!-- Submit button -->
                        <br>
                        <b-button type="submit" variant="primary" class="mr-2">Add discount</b-button>
                    </b-form>
                </div>
                <br>

                <!-- My discounts -->
                <div class="my-discounts-section" v-if="!isAddDiscountSelected && discounts && discounts.length > 0">
                    <h1 class="display mb-3">My discounts</h1>
                    <div v-for="(discount,index) in discounts">
                        <br>
                        <b-form validate="true">
                            <!-- Name -->
                            <b-form-group id="inpGrpTitle">
                                <b-form-input id="inpTitle"
                                              type="text"
                                              v-model="discount.title"
                                              required
                                              placeholder="Enter your discount title">
                                </b-form-input>
                            </b-form-group>

                            <!-- Image -->
                            <b-form-group id="inpGrpImage">
                                <b-form-input id="inpImage"
                                              type="text"
                                              v-model="discount.imageUri"
                                              placeholder="Enter your discount image">
                                </b-form-input>
                            </b-form-group>

                            <!-- Value -->
                            <b-form-group id="inpGrpValue">
                                <b-form-input id="inpValue"
                                              type="number"
                                              v-model="discount.value"
                                              placeholder="Enter your discount value">
                                </b-form-input>
                            </b-form-group>

                            <!-- Start date -->
                            <label>Start date</label>
                            <b-form-group id="inpGrpStartDate">
                                <date-picker v-model="discount.startDate" :config="options"></date-picker>
                            </b-form-group>

                            <!-- End date -->
                            <label>End date</label>
                            <b-form-group id="inpGrpEndDate">
                                <date-picker v-model="discount.endDate" :config="options"></date-picker>
                            </b-form-group>

                            <!-- Category -->
                            <label>Category</label>
                            <b-form-group id="sltGrpCategory">
                                <b-form-select id="sltCategory"
                                               :options="categories"
                                               required
                                               v-model="discount.categoryId">
                                </b-form-select>
                            </b-form-group>
                            <!-- Description -->
                            <label>Description</label>
                            <b-form-textarea id="txtDescription"
                                             v-model="discount.description"
                                             placeholder="Enter your discount description"
                                             :rows="3"
                                             :max-rows="6">
                            </b-form-textarea>

                            <!-- Submit button -->
                            <br>
                            <b-button @click="changeDiscont(discount)" type="button" variant="primary" class="mr-2">Change discount</b-button>
                            <b-button @click="deleteDiscount(discount, index)" type="button" variant="danger" class="mr-2">Delete discount</b-button>
                        </b-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    // Import this component
    import datePicker from 'vue-bootstrap-datetimepicker';

    // Import date picker css
    import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

    import {submitDiscount, updateDiscount, deleteDiscount} from "../../api/discounts";

    export default {
        name: "DiscountOwnerManager",
        components: {
            datePicker
        },
        data() {
            return {
                isAddDiscountSelected: true,
                form: {
                    newDiscount: {
                        title: null,
                        categoryId: 1,
                        categoryName: null,
                        description: null,
                        imageUri: null,
                        value: null,
                        startDate: new Date(),
                        endDate: new Date()
                    }
                },
                categories: [
                    {text: 'Rodízio', value: 1},
                    {text: 'Desconto', value: 2},
                    {text: 'Combo', value: 3},
                    {text: 'Em Dobro', value: 4},
                    {text: 'Happy Hour', value: 5}
                ],
                options: {
                    format: 'YYYY-MM-DD h:mm:ss',
                    useCurrent: true
                }
            }
        },
        computed: {
            discounts() {
                return this.$store.getters['discounts/getDiscounts']
            }
        },
        methods: {
            submitNewDiscont(evt) {
                evt.preventDefault()

                this.form.newDiscount.value = parseFloat(this.form.newDiscount.value)

                this.form.newDiscount.startDate = new Date(Date.parse(this.form.newDiscount.startDate)).toISOString()
                this.form.newDiscount.endDate = new Date(Date.parse(this.form.newDiscount.endDate)).toISOString()

                submitDiscount(this, this.form.newDiscount)
                    .then(response => {
                        alert('Created with success!')
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            changeDiscont(discount) {
                discount.value = parseFloat(discount.value)

                discount.startDate = new Date(Date.parse(discount.startDate)).toISOString()
                discount.endDate = new Date(Date.parse(discount.endDate)).toISOString()

                updateDiscount(this, discount)
                    .then(response => {
                        alert('Changed with success!')
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            deleteDiscount(discount, index) {
                deleteDiscount(this, discount.discountId)
                    .then(response => {
                        this.discounts.splice(index, 1)
                        alert('Deleted with success!')
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