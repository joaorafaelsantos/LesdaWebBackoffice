<!--
* @author João Santos <up201809187@fe.up.pt>
-->

<template>
  <div class="home text-center">
    <div class="welcome">
      <h1 class="mb-50">Welcome to LESDA app</h1>

      <template v-if="!isAuth">
        <router-link to="/signup" class="btn btn-primary mr-3">
          Sign up
        </router-link>

        <router-link to="/login" class="btn btn-danger">
          Log in
        </router-link>
      </template>

      <template v-else>
        <router-link to="/restaurant" class="btn btn-primary mr-3">
          My restaurant
        </router-link>

        <router-link to="/discounts" class="btn btn-danger">
          My discounts
        </router-link>
      </template>

    </div>
  </div>
</template>

<script>
    import { isAuth } from "../mixins/authentication/isAuth";

    export default {
        name: 'Home',
        mixins: [isAuth]
    }
</script>

<style scoped
       lang="scss">

  .welcome {
    margin-top: 2rem;
  }

  .mb-50 {
    margin-bottom: 50px;
  }

</style>
