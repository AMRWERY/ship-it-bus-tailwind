import { createStore } from "vuex";

import products from "./modules/products";
import categories from "./modules/categories";
import deal from "./modules/deal";

const store = createStore({
  modules: {
    products,
    categories,
    deal,
  },
});

export default store;