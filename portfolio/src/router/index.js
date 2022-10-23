import Vue from "vue";
import VueRouter from "vue-router";
import i18n from "../i18n";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:locale",
    name: "locale",
    component: {
      template: "<router-view/>",
    },
    children: [
      {
        path: "home",
        name: "home",
        component: load("HomeView"),
      },
      {
        path: "project",
        name: "project",
        component: load("ProjectView"),
      },
      {
        path: "skill",
        name: "skill",
        component: load("SkillsView"),
      },
      {
        path: "signUp",
        name: "signUp",
        component: load("SignUp"),
      },
      {
        path: "signIn",
        name: "signIn",
        component: load("SignIn"),
      },
    ],
    beforeEach: (to, from, next) => {
      const locale = to.params.locale;
      console.log(locale);
      const supported_locales =
        process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(","); // 2
      if (!supported_locales.includes(locale)) return next("fr"); // 3
      if (i18n.locale !== locale) {
        i18n.locale = locale;
      }
      return next();
    },
  },
  {
    path: "*",
    redirect() {
      return process.env.VUE_APP_I18N_LOCALE + "/home";
    },
  },
];

function load(component) {
  console.log(component);
  return () => import(`../views/${component}.vue`);
}

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
