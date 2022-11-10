<template>
  <div class="projects">
    <h1>Mes projets</h1>
    <v-container fluid>
      <v-row class="row" dense>
        <v-col
          class="col"
          v-for="card in experiences"
          :key="card.title"
          lg="3"
          md="4"
          xs="8"
        >
          <v-hover v-slot="{ hover }">
            <v-card class="card">
              <v-img
                :src="require('../assets/' + card.src)"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,0.3)"
                height="200px"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text"
                    style="height: 100%"
                    @click="goToDetail(card)"
                  >
                    Read more !
                  </div>
                </v-expand-transition>
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>

              <v-card-actions>
                <div
                  v-for="technology in card.technologies"
                  :key="technology.label"
                  class="mr-2"
                >
                  <v-icon class="mr-1" :color="technology.color">{{
                    technology.icon
                  }}</v-icon>
                  <span>{{ technology.label }}</span>
                </div>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    dialog: false,
    experiences: [],
  }),
  mounted() {
    axios.get("/static/experience.json").then((res) => {
      this.experiences = res.data.experiences;
    });
  },
  methods: {
    goToDetail(card) {
      console.log(card);
      this.$router.push({
        name: "projectDetail",
        params: { locale: this.$i18n.locale, id: card.id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.projects {
  width: 100%;
  height: 100%;
  background-color: rgb(250, 244, 235);
  background-size: 100% 100%;
  background-position: center;
  background-image: url("@/assets/background.png");
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
  cursor: pointer;
}

.row {
  margin-left: 20px;
  margin-right: 20px;
}

.col {
  margin-top: 10px;
}

.card {
  margin: 5px;
}
</style>
