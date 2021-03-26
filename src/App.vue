<template>
  <v-app>
    <v-app-bar app color="primary">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2 mt-8 mt-xl-10 "
          contain
          :src="require('./assets/logo-fiat.png')"
          transition="scale-transition"
          width="60"
        />
      </div>

      <v-spacer></v-spacer>

      <v-col
        cols="auto"
        v-for="(item, i) in listItems"
        :key="i"
        class="item px-8"
      >
        {{ item.name }}
      </v-col>

      <v-icon class="pl-8" color="secondary">mdi-menu</v-icon>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    listItems: [
      { name: 'Modelos', ref: '' },
      { name: 'Prueba de manejo', ref: '' },
      { name: 'Cotizar', ref: '' },
      { name: 'Promociones', ref: '' },
      { name: 'Distribuidores', ref: '' },
    ],
  }),
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i,900,900i|Playfair+Display:400,400i,700,700i,900,900i');
#app {
  background: linear-gradient(-10deg, #fe0000 50%, #4957d1 50%);
  font-family: 'Lato', sans-serif;
}

.item {
  font-weight: 700;
  text-transform: uppercase;
}
</style>
