import { collection, addDoc, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase/config";

const state = {
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
  async fetchDeals({ commit }) {
    try {
      const querySnap = await getDocs(query(collection(db, "todayDeal")));
      let deals = [];
      const today = new Date();
      querySnap.forEach((doc) => {
        const dealData = doc.data();
        const startDate = dealData.startDate.toDate();
        const endDate = dealData.endDate.toDate();
        // debugger;
        if (
          startDate.toDateString() <= today.toDateString() &&
          today.toDateString() <= endDate.toDateString()
        ) {
          let deal = {
            id: doc.id,
            ...dealData,
            endDate: endDate,
          };
          console.log(deal);
          deals.push(deal);
        }
      });
      commit("setNewDeal", deals);
    } catch (error) {
      console.error("Error fetching deals:", error);
    }
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
