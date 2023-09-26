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
  isLoading: false,
  username: "",
  email: "",
  password: "",
  userToken: !!sessionStorage.getItem("userToken") || null,
};

const mutations = {
  setUserToken(state, payload) {
    state.userToken = payload;
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
          const user = userCredential.user;
          // commit("setUsername", user.displayName);
          router.replace("/home");
          // sessionStorage.setItem("username", user.displayName);
          sessionStorage.setItem("email", user.email);
          // sessionStorage.setItem("password", password);
          // dispatch("updateUserProfile", { username: user.displayName });
          getIdToken(user).then((token) => {
            commit("setUserToken", token);
            sessionStorage.setItem("userToken", token);
          });
        })
        .catch((error) => {
          console.log(error);
          commit("setUserToken", null);
          sessionStorage.clear();
        })
        .finally(() => {
          commit("setLoading", false);
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
          sessionStorage.setItem("userToken", token);
        });
      } else {
        commit("setUserToken", null);
        sessionStorage.clear();
      }
    });
  },
  logout({ commit }) {
    commit("setLoading", true);
    signOut(auth)
      .then(() => {
        router.replace("/");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        commit("setUserToken", null);
        sessionStorage.clear();
        commit("setLoading", false);
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
          }).then((userProfile) => {});
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
    return !!state.userToken;
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
};

export default {
  state,
  mutations,
  actions,
  getters,
};
