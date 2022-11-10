<template>
  <div v-if="experienceDetail" class="projectDetail">
    <v-card>
      <div class="logo">
        <v-img :src="require('../assets/' + experienceDetail.src)"> </v-img>
      </div>
    </v-card>
    <h1>{{ experienceDetail.title }}</h1>
    <h2>
      Date de la mission : {{ experienceDetail.date.start }} -
      {{ experienceDetail.date.end }}
    </h2>
    <v-btn @click="goToProjectList"> Retour à la liste des projets </v-btn>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      experience: null,
    };
  },
  computed: {
    experienceDetail() {
      return this.experience;
    },
  },
  mounted() {
    axios.get("/static/experience.json").then((res) => {
      console.log(res.data);
      console.log(this.$route.params.id);
      this.experience = res.data.experiences.find(
        (ex) => ex.id == this.$route.params.id
      );
    });
  },
  methods: {
    goToProjectList() {
      this.$router.push({
        name: "project",
        params: { locale: this.$i18n.locale },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.projectDetail {
  width: 100%;
  height: 100%;
  background-color: rgb(250, 244, 235);
  background-size: 100% 100%;
  background-position: center;
  background-image: url("@/assets/background.png");
}

.logo {
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
</style>
