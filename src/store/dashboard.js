import { getAllShows } from '@/api/api'
import { sortTvSHow } from '@/utils/common'

export default {
  namespaced: true,
  state: {
    allTvShows: []
  },
  mutations: {
    ALL_TV_SHOWS(state, payload) {
      state.allTvShows = payload
    }
  },
  actions: {
    getTvShows({ commit }) {
      getAllShows().then(res => {
        commit('ALL_TV_SHOWS', res)
      })
    }
  },
  getters: {
    getAllTvShows: state => {
      return state.allTvShows.sort(sortTvSHow) // sorting All TV Shows using external function. "sortTvSHow"
    }
  }
}
