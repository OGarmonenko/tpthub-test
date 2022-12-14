<template>
  <div class="wrapper-main">
    <p>Main Page</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "MainPage",
  methods: {
    ...mapActions("recordsModule", {
      readListRecords: "READ_LIST_RECORDS",
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
