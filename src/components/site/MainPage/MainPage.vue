<template>
  <div class="wrapper-main">
    <Skeleton v-if="isLoading" />
    <ProductsTable v-else :arr="listRecords" @onClick="clickRow" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import ProductsTable from "@/components/site/MainPage/ProductsTable/ProductsTable.vue";
import CONSTANTS from "@/constants/constants";
import Skeleton from "@/components/shared/Skeleton.vue";

export default Vue.extend({
  name: "MainPage",
  components: { Skeleton, ProductsTable },
  methods: {
    ...mapActions("recordsModule", {
      readListRecords: "READ_LIST_RECORDS",
    }),
    clickRow(id: string): void {
      this.$router.push({ path: CONSTANTS.ROUTES.DETAILS_PATH + id });
    },
  },
  computed: {
    ...mapGetters("recordsModule", {
      listRecords: "LIST_RECORDS",
      isLoading: "IS_LOADING",
      Error: "ERROR",
    }),
  },
  async mounted() {
    await this.readListRecords();
  },
});
</script>

<style scoped>
.wrapper-main {
  padding: 40px 20px;
}
</style>
