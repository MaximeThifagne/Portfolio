<template>
  <div
    class="sign-up d-flex flex-wrap flex-direction-column justify-space-around"
  >
    <v-card flat class="sign-up-card align-self-start mt-16">
      <v-card-title class="justify-center">
        <h2>{{ $t("signup.SIGN_UP") }}</h2></v-card-title
      >
      <v-card-subtitle class="mt-4">
        {{ $t("signup.HAS_ACCOUNT") }}
        <a @click="goToSignIn">{{ $t("common.SIGN_IN") }}</a>
      </v-card-subtitle>
      <v-form>
        <v-text-field
          v-model="firstName"
          outlined
          :label="firstNameLabel"
          type="text"
          class="ml-4 mr-4"
        ></v-text-field>
        <v-text-field
          v-model="lastName"
          outlined
          :label="lastNameLabel"
          type="text"
          class="ml-4 mr-4"
        ></v-text-field>
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
            class="mb-4 sign-up-btn"
            block
            rounded
            large
            color="primary"
            @click="signUp"
          >
            {{ $t("signup.SIGN_UP") }}
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
      <v-card-subtitle>
        {{ $t("signup.CONTINUING") }}
        <a href="#">{{ $t("signup.TERMS") }}</a> {{ $t("common.AND") }}
        <a href="#">{{ $t("signup.PRIVACY") }}</a>
      </v-card-subtitle>
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
    firstNameLabel() {
      return this.$t("common.FIRST_NAME") + " *";
    },
    lastNameLabel() {
      return this.$t("common.LAST_NAME") + " *";
    },
    emailLabel() {
      return this.$t("common.EMAIL") + " *";
    },
    passwordLabel() {
      return this.$t("common.PASSWORD") + " *";
    },
  },
  methods: {
    goToSignIn() {
      this.$router.push({
        name: "signIn",
        params: { lang: this.$i18n.locale },
      });
    },
    signUp() {
      this.$notification.open({
        type: "success",
        message: "Account created sucessfully, you con now sign in",
      });

      this.$router.push({
        name: "signIn",
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
.sign-up {
  width: 100%;
  height: 100%;
  background-color: rgb(250, 244, 235);
  background-size: 100% 100%;
  background-position: center;
  background-image: url("@/assets/background.png");
}

.sign-up-text {
  width: 40%;
}

.sign-up-card {
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
</style>
