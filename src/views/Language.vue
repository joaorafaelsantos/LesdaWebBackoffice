<!--
* @author João Santos <up201809187@fe.up.pt>
-->

<template>
    <div class="about text-center">
        <br>
        <h5>
            {{ $t('pages.language.current') }} {{ currentLanguage }}
        </h5>
        <br>
        <ChangeLanguageButton></ChangeLanguageButton>
    </div>
</template>

<script>
    // Mixins
    import { language } from '../mixins/language/language'

    // Components
    import ChangeLanguageButton from '../components/Language/ChangeLanguageButton'

    export default {
        name: 'Language',
        mixins: [language],
        components: {
            ChangeLanguageButton
        }
    }
</script>