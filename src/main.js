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

const app = createApp(App);

app
  .use(router)
  .use(store)
  .use(VueAwesomePaginate)
  .use(plugin, defaultConfig)
  .component("VueDatePicker", VueDatePicker)
  .mount("#app");
