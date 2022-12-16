<template>
  <v-col class="d-flex" cols="12" sm="6">
    <v-select :items="items" label="Count on page" dense outlined></v-select>
  </v-col>
</template>

<script>
export default {
  name: "OutlinedSelect",
};
</script>

<style scoped></style>
