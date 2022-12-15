<template>
  <section class="page-wrapper">
    <div
      v-for="pageNumber in totalPage"
      :key="pageNumber"
      class="page"
      :class="{ 'current-page-active': currentPage === pageNumber }"
      @click="handleClick(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Pagination",
  components: {},
  props: {
    totalPage: {
      type: Number,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handleClick(item: number) {
      this.$emit("onClick", item);
    },
  },
});
</script>

<style scoped>
.page-wrapper {
  display: flex;
  margin-top: 15px;
  width: 300px;
  gap: 10px;
}
.page {
  border: 1px solid teal;
  padding: 10px;
  cursor: pointer;
}

.current-page-active {
  border: 3px solid teal;
  padding: 10px;
}
</style>
