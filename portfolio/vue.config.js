const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  runtimeCompiler: true,
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "fr",
      localeDir: "locales",
      enableInSFC: false,
      enableBridge: false,
    },
  },
});
