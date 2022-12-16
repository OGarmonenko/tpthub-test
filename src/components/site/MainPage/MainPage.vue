<template>
  <div class="wrapper-main">
    <Skeleton v-if="isLoading" />
    <div v-else>
      <ProductsTable :arr="listRecords" />
      <div class="wrapper-footer">
        <Pagination
          :totalPage="totalPage"
          :currentPage="currentPage"
          @onClick="changePage"
        />
        <CustomSelect
          :setLimit="selectedLimit"
          :options="optionsArr"
          @change="changeLimit"
          :title="selectTitle"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
import ProductsTable from "@/components/site/MainPage/ProductsTable/ProductsTable.vue";
import Skeleton from "@/components/shared/Skeleton.vue";
import CONSTANTS from "@/constants/constants";
import CustomSelect from "@/components/shared/CustomSelect.vue";
import Pagination from "@/components/shared/Pagination.vue";

export default Vue.extend({
  name: "MainPage",
  components: { CustomSelect, Skeleton, ProductsTable, Pagination },
  data() {
    return {
      selectedLimit: CONSTANTS.COUNT_ITEMS_ON_PAGE[0],
      optionsArr: CONSTANTS.COUNT_ITEMS_ON_PAGE,
      selectTitle: CONSTANTS.COUNT_ON_PAGE,
    };
  },
  methods: {
    ...mapActions("recordsModule", {
      readListRecords: "READ_LIST_RECORDS",
    }),
    ...mapMutations("recordsModule", {
      setCurrentPage: "SET_CURRENT_PAGE",
      setLimit: "SET_LIMIT",
    }),
    changePage(page: number) {
      this.setCurrentPage(page);
      this.updateTable(this.selectedLimit, page);
    },

    changeLimit(item: string): void {
      this.setLimit(item);
      this.selectedLimit = +item;
      this.updateTable(+item, this.currentPage);
    },

    async updateTable(limit: number, page: number) {
      try {
        const skip = limit * page - limit;
        await this.readListRecords({ limit: limit, skip: skip });
      } catch (err) {
        console.log(err);
      }
    },
  },
  watch: {},
  computed: {
    ...mapGetters("recordsModule", {
      listRecords: "LIST_RECORDS",
      isLoading: "IS_LOADING",
      Error: "ERROR",
      totalPage: "TOTAL_PAGE",
      currentPage: "CURRENT_PAGE",
    }),
  },
  async mounted() {
    await this.readListRecords({
      limit: CONSTANTS.COUNT_ITEMS_ON_PAGE[0],
      skip: 0,
    });
  },
});
</script>

<style scoped>
.wrapper-main {
  padding: 40px 20px;
}
.wrapper-footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
}
</style>
