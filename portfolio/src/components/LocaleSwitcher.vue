<template>
  <v-select
    v-model="locale"
    dense
    outlined
    :items="locales"
    item-text="libelle"
    item-value="code"
    @change="switchLocale"
  >
  </v-select>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data() {
    return {
      locales: [
        {
          code: "fr",
          libelle: "Français",
          icon: "mdi-home",
        },
        {
          code: "en",
          libelle: "English",
          icon: "mdi-home-account",
        },
      ],
      locale: "fr",
    };
  },
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        const to = this.$router.resolve({ params: { locale } });
        this.$router.push(to.location);
      }
    },
  },
};
</script>

<style scoped></style>
