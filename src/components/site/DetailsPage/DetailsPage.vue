<template>
  <div class="card">
    <p>DetailsPage</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "DetailsPage",
  components: {},
  methods: {
    ...mapActions("recordsModule", {
      readSelectedRecords: "READ_SELECTED_RECORD",
    }),
  },
  async mounted() {
    await this.readSelectedRecords(1);
  },
});
</script>
