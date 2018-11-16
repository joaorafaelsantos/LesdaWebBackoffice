<!--
* @author João Santos <up201809187@fe.up.pt>
-->

<template>
  <div id="app"
       class="root has-background">
    <div class="menu">
      <router-link to="/">
        {{ $t('pages.home.name') }}
      </router-link> |
      <router-link to="/language">
        {{ $t('pages.language.name') }}
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "assets/scss/main";

  body, html {
    height: 100%;
  }

  .has-background {
    background-image: url("./assets/images/backgrounds/background.jpg");
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .root {
    font-family: $family-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $white;
  }

  .menu {
    text-align: center;
    padding: 50px;
    a {
      font-weight: bold;
      color: $white;
      &.router-link-exact-active {
        color: $red;
      }
    }
    a:hover {
      color: $blue;
    }
  }
</style>
