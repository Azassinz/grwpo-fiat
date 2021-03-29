<template>
  <div class="row">
    <v-col cols="12" class="d-flex pb-0">
      <label :for="name" class="pl-4 label-title">{{ title }}</label>
    </v-col>
    <v-col cols="12" class="py-0">
      <div class="dropdown-container">
        <select
          :name="name"
          :id="name"
          class="combobox"
          required
          v-model="seleccion"
          @change="$emit('update:seleccion', seleccion)"
        >
          <option
            v-for="(option, i) in options"
            :key="i"
            :value="option.value"
            :disabled="option.disabled"
            >{{ option.text }}</option
          >
        </select>
        <i class="arrow down"></i>
      </div>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "FormCombo",
  props: {
    name: String,
    title: String,
    options: Array,
  },
  data: () => ({
    seleccion: "",
  }),
  mounted: function() {
    this.seleccion = this.options[0].value;
  },
};
</script>

<style scoped>
.label-title {
  color: #666;
  font-size: 12px;
  text-transform: uppercase;
}

.dropdown-container {
  position: relative;
}

.combobox {
  padding: 0 42px 0 0.83333em;
  margin-top: 1px;
  font-size: 1em;
  font-weight: 700;
  letter-spacing: 0.125em;
  line-height: 39px;
  border: 1px solid;
  border-color: #fe0000;
  border-radius: 0;
  display: inline-block;
  cursor: pointer;
  width: 100%;
  height: 40px;
}
.combobox:focus {
  outline: #fe0000;
}

.arrow {
  border: solid #666;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  position: absolute;
  top: 15px;
  right: 15px;
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>
