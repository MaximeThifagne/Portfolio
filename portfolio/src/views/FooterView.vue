<template>
  <div class="footer d-flex flex-column">
    <div class="d-flex flex-row justify-center">
      <!-- <div class="ml-12 mr-12">
        <h3>Découvrez moi</h3>
        <ul>
          <li>Mes projets</li>
          <li>Ceci est bien</li>
          <li>Ceci aussi</li>
        </ul>
      </div>
      <div class="ml-12 mr-12">
        <h3>Suivez moi</h3>
        <ul>
          <li>Sa c'est bien aussi</li>
          <li>Et pourquoi pas ça ?</li>
          <li>Ou alors ceci sinon</li>
        </ul>
      </div> -->
    </div>
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
    <div class="d-flex flex-inline justify-center pt-4">
      <div class="copyright d-flex flex-inline mr-12 ml-12">
        <div>
          <v-icon small>mdi-copyright</v-icon>
          <span>2022 MAXIME THIFAGNE</span>
        </div>
      </div>
      <div class="terms mr-12 ml-12">
        <a class="uppercase">{{ $t("common.TERMS") }}</a>
      </div>
      <div class="private mr-12 ml-12">
        <a class="uppercase">{{ $t("common.PRIVACY") }}</a>
      </div>
      <div class="cookies mr-12 ml-12">
        <a class="uppercase">{{ $t("common.COOKIES") }}</a>
      </div>
      <div class="siteplan mr-12 ml-12">
        <a class="uppercase">{{ $t("common.PLAN") }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>
