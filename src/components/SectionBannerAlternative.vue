<template>
  <v-row class="justify-center no-gutters">
    <v-col cols="3" class="justify-end d-none d-sm-flex align-center pr-1 py-0">
      <hr class="separator" />
    </v-col>
    <v-col cols="auto" class="d-flex justify-center px-0 py-0">
      <h2 class="section-title">{{ title }}</h2>
    </v-col>
    <v-col cols="3" class="justify-start d-none d-sm-flex align-center pl-1 py-0">
      <hr class="separator" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SectionBanner",
  props: {
    title: String,
  },
};
</script>

<style scoped>
.section-title {
  font-family: "Playfair Display", serif;
  color: black;
  font-size: 1em;
  font-weight: 700;
  text-transform: uppercase;
}

.separator {
  border: 1px solid black;
  width: 30%;
}
</style>
