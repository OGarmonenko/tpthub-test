<template>
  <table class="wrapper-table">
    <thead class="table-header">
      <tr>
        <th
          class="table-header-column"
          v-for="(item, i) in tableHeaders"
          :key="i"
        >
          {{ item }}
        </th>
      </tr>
    </thead>
    <tbody class="table-body">
      <tr
        v-for="(obj, i) in arr"
        :key="i"
        @click="handleClick(obj)"
        @mouseover="setHighlightRow(i)"
        :class="{ 'hovered-row': i === hoveredRow }"
      >
        <td>{{ obj.title }}</td>
        <td>{{ obj.description }}</td>
        <td>{{ obj.price }}</td>
        <td>{{ obj.rating }}</td>
        <td>{{ obj.stock }}</td>
        <td>{{ obj.brand }}</td>
        <td>{{ obj.category }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import CONSTANTS from "@/constants/constants";
import Vue from "vue";
import { IRecord } from "@/models/models";

export default Vue.extend({
  name: "ProductsTable",
  data() {
    return {
      tableHeaders: CONSTANTS.TABLE_HEADERS,
      hoveredRow: -1,
    };
  },
  props: {
    arr: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleClick(item: IRecord): void {
      this.$emit("onClick", item.id);
    },
    setHighlightRow(index: number): void {
      this.hoveredRow = index;
    },
  },
});
</script>

<style scoped lang="scss">
.wrapper-table {
  width: 100%;
  border-collapse: collapse;
  .table-header-column,
  .td {
    border: 2px solid grey;
    padding: 10px;
  }
  td {
    border: 1px solid grey;
    padding: 10px;
  }
  .hovered-row {
    background: #c3d6ee;
  }
  .table-body {
    cursor: pointer;
  }
  .table-header {
    color: darkblue;
    font-size: 18px;
  }
}
</style>
