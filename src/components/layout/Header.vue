<template>
  <div class="wrapper-header">
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.wrapper-header {
  width: 100%;
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
}
.title {
  font-size: 22px;
  color: #ffffff;
}
</style>
