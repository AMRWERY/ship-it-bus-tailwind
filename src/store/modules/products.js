import {
  collection,
  addDoc,
  getDocs,
  query,
  doc,
  deleteDoc,
} from "firebase/firestore";
import db from "../../firebase/config";

const state = {
  title: "",
  price: "",
  categories: "",
  discount: "",
  productImg: "",
  products: [],
  selectedProduct: null,
};

const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  setSelectedProduct(state, product) {
    state.selectedProduct = product;
  },
  removeProduct(state, productId) {
    state.products = state.products.filter(
      (product) => product.id !== productId
    );
  },
};

const actions = {
  async addProduct({ state }, data) {
    const colRef = collection(db, "products");
    const docRef = await addDoc(colRef, data);
    console.log("Document was created with ID:", docRef.id);
  },
  async fetchProducts({ commit }) {
    const querySnap = await getDocs(query(collection(db, "products")));
    let products = [];
    querySnap.forEach((doc) => {
      let pro = {
        id: doc.id,
        ...doc.data(doc.id),
      };
      products.push(pro);
    });
    commit("setProducts", products);
  },
  async deleteProduct({ commit }, product) {
    try {
      await deleteDoc(doc(db, "products", product.id));
      commit("removeProduct", product.id);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  },
};

const getters = {
  getAllProducts: (state) => state.products,
  getSelectedProduct: (state) => state.selectedProduct,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
