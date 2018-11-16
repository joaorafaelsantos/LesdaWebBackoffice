/**
 * @author João Santos <up201809187@fe.up.pt>
 */

const newLanguage = (language) => {
    return language === 'pt-PT' ? 'en-GB' : 'pt-PT'
}

export const language = {
    computed: {
      currentLanguage() {
          return this.$store.getters['language/getLanguage']
      }
    },
    methods: {
        changeLanguage() {
            const language = newLanguage(this.currentLanguage)
            this.$store.dispatch('language/changeLanguage', language)
            this.$i18n.set(language)
        }
    }
}
 