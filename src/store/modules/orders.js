import { getDocs, collection, query, getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";

const state = {
  orders: [],
};

const mutations = {
  setOrders(state, orders) {
    state.orders = orders;
  },
  setSelectedOrder(state, order) {
    state.selectedProduct = order;
  },
};

const actions = {
  async fetchOrders({ commit }, userId) {
    const querySnap = await getDocs(query(collection(db, "orders")));
    let orders = [];
    querySnap.forEach((doc) => {
      let order = {
        id: doc.id,
        ...doc.data(),
      };
      orders.push(order);
    });

    const filteredOrders = orders.filter((order) => order.userId == userId);
    console.log(filteredOrders, userId);
    commit("setOrders", filteredOrders);
  },
};

const getters = {
  getAllOrders: (state) => state.orders,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
