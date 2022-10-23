<template>
  <v-app id="app">
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{
            $t("nav." + item.title)
          }}</v-list-item-content>
        </v-list-item>
        <LocaleSwitcher class="switcher" />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"> </v-app-bar-nav-icon>
      </span>
      <v-app-bar-title>
        <router-link
          v-slot="{ navigate }"
          custom
          :to="menuItems[0].path"
          style="cursor: pointer"
        >
          <span role="link" @click="navigate" @keypress.enter="navigate">{{
            appTitle
          }}</span>
        </router-link>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only hidden-sm-only">
        <v-btn v-for="item in menuItems" :key="item.title" text :to="item.path">
          <v-icon left dark> {{ item.icon }}</v-icon>
          {{ $t("nav." + item.title) }}
        </v-btn>
        <LocaleSwitcher class="switcher" />
      </v-toolbar-items>
    </v-app-bar>

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
  data() {
    return {
      appTitle: "Maxime Thifagne",
      sidebar: false,
      menuItems: [
        {
          title: "HOME",
          path: { name: "home", params: { locale: this.$i18n.locale } },
          icon: "mdi-home",
        },
        {
          title: "PROJECT",
          path: { name: "project", params: { locale: this.$i18n.locale } },
          icon: "mdi-folder-account-outline",
        },
        {
          title: "SKILLS",
          path: { name: "skill", params: { locale: this.$i18n.locale } },
          icon: "mdi-head-snowflake-outline",
        },
        {
          title: "SIGN_IN",
          path: { name: "signIn", params: { locale: this.$i18n.locale } },
          icon: "mdi-login",
        },
      ],
    };
  },
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
  margin-top: 10px !important;
  margin-left: 20px !important;
  width: 150px !important;
}

.content {
  margin-top: 64px !important;
  min-height: calc(100vh - 64px) !important;
}

.v-app-bar-title__content {
  width: inherit !important;
}
</style>
