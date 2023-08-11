// src/plugins/vuetify.js
import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@mdi/font/css/materialdesignicons.css";

Vue.component("FontAwesomeIcon", FontAwesomeIcon); // Register component globally
library.add(fas); // Include needed icons
