<template>
  <div class="card">
    <Skeleton v-if="isLoading" />
    <div v-else>
      <OutlinedBtn @onClick="toMainPage">
        {{ backBtn }}
      </OutlinedBtn>
      <DetailsCard :obj="selectedRecord" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import CONSTANTS from "@/constants/constants";
import OutlinedBtn from "@/components/shared/OutlinedBtn.vue";
import DetailsCard from "@/components/site/DetailsPage/DetailsCard/DetailsCard.vue";
import Skeleton from "@/components/shared/Skeleton.vue";

interface IDetailsPageData {
  backBtn: string;
}

export default Vue.extend({
  name: "DetailsPage",
  components: {
    Skeleton,
    DetailsCard,
    OutlinedBtn,
  },
  data(): IDetailsPageData {
    return {
      backBtn: CONSTANTS.TITLE_BUTTON.backBtn,
    };
  },
  methods: {
    ...mapActions("recordsModule", {
      readSelectedRecords: "READ_SELECTED_RECORD",
    }),
    toMainPage(): void {
      this.$router.push({ path: CONSTANTS.ROUTES.MAIN_PATH });
    },
  },
  computed: {
    ...mapGetters("recordsModule", {
      selectedRecord: "SELECTED_RECORD",
      isLoading: "IS_LOADING",
      Error: "ERROR",
    }),
  },
  async mounted() {
    await this.readSelectedRecords(this.$route.params.id);
  },
});
</script>

<style scoped></style>
