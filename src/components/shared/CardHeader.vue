<template>
  <section>
    <img :src="path" height="250px" alt="photo" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CardHeader",
  props: {
    path: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
});
</script>

<style scoped></style>
