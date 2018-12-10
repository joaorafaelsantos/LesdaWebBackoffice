<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col">
                <h1 class="display mb-3">Log in</h1>
                <b-form @submit="onLogIn" validate="true">
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
                                      v-model="form.password"
                                      required
                                      placeholder="Enter your password">
                        </b-form-input>
                    </b-form-group>
                    <!-- Incorrect data label -->
                    <p v-if="logInDataIsWrong" class="text-danger mb-4">
                        Incorrect email or password.
                    </p>
                    <!-- Submit button -->
                    <b-button type="submit" variant="primary">Log in</b-button>
                </b-form>

                <!-- Secondary options -> Sign up link -->
                <div class="auth-options mt-3">
                    <p>Don’t have an account?
                        <router-link to="/signup">
                            Sign up
                        </router-link>
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {logIn} from '../mixins/authentication/logIn'
    import jwtDecode from 'jwt-decode'

    export default {
        name: "LogIn",
        mixins: [logIn],
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                },
                logInDataIsWrong: false
            }
        },
        methods: {
            onLogIn(evt) {
                evt.preventDefault();
                this.logInDataIsWrong = false

                this.logIn(this.form)
                    .then(response => {
                        this.$store.dispatch('authentication/setToken', response.data)
                        alert(`Welcome ${this.form.username}`)
                        this.$router.push('/restaurant')
                    })
                    .catch(error => {
                        this.logInDataIsWrong = true
                    })
            }
        }
    }
</script>

<style scoped>

</style>