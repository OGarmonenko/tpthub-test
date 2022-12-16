<template>
  <div>
    <table class="wrapper-table">
      <HeaderTable :arr="tableHeaders" />
      <tbody class="table-body">
        <tr
          v-for="(obj, i) in arr"
          :key="i"
          @click="handleClick(obj)"
          @mouseover="setHighlightRow(i)"
          :class="{ 'hovered-row': i === hoveredRow }"
        >
          <td>{{ obj?.title }}</td>
          <td>{{ obj?.description }}</td>
          <td>{{ obj?.price }}</td>
          <td>{{ obj?.rating }}</td>
          <td>{{ obj?.stock }}</td>
          <td>{{ obj?.brand }}</td>
          <td>{{ obj?.category }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import CONSTANTS from "@/constants/constants";
import Vue from "vue";
import { IRecord } from "@/models/models";
import { mapActions, mapGetters } from "vuex";
import HeaderTable from "@/components/shared/HeaderTable.vue";

export default Vue.extend({
  name: "ProductsTable",
  components: { HeaderTable },
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
    ...mapActions("recordsModule", {
      readListRecords: "READ_LIST_RECORDS",
      readSelectedRecord: "READ_SELECTED_RECORD",
    }),

    handleClick(item: IRecord) {
      this.readSelectedRecord(item.id);
      this.$router.push({ path: CONSTANTS.ROUTES.DETAILS_PATH + item.id });
    },
    setHighlightRow(index: number): void {
      this.hoveredRow = index;
    },
  },
  computed: {
    ...mapGetters("recordsModule", {
      selectedRecord: "SELECTED_RECORD",
    }),
  },
});
</script>

<style lang="scss">
.wrapper-table {
  width: 100%;
  border-collapse: collapse;

  .table-header-column,
  .td {
    border: 2px solid teal;
    padding: 10px;
  }

  td {
    border: 1px solid teal;
    padding: 10px;
  }

  .hovered-row {
    background: #c3d6ee;
  }

  .table-body {
    cursor: pointer;
  }
}
</style>
