<template>
  <div class="projects">
    <h1>Mes projets</h1>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" lg="3" md="4" xs="8">
          <v-hover v-slot="{ hover }">
            <v-card>
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
export default {
  data: () => ({
    cards: [
      {
        title: "Wekolo",
        src: "wekolo.png",
        technologies: [
          {
            icon: "mdi-vuejs",
            label: "Vuejs",
            color: "#42b883",
          },
          {
            icon: "mdi-vuetify",
            label: "Vuetify",
            color: "#1867c0",
          },
        ],
      },
      {
        title: "Easily",
        src: "easily.png",
        technologies: [
          {
            icon: "mdi-vuejs",
            label: "Vuejs",
            color: "#42b883",
          },
          {
            icon: "mdi-vuetify",
            label: "Vuetify",
            color: "#1867c0",
          },
        ],
      },
      {
        title: "AST groupe",
        src: "ast.png",
        technologies: [
          {
            icon: "mdi-vuejs",
            label: "Vuejs",
            color: "#42b883",
          },
          {
            icon: "mdi-vuetify",
            label: "Vuetify",
            color: "#1867c0",
          },
        ],
      },
    ],
  }),
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
</style>
