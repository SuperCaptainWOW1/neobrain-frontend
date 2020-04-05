export default {
  state: {
    loggedIn: false,
    userData: {
      username: 'Oleg',
      friends: [
        // Schema
        // {
        //   username: String,
        //   roomId: String,
        // },
      ],
    },
  },
  getters: {
    getUsername(state) {
      return state.userData.username;
    },
  },
  actions: {
    logOut({ commit }) {
      commit('SET_LOGGEDIN_STATUS', false);
    },
    authenticate({ commit }, { username, password }) {
      if (username === 'Oleg' && password === '123') {
        commit('SET_LOGGEDIN_STATUS', true);
      }
    },
  },
  mutations: {
    SET_LOGGEDIN_STATUS(state, status) {
      console.log(state);
      state.loggedIn = status;
    },
  },
};
