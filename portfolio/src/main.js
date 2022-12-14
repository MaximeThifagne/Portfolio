import Vue from "vue";
import App from "./App.vue";
import Notification from "./notyf";
import vuetify from "./plugins/vuetify";
import router from "./router";
import i18n from "./i18n";

Vue.config.productionTip = false;

Vue.prototype.$notification = Notification;

new Vue({
  vuetify,
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
