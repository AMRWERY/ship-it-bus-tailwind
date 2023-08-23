import { getDocs, collection, query, addDoc, deleteDoc, doc } from "firebase/firestore";
import db from "@/firebase/config";

const state = {
  categories: [],
};

const mutations = {
  setCategories(state, categories) {
    state.categories = categories;
  },
  removeCategory(state, categoryId) {
    state.categories = state.categories.filter(
      (category) => category.id !== categoryId
    );
  },
};

const actions = {
  async fetchCategories({ commit }) {
    const querySnap = await getDocs(query(collection(db, "categories")));
    let categories = [];
    querySnap.forEach((doc) => {
      let cat = {
        id: doc.id,
        ...doc.data(doc.id),
      };
      categories.push(cat);
    });
    commit("setCategories", categories);
  },
  async addCategory({ state }, data) {
    const colRef = collection(db, "categories");
    const docRef = await addDoc(colRef, data);
    console.log("Document was created with ID:", docRef.id);
  },
  async deleteCategory({ commit }, category) {
    try {
      await deleteDoc(doc(db, "categories", category.id));
      commit("removeCategory", category.id);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  },
};

const getters = {
  getAllCategories: (state) => state.categories,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
