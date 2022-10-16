import Vue from "vue";
import App from "./App.vue";
import Notification from "./notyf";

Vue.config.productionTip = false;

Vue.prototype.$notification = Notification;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
