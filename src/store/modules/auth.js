import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  getAuth,
  updatePassword,
  getIdToken,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/firebase/config";
import router from "@/router";

const state = {
  isAuthenticated: false,
  isLoading: false,
  username: "",
  email: "",
  password: "",
  userToken: null,
  isUserLoggedIn: false,
};

const mutations = {
  setIsAuthenticated(state, payload) {
    state.isAuthenticated = payload;
  },
  setUserToken(state, payload) {
    state.userToken = payload;
  },
  setIsUserLoggedIn(state, value) {
    state.isUserLoggedIn = value;
  },
  userLogout(state, payload) {
    state.isAuthenticated = payload;
  },
  setLoading(state, payload) {
    state.isLoading = payload;
  },
  setUsername(state, payload) {
    state.username = payload;
  },
  setUserEmail(state, payload) {
    state.email = payload;
  },
  setUserPassword(state, payload) {
    state.password = payload;
  },
};

const actions = {
  userSignIn({ commit, dispatch }, payload) {
    commit("setLoading", true);
    const { email, password, router } = payload;
    const adminEmail = "amrmounir2@gmail.com";
    if (email === adminEmail) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          commit("setLoading", false);
          const user = userCredential.user;
          commit("setIsAuthenticated", true);
          commit("setUsername", user.displayName);
          router.replace("/");
          sessionStorage.setItem("username", user.displayName);
          sessionStorage.setItem("email", user.email);
          sessionStorage.setItem("password", password);
          dispatch("updateUserProfile", { username: user.displayName });
          getIdToken(user).then((token) => {
            commit("setUserToken", token);
            sessionStorage.setItem("userToken", token);
          });
        })
        .catch((error) => {
          commit("setLoading", false);
          console.log(error);
        });
    } else {
      commit("setLoading", false);
      throw new Error("Invalid admin email");
    }
  },

  initAuthentication({ commit }) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        user.getIdToken().then((token) => {
          commit("setUserToken", token);
          commit("setIsUserLoggedIn", true);
        });
      } else {
        commit("setUserToken", null);
        commit("setIsUserLoggedIn", false);
      }
    });
  },
  logout({ commit }) {
    commit("setLoading", true);
    signOut(auth)
      .then(() => {
        commit("userLogout", false);
        commit("setUserToken", null);
        sessionStorage.clear();
        router.replace("/login");
      })
      .catch((error) => {
        commit("setLoading", false);
        console.log(error);
      });
  },
  async resetUserPassword({ commit }, payload) {
    commit("setLoading", true);
    const { email } = payload;
    try {
      await sendPasswordResetEmail(auth, email);
      commit("setLoading", false);
    } catch (error) {
      commit("setLoading", false);
      console.log(error);
    }
  },
  async updateUserProfile({ commit }, payload) {
    commit("setLoading", true);
    const { username, password } = payload;
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        if (username) {
          await updateProfile(user, {
            displayName: username,
          }).then((userProfile) => {
            // console.log(userProfile);
          });
        }
        if (password) {
          await updatePassword(user, password);
        }
        commit("setLoading", false);
      }
    } catch (error) {
      commit("setLoading", false);
      console.log(error);
    }
  },
};

const getters = {
  isAuthenticated: (state) => {
    return state.isAuthenticated;
  },
  isLoading: (state) => {
    return state.isLoading;
  },
  getUsername(state) {
    return state.username;
  },
  getUserEmail(state) {
    return state.email;
  },
  getUserPassword(state) {
    return state.password;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
