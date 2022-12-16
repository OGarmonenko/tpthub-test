<template>
  <thead class="table-header">
    <tr>
      <th class="table-header-column" v-for="(item, i) in arr" :key="i">
        {{ item }}
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: "HeaderTable",
  props: {
    arr: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.table-header {
  color: teal;
  font-size: 18px;
}
</style>
