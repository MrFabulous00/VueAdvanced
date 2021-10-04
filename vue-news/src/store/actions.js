import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchList,
  fetchUserInfo,
  fetchCommentItem,
} from '../api/index.js';

export default {
  // promise
  // FETCH_NEWS({ commit }) {
  //   return fetchNewsList()
  //     .then((response) => {
  //       commit('SET_NEWS', response.data);
  //       return response;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },

  // async
  async FETCH_NEWS({ commit }) {
    try {
      const reponse = await fetchNewsList();
      commit('SET_NEWS', response.data);
      return reponse;
    } catch (error) {
      console.log(error);
    }
  },

  async FETCH_JOBS({ commit }) {
    try {
      const response = await fetchJobsList();
      commit('SET_JOBS', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async FETCH_ASK({ commit }) {
    const response = await fetchAskList();
    commit('SET_ASK', response.data);
    return response;
  },

  async FETCH_USER({ commit }, name) {
    try {
      const response = await fetchUserInfo(name);
      commit('SET_USER', data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ITEM({ commit }, id) {
    try {
      const response = await fetchCommentItem(id);
      commit('SET_ITEM', data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit('SET_LIST', data);
    return response;
  },
};
