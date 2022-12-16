<template>
  <section class="wrapper-list">
    <div v-for="(item, i) in arr" :key="i">
      <div class="wrapper-row">
        <div>
          <p class="wrapper-label">{{ item }}</p>
        </div>
        <div>
          <p class="wrapper-item">{{ obj[item.toLowerCase()] }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "List",
  props: {
    obj: {
      type: Object,
      default: () => {},
    },
    arr: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style scoped lang="scss">
.wrapper-row {
  width: 450px;
  border: 2px solid teal;
  margin: 10px 0 0 20px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
}
p {
  margin-bottom: 0;
  display: inline-block;
}
.wrapper-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
