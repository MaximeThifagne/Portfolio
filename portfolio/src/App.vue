<template>
  <v-app id="app">
    <nav>
      <div class="d-flex justify-space-between">
        <div class="align-self-start mt-2">
          <router-link :to="{ name: 'home', params: { lang: $i18n.locale } }">{{
            $t("nav.HOME")
          }}</router-link>
          |
          <router-link
            :to="{ name: 'about', params: { lang: $i18n.locale } }"
            >{{ $t("nav.ABOUT") }}</router-link
          >
          |
          <router-link
            :to="{ name: 'signIn', params: { lang: $i18n.locale } }"
            >{{ $t("common.SIGN_IN") }}</router-link
          >
          |
          <router-link
            :to="{ name: 'signUp', params: { lang: $i18n.locale } }"
            >{{ $t("nav.SIGN_UP") }}</router-link
          >
        </div>
        <div class="switcher align-self-end">
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
    <router-view class="content"></router-view>
    <FooterView />
  </v-app>
</template>

<script>
import LocaleSwitcher from "./components/LocaleSwitcher.vue";
import FooterView from "./views/FooterView.vue";
export default {
  name: "App",
  components: { LocaleSwitcher, FooterView },
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
  padding: 20px 20px 0px 20px;
  width: 100%;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.switcher {
  width: 150px;
}

.content {
  min-height: calc(100vh - 86px) !important;
}
</style>
