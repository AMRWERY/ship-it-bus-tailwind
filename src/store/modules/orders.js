import { getDocs, collection, query, updateDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";

const state = {
  orders: [],
  status: [],
  selectedOrder: null,
};

const mutations = {
  setOrders(state, orders) {
    state.orders = orders;
  },
  setSelectedOrder(state, order) {
    state.selectedProduct = order;
  },
  setOrderStatus(state, status) {
    state.status = status;
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
    commit("setOrders", filteredOrders);
    // commit("setSelectedOrder", filteredOrders[0]);
  },
  async fetchAllOrders({ commit }) {
    const querySnap = await getDocs(query(collection(db, "orders")));
    let orders = [];
    querySnap.forEach((doc) => {
      let order = {
        id: doc.id,
        ...doc.data(),
      };
      orders.push(order);
    });
    commit("setOrders", orders);
  },
  async fetchStatus({ commit }) {
    const querySnap = await getDocs(query(collection(db, "orderTracking")));
    let status = [];
    querySnap.forEach((doc) => {
      let state = {
        id: doc.id,
        ...doc.data(),
      };
      status.push(state);
    });
    commit("setOrderStatus", status);
    console.log(status);
  },
};

const getters = {
  getAllOrders: (state) => state.orders,
  getOrders: (state) => state.orders,
  getOrderById: (state) => (orderId) => {
    return state.orders.find((order) => order.id === orderId);
  },
  getState: (state) => state.status,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
