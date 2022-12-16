<template>
  <button class="outlinedBtn" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CustomButton",
  methods: {
    handleClick() {
      this.$emit("onClick");
    },
  },
});
</script>

<style scoped lang="scss">
button {
  cursor: pointer;
  color: teal;
  padding: 6px 20px;

  &:hover {
    opacity: 0.6;
    fill-opacity: 0.7;
    stroke-opacity: 0.7;
  }
}
.outlinedBtn {
  border: 1px solid red;
  border-radius: 5px;
  color: red;
  background: none;
  margin: 10px;
}
</style>
