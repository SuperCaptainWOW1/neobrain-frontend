export default {
  state: {
    loggedIn: false,
  },
  actions: {
    logOut({ commit }) {
      commit('SET_LOGGEDIN_STATUS', false);
    },
    authenticate({ commit }) {
      commit('SET_LOGGEDIN_STATUS', true);
    },
  },
  mutations: {
    SET_LOGGEDIN_STATUS(state, status) {
      state.loggedIn = status;
    },
  },
};
