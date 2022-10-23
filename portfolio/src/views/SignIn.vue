<template>
  <div
    class="sign-in d-flex flex-wrap flex-direction-column justify-space-around"
  >
    <v-card flat class="sign-in-card align-self-center">
      <v-card-title class="justify-center">
        <h2>{{ $t("common.SIGN_IN") }}</h2></v-card-title
      >
      <v-card-subtitle class="mt-4">
        {{ $t("signin.NEW_HERE") }}
        <a @click="goTosignUp">{{ $t("signin.CREATE_ACCOUNT") }}</a>
      </v-card-subtitle>
      <v-form>
        <v-text-field
          v-model="email"
          outlined
          :label="emailLabel"
          type="email"
          class="ml-4 mr-4"
        ></v-text-field>
        <v-text-field
          v-model="password"
          outlined
          :label="passwordLabel"
          class="ml-4 mr-4"
          :type="passwordType"
        >
          <v-icon slot="append" @click="changeShowPassword">
            {{ passwordIcon }}
          </v-icon>
        </v-text-field>
        <div class="ml-4 mr-4">
          <v-btn
            class="mb-4 sign-in-btn"
            block
            rounded
            large
            color="primary"
            @click="signIn"
          >
            {{ $t("common.SIGN_IN") }}
          </v-btn>
        </div>
        <div
          class="d-flex flex-direction-column justify-space-between mt-8 mb-4"
        >
          <v-btn class="ml-4 social-btn google-btn" rounded large>
            <img class="google-logo" :src="googleSvg" alt="Google logo" />
          </v-btn>
          <v-btn class="social-btn facebook-btn" rounded large>
            <v-icon large>mdi-facebook</v-icon>
          </v-btn>
          <v-btn class="mr-4 social-btn apple-btn" rounded large>
            <v-icon large>mdi-apple</v-icon>
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: new String(),
      password: new String(),
      showPassword: false,
      googleSvg: require("./../assets/google.svg"),
    };
  },
  computed: {
    passwordIcon() {
      if (this.showPassword == true) {
        return "mdi-eye-off";
      } else {
        return "mdi-eye";
      }
    },
    passwordType() {
      if (this.showPassword == true) {
        return "text";
      } else {
        return "password";
      }
    },
    emailLabel() {
      return this.$t("common.EMAIL") + " *";
    },
    passwordLabel() {
      return this.$t("common.PASSWORD") + " *";
    },
  },
  methods: {
    goTosignUp() {
      this.$router.push({
        name: "signUp",
        params: { lang: this.$i18n.locale },
      });
    },
    signIn() {
      this.$notification.open({
        type: "success",
        message: "Oui tu t'es bien connecter",
      });
      this.$router.push({
        name: "home",
        params: { lang: this.$i18n.locale },
      });
    },
    changeShowPassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style lang="scss" scoped>
.sign-in {
  width: 100%;
  height: 100%;
  background-color: rgb(250, 244, 235);
  background-size: 100% 100%;
  background-position: center;
  background-image: url("@/assets/background.png");
}

.sign-in-text {
  width: 40%;
}

.sign-in-card {
  width: 40%;
}

.social-btn {
  flex-basis: 30%;
}

.google-btn {
  background-color: antiquewhite !important;
}

.facebook-btn {
  background-color: #4267b2 !important;

  .v-icon {
    color: white;
  }
}

.apple-btn {
  background-color: black !important;
  transition: all 0.2s;

  .v-icon {
    color: white;
  }
}

.apple-btn:hover {
  background-color: rgb(58, 58, 58) !important;
  transition: all 0.2s;
}

.google-logo {
  width: 33px;
}

a {
  text-decoration: none;
  color: #ffa500;
}

a:hover {
  text-decoration: underline;
  color: orangered;
}

a:visited {
  text-decoration: none;
}

@media screen and (max-width: 800px) {
  .sign-in-card {
    width: 80%;
  }
}

@media screen and (max-width: 550px) {
  .sign-in-card {
    width: 100%;
  }
}
</style>
