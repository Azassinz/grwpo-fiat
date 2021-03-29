<template>
  <div class="row mx-0">
    <v-col cols="12" class="d-flex pb-0">
      <label :for="name" class="pl-4 label-title">{{ title }}</label>
    </v-col>
    <v-col cols="12" class="py-0">
      <textarea
        type="text"
        :id="name"
        :name="name"
        class="input pl-4 pt-2"
        :placeholder="placeholder"
      />
    </v-col>
  </div>
</template>

<script>
export default {
  name: "SectionBanner",
  props: {
    name: String,
    title: String,
    placeholder: String,
  },
};
</script>

<style scoped>
.label-title {
  color: #666;
  font-size: 12px;
  text-transform: uppercase;
}

.input {
  color: black;
  height: 160px;
  width: 100%;
  font-size: 1em;
  font-weight: 700;
  box-sizing: border-box;
  border: 1px solid #fe0000;
  border-radius: 0;
}
.input::placeholder {
  color: #666;
  text-transform: uppercase;
  font-size: 1em;
}

@media (max-width: 600px) {
  .input {
    height: 80px;
  }
}
</style>
