<template>
  <div class="wrapper-select">
    <label class="label-select">{{ title }} </label>
    <select class="custom-select" @change="changeOption">
      <option>{{ selectedOption }}</option>
      <option v-for="(opt, i) in optionsArr" :key="i" :value="opt">
        {{ opt }}
      </option>
    </select>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "CustomSelect",
  props: {
    setLimit: { type: Number },
    options: { type: Array },
    title: String,
  },
  methods: {
    changeOption(e) {
      this.$emit("change", e.target.value);
    },
  },
  computed: {
    selectedOption() {
      return this.setLimit;
    },
    optionsArr() {
      return this.options.filter((el) => el !== this.setLimit);
    },
  },
});
</script>

<style scoped>
.wrapper-select {
  display: flex;
  align-items: center;
  gap: 8px;
}
.custom-select {
  padding: 0 10px;
  border: 1px solid teal;
  height: 50px;
  outline: none;
  font-size: 15px;
}
</style>
