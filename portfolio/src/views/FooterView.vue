<template>
  <div class="footer d-flex flex-column">
    <div class="d-flex flex-row justify-center"></div>
    <div class="social-network d-flex flex-inline justify-center">
      <a
        target="_blank"
        href="https://www.facebook.com/MaximeThifagneFreelance/"
        ><v-icon large>mdi-facebook</v-icon></a
      >
      <a target="_blank" href="https://twitter.com/freelance_tm"
        ><v-icon large>mdi-twitter</v-icon></a
      >
      <a
        target="_blank"
        href="https://www.linkedin.com/in/maxime-thifagne-70063a8b/"
        ><v-icon large>mdi-linkedin</v-icon></a
      >
      <a target="_blank" href="https://github.com/MaximeThifagne"
        ><v-icon large>mdi-github</v-icon></a
      >
    </div>
    <div>
      <v-row class="mt-4">
        <v-col cols="12" sm="6" md="2">
          <div class="ml-4">
            <v-icon small>mdi-copyright</v-icon>
            <span>2022 MAXIME THIFAGNE</span>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <div class="terms">
            <a class="uppercase">{{ $t("common.TERMS") }}</a>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <div class="private">
            <a class="uppercase">{{ $t("common.PRIVACY") }}</a>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <div class="cookies">
            <a class="uppercase">{{ $t("common.COOKIES") }}</a>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <div class="siteplan">
            <a class="uppercase">{{ $t("common.PLAN") }}</a>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <LocaleSwitcher class="switcher" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher.vue";
export default { components: { LocaleSwitcher } };
</script>

<style lang="scss" scoped>
.footer {
  background-color: lightgray;
}

.social-network {
  margin-top: 20px;
  .v-icon {
    margin-left: 10px;
    margin-right: 10px;
  }
}

a {
  text-decoration: none;
  color: #2c3e50 !important;
}

a:hover {
  text-decoration: none;
  color: darkgray !important;

  .v-icon {
    color: darkgray !important;
  }
}

ul {
  margin-bottom: 20px;
  li {
    list-style: none;
    text-align: left;
  }
}

h3 {
  margin-top: 20px;
}

.uppercase {
  text-transform: uppercase;
}

.switcher {
  max-width: 150px !important;
  margin-top: -10px !important;
}
</style>
