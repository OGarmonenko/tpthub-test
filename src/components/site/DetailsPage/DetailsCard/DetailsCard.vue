<template>
  <section>
    <CardHeader
      :path="obj?.thumbnail"
      :title="obj?.title"
      :description="obj?.description"
    />
    <List v-if="Object.keys(obj).length > 0" :obj="obj" :arr="arr" />
    <ImageBlock :paths="obj?.images" />
  </section>
</template>

<script lang="ts">
import CONSTANTS from "@/constants/constants";
import Vue from "vue";
import List from "@/components/shared/List.vue";
import ImageBlock from "@/components/shared/ImageBlock.vue";
import CardHeader from "@/components/shared/CardHeader.vue";

export default Vue.extend({
  name: "DetailsCard",
  components: { CardHeader, ImageBlock, List },
  data() {
    return {
      arr: CONSTANTS.CARD_LABELS,
      show: false,
    };
  },
  props: {
    obj: {
      type: Object,
    },
  },
});
</script>

<style scoped></style>
