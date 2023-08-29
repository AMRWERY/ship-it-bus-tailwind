import { createStore } from "vuex";

import auth from "./modules/auth";
import products from "./modules/products";
import categories from "./modules/categories";
import deal from "./modules/deal";
import salesCharts from "./modules/salesCharts";

const store = createStore({
  modules: {
    auth,
    products,
    categories,
    deal,
    salesCharts,
  },
});

export default store;
