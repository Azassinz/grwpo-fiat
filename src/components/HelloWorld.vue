<template>
  <v-container>
    <v-row class="text-center mb-12">
      <v-col cols="12">
        <p style="color: white">Cotizador</p>
      </v-col>
      <section-banner-alternative title="Citadino, Aventurero, Deportivo" />
      <v-col cols="12">
        <h1 class="cta-title">Elige el tuyo</h1>
      </v-col>

      <v-col cols="12">
        <v-img
          :src="require('../assets/500L Trekking.png')"
          class="mx-auto"
          contain
          width="400"
        />
      </v-col>

      <v-col class="form-container px-2 px-sm-7 mx-0 mx-sm-4 mx-md-0">
        <v-row class="mt-16 mx-0">
          <v-col cols="12" sm="6">
            <form-combo
              name="modelo"
              title="Modelo"
              :options="modelos"
              :seleccion.sync="seleccionModelo"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <form-combo
              name="version"
              title="Versión"
              :options="versiones[modelos[seleccionModelo].name]"
              :seleccion.sync="form.version"
            />
          </v-col>
        </v-row>
        <v-row class="mx-0">
          <v-col cols="12" sm="6">
            <form-combo
              name="estado"
              title="Estado"
              :options="estados"
              :seleccion.sync="form.estado"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <form-combo
              name="distribuidor"
              title="Distribuidor"
              :options="municipios[form.estado]"
              :seleccion.sync="form.municipio"
            />
          </v-col>
        </v-row>
        <section-banner
          title="Datos personales"
          subtitle="Escribe tus datos personales"
        />
        <v-row class="mx-0">
          <v-col cols="12" sm="4">
            <form-input
              name="nombre"
              label="Nombre(s)"
              placeholder="Escribe tu nombre"
            />
          </v-col>
          <v-col cols="12" sm="4">
            <form-input
              name="paterno"
              label="Apellido paterno"
              placeholder="Escribe tu apellido"
            />
          </v-col>
          <v-col cols="12" sm="4">
            <form-input
              name="materno"
              label="Apellido materno"
              placeholder="Escribe tu apellido"
            />
          </v-col>
        </v-row>
        <v-row class="mx-0">
          <v-col cols="12" sm="4">
            <form-input
              name="email"
              label="Email"
              placeholder="correo@email.com.mx"
            />
          </v-col>
          <v-col cols="12" sm="4">
            <form-input
              name="telefono"
              label="Teléfono"
              placeholder="01 . 844 . 439 . 0654"
            />
          </v-col>
        </v-row>
        <form-selector
          title="Deseo ser contactado por"
          :options="metodosContacto"
        />
        <section-banner
          title="Forma de pago"
          subtitle="personaliza tu cotización"
        />
        <v-row class="justify-center mx-0">
          <v-col cols="12" sm="10" class="px-0">
            <form-selector
              title="Elije tu tipo de pago"
              :options="formasPago"
            />
          </v-col>
          <v-col cols="12" sm="10">
            <v-row class="justify-center">
              <v-col cols="12" sm="6">
                <form-input
                  name="enganche"
                  label="Cantidad de enganche"
                  placeholder="80,000"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <form-combo
                  name="plazo"
                  title="Plazo"
                  :options="plazos"
                  :seleccion.sync="form.plazo"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <section-banner
          title="Comentarios"
          subtitle="nos importan tus comentarios"
        />
        <form-text-area
          name="comentarios"
          title="¿Dudas?  ¿Comentarios?"
          placeholder="Escríbenos"
        />
        <v-row class="mb-8 mx-0">
          <v-col cols="12" sm="6">
            <v-row class="no-gutters">
              <v-col cols="12" class="justify-start d-flex">
                <label class="label">
                  <input type="checkbox" checked="checked" />
                  He léido y acepto el
                  <a href="avisodeprivacidad">
                    aviso de privacidad
                  </a>
                  <span class="checkmark"></span>
                </label>
              </v-col>
              <v-col cols="12" class="justify-start d-flex">
                <label class="label">
                  <input type="checkbox" />
                  No deseo recibir promociones
                  <span class="checkmark"></span>
                </label>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="6" class="d-flex align-end">
            <v-row class="no-gutters justify-center justify-sm-end">
              <button class="form-btn">Enviar</button>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FormCombo from "./FormCombo.vue";
import FormInput from "./FormInput.vue";
import FormSelector from "./FormSelector.vue";
import FormTextArea from "./FormTextArea.vue";
import SectionBanner from "./SectionBanner.vue";
import SectionBannerAlternative from "./SectionBannerAlternative.vue";

import listaMunicipios from "../assets/Municipios.json";

