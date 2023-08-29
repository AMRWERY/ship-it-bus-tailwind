import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase/config";

const state = {
  sales: [],
};

const mutations = {
  setProductSales(state, sales) {
    state.sales = sales;
  },
};

const actions = {
  async fetchProductSales({ commit }) {
    const querySnap = await getDocs(query(collection(db, "sales")));
    let sales = [];
    querySnap.forEach((doc) => {
      let pro = {
        id: doc.id,
        // ...doc.data(doc.id),
        ...doc.data(),
      };
      sales.push(pro);
    });
    commit("setProductSales", sales);
  },
};

const getters = {
  getAllProductsSales: (state) => state.sales,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
