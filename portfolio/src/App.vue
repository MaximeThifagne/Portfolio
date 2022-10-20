<template>
  <v-app id="app">
    <nav>
      <router-link :to="{ name: 'home', params: { lang: $i18n.locale } }"
        >Home</router-link
      >
      |
      <router-link :to="{ name: 'about', params: { lang: $i18n.locale } }"
        >About</router-link
      >
      |
      <router-link :to="{ name: 'signIn', params: { lang: $i18n.locale } }"
        >Sign Up</router-link
      >
      |
      <router-link :to="{ name: 'signUp', params: { lang: $i18n.locale } }"
        >Sign In</router-link
      >
      <LocaleSwitcher />
    </nav>
    <router-view></router-view>
  </v-app>
</template>

<script>
import LocaleSwitcher from "./components/LocaleSwitcher.vue";
export default {
  name: "App",
  components: { LocaleSwitcher },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
