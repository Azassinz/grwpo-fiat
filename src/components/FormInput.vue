<template>
  <div class="row">
    <v-col cols="12" class="d-flex pb-0">
      <label :for="name" class="pl-4 label-title">{{ label }}</label>
    </v-col>
    <v-col cols="12" class="py-0">
      <input
        type="text"
        :id="name"
        :name="name"
        class="input pl-4"
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
    label: String,
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
  height: 40px;
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
</style>
