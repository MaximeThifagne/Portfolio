<template>
  <div class="home">
    <h1>This is an Home page {{ $t("message") }}</h1>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style>
.home {
  width: 100%;
  height: 100%;
  background-color: rgb(250, 244, 235);
  background-size: 100% 100%;
  background-position: center;
  background-image: url("@/assets/background.png");
}
</style>
