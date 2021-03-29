<template>
  <div class="row mx-0">
    <v-col cols="12" class="d-flex pb-0">
      <p class="pl-4 ma-0 label-title">{{ title }}</p>
    </v-col>
    <v-row class="no-gutters px-3 d-flex align-end">
      <v-col
        :cols="12 / options.length"
        v-for="(option, i) in options"
        :key="i"
        class="px-0"
      >
        <button
          :class="{
            active: seleccion === option.value,
            'option-btn': true,
            icon: true,
          }"
          @click="changeSelection(option.value)"
        >
          <v-icon
            x-small
            :class="{
              'active-icon': seleccion === option.value,
              'px-8 pr-sm-6': true,
            }"
            v-if="option.icon"
          >
            {{ option.icon }}
          </v-icon>
          {{ option.text }}
        </button>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "FormSelector",
  props: {
    title: String,
    options: Array,
    icon: String,
  },
  data: () => ({
    seleccion: "",
  }),
  methods: {
    changeSelection: function(value) {
      this.seleccion = value;
    },
  },
  computed: {
    optionBtn: function() {
      return "";
    },
  },
  mounted: function() {
    this.changeSelection(this.options[0].value);
  },
};
</script>

<style scoped>
.label-title {
  color: #666;
  font-size: 12px;
  text-transform: uppercase;
}

.option-btn {
  color: #666;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid #fe0000;
  height: 40px;
  max-height: 40px;
  width: 100%;
}

.active {
  color: white !important;
  background-color: #fe0000;
}

.active-icon {
  color: white !important;
}
</style>
