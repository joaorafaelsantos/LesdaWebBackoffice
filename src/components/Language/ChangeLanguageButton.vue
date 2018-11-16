<!--
* @author João Santos <up201809187@fe.up.pt>
-->

<template>
    <b-button size="sm"
              variant="red"
              @click="changeLanguage('pt')">
        {{ $t('pages.language.change') }}
    </b-button>
</template>

<script>
    // Mixins
    import { language } from '../../mixins/language/language'

    export default {
        name: "ChangeLanguageButton",
        mixins: [language]
    }
</script>

<style lang="scss" scoped>

    @import "../../assets/scss/main";

</style>