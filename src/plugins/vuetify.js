import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#ffffff',
        secondary: '#CD2F32',
        accent: '#FE0000',
        error: '#FF5252',
        info: '#4957D1',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
});
