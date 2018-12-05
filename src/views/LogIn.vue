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
                    <p v-if="logInDataIsWrong" class="text-danger mb-4">
                        Incorrect email or password.
                    </p>
                    <b-button type="submit" variant="primary">Log in</b-button>
                </b-form>

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

    export default {
        name: "LogIn",
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
                // this.logInDataIsWrong = true
                if (1 === 1) {
                    this.$store.commit('authentication/changeIsAuth', true)
                    alert(`Welcome ${this.form.username}`)
                    this.$router.push('/restaurant')
                }
                // logIn(this.form)
                //     .then(response => {
                //
                // })
                //     .catch(error => {
                //
                //     })
            }
        }
    }
</script>

<style scoped>

</style>