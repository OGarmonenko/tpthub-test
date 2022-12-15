<template>
  <section>
    <div class="wrapper-images">
      <div class="image-block" v-for="(path, i) in paths" :key="i">
        <img :src="path" alt="photo" class="image" height="200px" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ImageBlock.vue",
  props: {
    paths: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style scoped>
.wrapper-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}
.image {
  margin: 10px;
}
</style>
