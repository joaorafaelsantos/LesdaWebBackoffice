<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="display mb-3">Sign up</h1>
                <b-form @submit="onSignUp" validate="true">
                    <!-- First Name -->
                    <b-form-group id="inpGrpFirstName">
                        <b-form-input id="inpFirstName"
                                      type="text"
                                      v-model="form.firstName"
                                      required
                                      placeholder="Enter your first name">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="inpGrpLastName">
                        <b-form-input id="inpLastName"
                                      type="text"
                                      v-model="form.lastName"
                                      required
                                      placeholder="Enter your last name">
                        </b-form-input>
                    </b-form-group>
                    <!-- Email -->
                    <b-form-group id="inpGrpEmail">
                        <b-form-input id="inpEmail"
                                      type="email"
                                      v-model="form.email"
                                      required
                                      placeholder="Enter your email">
                        </b-form-input>
                    </b-form-group>
                    <!-- Username -->
                    <b-form-group id="inpGrpUsername">
                        <b-form-input id="inpUsername"
                                      type="text"
                                      v-model="form.username"
                                      required
                                      placeholder="Enter your username">
                        </b-form-input>
                    </b-form-group>
                    <!-- Password -->
                    <b-form-group id="inpGrpPassword">
                        <b-form-input id="inpPassword"
                                      type="password"
                                      pattern=".{6,}"
                                      v-model="form.password"
                                      required
                                      placeholder="Enter your password">
                        </b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Sign up</b-button>
                </b-form>

                <div class="auth-options mt-3">
                    <p>Already have an account?
                        <router-link to="/login">
                            Log in
                        </router-link>
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {signUp} from '../mixins/authentication/signUp'

    export default {
        name: "SignUp",
        mixins: [signUp],
        data() {
            return {
                form: {
                    firstName: '',
                    lastName: '',
                    username: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            onSignUp(evt) {
                evt.preventDefault();

                if (this.form.firstName && this.form.lastName && this.form.username && this.form.email && this.form.password) {
                    this.signUp(this.form)
                        .then(response => {
                            alert('Account created!')
                            this.$router.push('/login')
                        })
                        .catch(error => {
                            console.log(error)
                        })
                }


            }
        }
    }
</script>

<style scoped>

</style>