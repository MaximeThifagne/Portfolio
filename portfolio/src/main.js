import Vue from "vue";
import App from "./App.vue";
import Notification from "./notyf";
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false;

Vue.prototype.$notification = Notification;

new Vue({
  vuetify,
  router,
  render: (h) => h(App)
}).$mount("#app");
