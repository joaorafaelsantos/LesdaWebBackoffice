<!--
* @author João Santos <up201809187@fe.up.pt>
-->

<template>
    <div id="app"
         class="root has-background">
        <AppMenu></AppMenu>
        <router-view/>
    </div>
</template>

<script>

    import AppMenu from './views/AppMenu'

    export default {
        components: {
            AppMenu
        }
    }

</script>

<style lang="scss">

    @import "assets/scss/main";

    html {
        height: 100vh;
    }
    body {
        min-height: 100vh;
    }

    .has-background {
        background-image: url("./assets/images/backgrounds/background.jpg");
        min-height: 100vh;
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

</style>
