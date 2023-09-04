import { createStore } from "vuex";

import auth from "./modules/auth";
import products from "./modules/products";
import categories from "./modules/categories";
import deal from "./modules/deal";
import salesCharts from "./modules/salesCharts";
import invoices from "./modules/invoices";
import orders from "./modules/orders";

const store = createStore({
  modules: {
    auth,
    products,
    categories,
    deal,
    salesCharts,
    invoices,
    orders,
  },
});

export default store;
