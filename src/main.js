import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//vuex
import store from "./store/index";

// vue-awesome-paginate
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

//vue-datepicker
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

//formkit
import { plugin, defaultConfig } from "@formkit/vue";

//vue-i18n
import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

const app = createApp(App);

const i18n = createI18n({
  locale: localStorage.getItem("currentLang") ?? "en",
  legacy: false,
  messages: {
    en,
    ar,
  },
});

app
  .use(router)
  .use(store)
  .use(VueAwesomePaginate)
  .use(plugin, defaultConfig)
  .component("VueDatePicker", VueDatePicker)
  .use(i18n)
  .mount("#app");
