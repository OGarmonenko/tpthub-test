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
    <FooterTable
      :selectTitle="selectTitle"
      :optionsArr="optionsArr"
      @changeLimit="changeLimit"
      @changePage="changePage"
      :totalPage="totalPage"
      :currentPage="currentPage"
    />
  </div>
</template>

<script lang="ts">
import CONSTANTS from "@/constants/constants";
import Vue from "vue";
import { IRecord } from "@/models/models";
import { mapGetters, mapMutations } from "vuex";
import HeaderTable from "@/components/shared/Table/HeaderTable.vue";
import FooterTable from "@/components/shared/Table/FooterTable.vue";

export default Vue.extend({
  name: "ProductsTable",
  components: { FooterTable, HeaderTable },
  data() {
    return {
      tableHeaders: CONSTANTS.TABLE_HEADERS,
      hoveredRow: -1,
      optionsArr: CONSTANTS.COUNT_ITEMS_ON_PAGE,
      selectTitle: CONSTANTS.COUNT_ON_PAGE,
    };
  },
  props: {
    arr: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapMutations("recordsModule", {
      setSelectedRecord: "SET_CURRENT_PAGE",
      setLimit: "SET_LIMIT",
    }),
    changePage(index: number) {
      this.setSelectedRecord(index);
    },
    changeLimit(item: number) {
      this.setLimit(item);
    },
    handleClick(item: IRecord): void {
      this.$router.push({ path: CONSTANTS.ROUTES.DETAILS_PATH + item.id });
    },
    setHighlightRow(index: number): void {
      this.hoveredRow = index;
    },
  },
  computed: {
    ...mapGetters("recordsModule", {
      totalPage: "TOTAL_PAGE",
      currentPage: "CURRENT_PAGE",
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
  .footer-table {
    display: flex;
  }
}
</style>