export default {
  name: "HelloWorld",
  components: {
    FormCombo,
    SectionBanner,
    FormInput,
    FormSelector,
    FormTextArea,
    SectionBannerAlternative,
  },

  data: () => ({
    seleccionModelo: 0,
    form: {
      modelo: "",
      version: "",
      estado: "Selecciona",
      municipio: "",
      plazo: "",
      terms: false,
      promo: false,
    },
    modelos: [
      {
        text: "Selecciona",
        name: "selecciona",
        value: 0,
        disabled: true,
      },
      {
        text: "Fiat 500L",
        name: "500l",
        value: 1,
        disabled: false,
      },
      {
        text: "Mobi",
        name: "mobi",
        value: 2,
        disabled: false,
      },
      {
        text: "Uno",
        name: "uno",
        value: 3,
        disabled: false,
      },
    ],
    versiones: {
      selecciona: [
        {
          text: "Selecciona",
          name: "selecciona",
          disabled: true,
        },
      ],
      "500l": [
        {
          text: "Selecciona",
          name: "selecciona",
          disabled: true,
        },
        {
          text: "500L Trekking",
          value: "trekking",
        },
      ],
      mobi: [
        {
          text: "Selecciona",
          name: "selecciona",
          disabled: true,
        },
        {
          text: "Mobi Easy",
          value: "easy",
        },
        {
          text: "Mobi Like",
          value: "like",
        },
        {
          text: "Mobi Trekking",
          value: "trekking",
        },
      ],
      uno: [
        {
          text: "Selecciona",
          name: "selecciona",
          disabled: true,
        },
        {
          text: "Uno Way",
          value: "way",
        },
        {
          text: "Uno Sporting",
          value: "Sporting",
        },
        {
          text: "Uno Like",
          value: "like",
        },
      ],
    },
    estados: [
      { value: "Selecciona", text: "Selecciona", disabled: true },
      { value: "AGUASCALIENTES", text: "AGUASCALIENTES" },
      { value: "BAJA CALIFORNIA", text: "BAJA CALIFORNIA" },
      { value: "BAJA CALIFORNIA SUR", text: "BAJA CALIFORNIA SUR" },
      { value: "CHIHUAHUA", text: "CHIHUAHUA" },
      { value: "CHIAPAS", text: "CHIAPAS" },
      { value: "CAMPECHE", text: "CAMPECHE" },
      { value: "CIUDAD DE MEXICO", text: "CIUDAD DE MEXICO" },
      { value: "COAHUILA", text: "COAHUILA" },
      { value: "COLIMA", text: "COLIMA" },
      { value: "DURANGO", text: "DURANGO" },
      { value: "GUERRERO", text: "GUERRERO" },
      { value: "GUANAJUATO", text: "GUANAJUATO" },
      { value: "HIDALGO", text: "HIDALGO" },
      { value: "JALISCO", text: "JALISCO" },
      { value: "MICHOACAN", text: "MICHOACAN" },
      { value: "ESTADO DE MEXICO", text: "ESTADO DE MEXICO" },
      { value: "MORELOS", text: "MORELOS" },
      { value: "NAYARIT", text: "NAYARIT" },
      { value: "NUEVO LEON", text: "NUEVO LEON" },
      { value: "OAXACA", text: "OAXACA" },
      { value: "PUEBLA", text: "PUEBLA" },
      { value: "QUINTANA ROO", text: "QUINTANA ROO" },
      { value: "QUERETARO", text: "QUERETARO" },
      { value: "SINALOA", text: "SINALOA" },
      { value: "SAN LUIS POTOSI", text: "SAN LUIS POTOSI" },
      { value: "SONORA", text: "SONORA" },
      { value: "TABASCO", text: "TABASCO" },
      { value: "TLAXCALA", text: "TLAXCALA" },
      { value: "TAMAULIPAS", text: "TAMAULIPAS" },
      { value: "VERACRUZ", text: "VERACRUZ" },
      { value: "YUCATAN", text: "YUCATAN" },
      { value: "ZACATECAS", text: "ZACATECAS" },
    ],
    municipios: listaMunicipios[0],
    distribuidores: [
      { text: "Distribuidor 1", value: "Distribuidor 1" },
      { text: "Distribuidor 2", value: "Distribuidor 2" },
      { text: "Distribuidor 3", value: "Distribuidor 3" },
      { text: "Distribuidor 4", value: "Distribuidor 4" },
      { text: "Distribuidor 5", value: "Distribuidor 5" },
    ],
    metodosContacto: [
      { text: "teléfono", value: "telefono", icon: "mdi-phone" },
      { text: "email", value: "email", icon: "mdi-email" },
      { text: "ambos", value: "ambos", icon: "" },
    ],
    formasPago: [
      { text: "contado", value: "contado", icon: "" },
      { text: "crédito", value: "credito", icon: "" },
    ],
    plazos: [
      { text: "12 Meses", value: "12" },
      { text: "18 Meses", value: "18" },
      { text: "24 Meses", value: "24" },
      { text: "36 Meses", value: "36" },
      { text: "48 Meses", value: "48" },
      { text: "60 Meses", value: "60" },
      { text: "72 Meses", value: "72" },
    ],
  }),
  watch: {
    seleccionModelo: function(value) {
      this.form.modelo = this.modelos[value].name;
    },
  },
};
</script>

<style scoped>
.cta-title {
  color: white;
  font-family: "Playfair Display", serif;
  font-size: 6em;
  font-style: italic;
  font-weight: 900;
  line-height: 100px;
}

@media (max-width: 600px) {
  .cta-title {
    font-size: 2.5em;
    line-height: 50px;
  }
}

.form-container {
  background-color: white;
  margin-top: -65px;
}

.form-btn {
  color: #666;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid #fe0000;
  height: 40px;
  padding: 0 25px;
  width: auto;
}

a {
  color: #666 !important;
}

.label {
  color: #666;
  font-size: 0.9em;
  position: relative;
  padding-left: 30px;
  margin-top: 30px;
}

.label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 23px;
  width: 23px;
  border: 1px solid #c5c5c5;
}
.checkmark::after {
  content: "";
  position: absolute;
  display: none;
}
.label input:checked ~ .checkmark:after {
  display: block;
}
.label .checkmark::after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid #666;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
