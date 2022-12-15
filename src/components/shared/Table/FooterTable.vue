<template>
  <section class="footer-table">
    <Pagination
      :totalPage="totalPage"
      :currentPage="currentPage"
      @onClick="handleClick"
    />
    <CustomSelect
      :options="optionsArr"
      @change="setLimit"
      :title="selectTitle"
    />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import CustomSelect from "@/components/shared/CustomSelect.vue";
import Pagination from "@/components/shared/Pagination.vue";

export default Vue.extend({
  name: "FooterTable",
  components: { CustomSelect, Pagination },
  props: {
    selectTitle: {
      type: String,
    },
    optionsArr: {
      type: Array,
    },
    totalPage: {
      type: Number,
    },
    currentPage: {
      type: Number,
    },
  },
  methods: {
    setLimit(item: number) {
      this.$emit("changeLimit", item);
    },
    handleClick(page: number) {
      this.$emit("changePage", page);
    },
  },
});
</script>

<style scoped></style>
