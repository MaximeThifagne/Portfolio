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
                <v-dialog v-model="dialog" width="500">
                  <template #activator="{ on, attrs }">
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        v-bind="attrs"
                        class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text"
                        style="height: 100%"
                        v-on="on"
                      >
                        Read more !
                      </div>
                    </v-expand-transition>
                  </template>
                  <ProjectDetail :detail="card.detail" />
                </v-dialog>
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
import ProjectDetail from "../components/ProjectDetail.vue";
export default {
  data: () => ({
    dialog: false,
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
        detail: {
          title: "Wekolo",
          date: {
            start: "11/11/2019",
            end: "12/11/2019",
          },
        },
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
        detail: {
          title: "Easily",
          date: {
            start: "11/11/2019",
            end: "12/11/2019",
          },
        },
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
        detail: {
          title: "AST Groupe",
          date: {
            start: "11/11/2019",
            end: "12/11/2019",
          },
        },
      },
    ],
  }),
  components: { ProjectDetail },
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
