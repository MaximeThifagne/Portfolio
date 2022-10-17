<template>
  <div>
    <v-form id="sign-up-form">
      <v-text-field v-model="email" type="email"></v-text-field>
      <v-text-field v-model="password" type="password"></v-text-field>
      <v-btn color="primary" @click="signUp">Test</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: new String(),
      password: new String(),
    };
  },
  methods: {
    signUp() {
      this.$notification.open({
        type: "success",
        message: "Oui tu t'es bien connecter",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#sign-up-form {
  width: 20%;
  margin: auto;
}
</style>
