<template>
  <v-app id="app">
    <Header :title="titleProject" />
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/layout/Header.vue";
import CONSTANTS from "@/constants/constants";

interface IAppData {
  titleProject: string;
}

export default Vue.extend({
  components: { Header },
  data(): IAppData {
    return {
      titleProject: CONSTANTS.NAME_PROJECT,
    };
  },
});
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
