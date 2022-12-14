<template>
  <v-btn class="ma-2" outlined color="indigo" @click="setClick">
    <slot></slot>
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "OutlinedBtn",
  methods: {
    setClick(): void {
      this.$emit("onClick");
    },
  },
});
</script>

<style scoped></style>
