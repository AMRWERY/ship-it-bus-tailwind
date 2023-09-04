import { getDocs, collection, query, getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";

const state = {
  users: [],
};

const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
  setSelectedUsers(state, user) {
    state.selectedProduct = user;
  },
};

const actions = {
  async fetchUsers({ commit }) {
    const querySnap = await getDocs(query(collection(db, "users")));
    let users = [];
    querySnap.forEach((doc) => {
      let user = {
        // id: doc.id,
        ...doc.data(doc.id),
      };
      users.push(user);
    });
    commit("setUsers", users);
  },
  async getUserById({ commit }, id) {
    const docSnap = await getDoc(doc(db, "users", id));
    if (docSnap.exists()) {
      commit("setSelectedUsers", docSnap.data());
    }
  },
};

const getters = {
  getAllUsers: (state) => state.users,
  getSelectedUser: (state) => state.selectedUser,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
