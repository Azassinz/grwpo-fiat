<template>
  <v-row class="justify-center mx-0">
    <v-col cols="3" class="justify-center d-none d-sm-flex align-center pr-1 pb-0">
      <hr class="separator" />
    </v-col>
    <v-col cols="12" sm="auto" class="d-flex justify-center px-0 pb-0">
      <h2 class="section-title">{{ title }}</h2>
    </v-col>
    <v-col cols="3" class="justify-center d-none d-sm-flex align-center pl-1 pb-0">
      <hr class="separator" />
    </v-col>
    <v-col cols="12" class="justify-center d-flex align-center py-0">
      <p class="section-subtitle">{{ subtitle }}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SectionBanner",
  props: {
    title: String,
    subtitle: String,
  },
};
</script>

<style scoped>
.section-title {
  color: #fe0000;
  font-family: "Playfair Display", serif;
  font-size: 3em;
  font-style: italic;
  font-weight: 900;
  line-height: 100px;
}

@media (max-width: 900px) {
  .section-title {
    font-size: 2.5em;
  }
}

@media (max-width: 600px) {
  .section-title {
    font-size: 2em;
  }
}

.section-subtitle {
  color: #666;
  font-size: 12px;
  text-transform: uppercase;
  margin-top: -20px;
}

.separator {
  border: 1px solid #fe0000;
  width: 100%;
}
</style>
