import Vue from 'vue'
import Vuex from 'vuex'

import dashboard from './dashboard'
import detail from './details'
import { getSearchResult } from '@/api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dashboard,
    detail
  },
  state: {
    results: [],
    error: ''
  },
  mutations: {
    UPDATE_RESULT(state, payload) {
      state.results = payload
    },
    CLEAR(state) {
      state.results = []
    },
    ERRORS(state, payload) {
      state.error = payload
    }
  },
  actions: {
    getResult({ commit }, payload) {
      getSearchResult(payload)
        .then(res => {
          commit('UPDATE_RESULT', res)
        })
        .catch(error => {
          commit('ERRORS', error)
        })
    },
    clearResult({ commit }) {
      commit('CLEAR')
    }
  },
  getters: {
    getResult: state => {
      return state.results
    }
  }
})
