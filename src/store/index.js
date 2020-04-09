import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
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
      chats: [
        { id: 1, friendName: 'Senya', lastMessage: 'Bruh, you bruhBruh, you bruhBruh, you bruhBruh, you bruhBruh, you bruhBruh, you bruhBruh, you bruhBruh, you bruh' },
        {
          id: 2, friendName: 'Andruxa', lastMessage: 'Bruh, you bruh', messages: [{ time: '21:05', content: 'Bruh, you bruhBruh, you bruhBruh, you bruhBruh, you bruhBruh, you bruhBruh, you bruhBruh, you bruhBruh, you bruh', author: 'Oleg' }, { time: '21:07', content: 'u', author: 'Andruxa' }],
        },
        { id: 3, friendName: 'Eugene', lastMessage: 'Bruh, you bruh' },
        { id: 4, friendName: 'Roma Bext', lastMessage: 'Bruh, you bruh' },
        { id: 5, friendName: 'Lox max', lastMessage: 'Bruh, you bruh' },
        { id: 6, friendName: 'Chuvak', lastMessage: 'Bruh, you bruh' },
        { id: 7, friendName: 'Chuvak', lastMessage: 'Bruh, you bruh' },
        { id: 8, friendName: 'Chuvak', lastMessage: 'Bruh, you bruh' },
      ],
    },
    activeChatId: null,
  },
  getters: {
    getUsername(state) {
      return state.userData.username;
    },
    getChats(state) {
      return state.userData.chats;
    },
    getActiveChatId(state) {
      return state.activeChatId;
    },
    getActiveChatData(state) {
      if (state.activeChatId) {
        return state.userData.chats.find((c) => c.id === state.activeChatId);
      }
      return false;
    },
  },
  actions: {
    logOut({ commit }) {
      sessionStorage.clear();
      commit('SET_LOGGEDIN_STATUS', false);
    },
    authenticate({ commit }, { username, password }) {
      if (username === 'Oleg' && password === '123') {
        commit('SET_LOGGEDIN_STATUS', true);
      }
    },
    chooseChat({ commit }, id) {
      commit('SET_ACTIVE_CHAT_ID', id);
    },
  },
  mutations: {
    SET_LOGGEDIN_STATUS(state, status) {
      state.loggedIn = status;
    },
    SET_ACTIVE_CHAT_ID(state, id) {
      state.activeChatId = id;
    },
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
});
