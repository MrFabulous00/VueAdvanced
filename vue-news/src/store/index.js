import Vue from 'vue';
import Vuex from 'vuex';
// import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    item: {},
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedItem(state) {
      return state.item;
    },
  },
  mutations,
  //mutations: {
  //   SET_NEWS(state, news) {
  //     state.news = news;
  //   },
  //   SET_JOBS(state, jobs) {
  //     state.jobs = jobs;
  //   },
  //   SET_ASK(state, ask) {
  //     state.ask = ask;
  //   },
  // },
  actions,
  //actions: {
  //   FETCH_NEWS({ commit }) {
  //     fetchNewsList()
  //       .then((data) => {
  //         // console.log(response.data);
  //         commit('SET_NEWS', data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  //   FETCH_JOBS({ commit }) {
  //     fetchJobsList()
  //       .then((data) => {
  //         // console.log(response);
  //         commit('SET_JOBS', data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  //   FETCH_ASK({ commit }) {
  //     fetchAskList()
  //       .then((data) => {
  //         // console.log(response);
  //         commit('SET_ASK', data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  // },
});
