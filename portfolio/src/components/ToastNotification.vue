<template>
  <div>
    <button @click="onClick()">notyification</button>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$notification.open({
        type: "success",
        message: "Ceci est une notification success",
      });
      this.$notification.open({
        type: "information",
        message: "Ceci est une notification information",
      });
      this.$notification.open({
        type: "warning",
        message: "Ceci est une notification warning",
      });
      this.$notification.open({
        type: "error",
        message: "Ceci est une notification qui est une erreur",
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
