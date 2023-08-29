import { collection, addDoc, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase/config";

const state = {
  // title: "",
  // price: "",
  // categories: "",
  // discount: "",
  // productImg: "",
  deals: [],
};

const mutations = {
  setNewDeal(state, deals) {
    state.deals = deals;
  },
};

const actions = {
  async addNewDeal({ state }, data) {
    const colRef = collection(db, "todayDeal");
    const docRef = await addDoc(colRef, data);
    console.log("Document was created with ID:", docRef.id);
  },
  // async fetchDeals({ commit }) {
  //   const querySnap = await getDocs(query(collection(db, "todayDeal")));
  //   let deals = [];
  //   querySnap.forEach((doc) => {
  //     let deal = {
  //       id: doc.id,
  //       ...doc.data(doc.id),
  //     };
  //     deals.push(deal);
  //   });
  //   commit("setNewDeal", deals);
  // },
  async fetchDeals({ commit }) {
    console.log("Fetching deals...");
    const querySnap = await getDocs(query(collection(db, "todayDeal")));
    let deals = [];
    querySnap.forEach((doc) => {
      let deal = {
        id: doc.id,
        ...doc.data(),
      };
      deals.push(deal);
    });
    console.log("Fetched deals:", deals);
    commit("setNewDeal", deals);
  },
};

const getters = {
  getAllDeals: (state) => state.deals,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
