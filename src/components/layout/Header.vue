<template>
  <div class="wrapper-header">
    <OutlinedBtn v-if="isDetailsPage" @onClick="toMainPage">
      {{ backBtn }}
    </OutlinedBtn>
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CONSTANTS from "@/constants/constants";
import OutlinedBtn from "@/components/shared/OutlinedBtn.vue";

interface IHeaderData {
  backBtn: string;
}

export default Vue.extend({
  name: "Header",
  components: { OutlinedBtn },
  data(): IHeaderData {
    return {
      backBtn: CONSTANTS.TITLE_BUTTON.backBtn,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    toMainPage(): void {
      this.$router.push({ path: CONSTANTS.ROUTES.MAIN_PATH });
    },
  },
  computed: {
    isDetailsPage(): boolean {
      return this.$route.path === CONSTANTS.ROUTES.DETAILS_PATH;
    },
  },
  mounted() {
    console.log(this.$route.path);
    CONSTANTS.ROUTES.DETAILS_PATH;
  },
});
</script>

<style scoped>
.wrapper-header {
  width: 100%;
  background-color: lavender;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
}
.title {
  font-size: 22px;
  color: #ffffff;
}
</style>
