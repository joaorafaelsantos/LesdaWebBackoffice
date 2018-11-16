<!--
* @author João Santos <up201809187@fe.up.pt>
-->

<template>
  <div class="home text-center">
    <div class="welcome">
      <h1>{{ $t('pages.home.title') }}</h1>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style scoped
       lang="scss">

  .welcome {
    margin-top: 2rem;
  }

</style>
