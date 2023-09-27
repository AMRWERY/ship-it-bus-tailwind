import { createStore } from "vuex";

import auth from "./modules/auth";
import products from "./modules/products";
import categories from "./modules/categories";
import deal from "./modules/deal";
import invoices from "./modules/invoices";
import orders from "./modules/orders";

const store = createStore({
  modules: {
    auth,
    products,
    categories,
    deal,
    invoices,
    orders,
  },
});

export default store;
