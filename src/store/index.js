import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
  },
});
