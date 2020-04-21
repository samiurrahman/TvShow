import { getShowDetailsById, getShowDetailsSeason } from '@/api/api'

export default {
  namespaced: true,
  state: {
    tvShow: {},
    cast: [],
    season: [],
    loading: false,
    error: ''
  },
  mutations: {
    TV_SHOWS(state, payload) {
      state.tvShow = payload
    },
    TV_SHOWS_CAST(state, payload) {
      state.cast = payload
    },
    TV_SHOWS_SEASON(state, payload) {
      state.season = payload
    },
    LOADING(state, payload) {
      state.loading = payload
    },
    ERRORS(state, payload) {
      state.error = payload
    }
  },
  actions: {
    getTvShowDetailsById({ commit }, payload) {
      commit('LOADING', true)
      getShowDetailsById(payload)
        .then(res => {
          commit('TV_SHOWS', res)
          commit('TV_SHOWS_CAST', res._embedded.cast)
          commit('LOADING', false)
        })
        .catch(error => {
          commit('ERRORS', error)
        })
    },
    getTvShowSeasonDetailsById({ commit }, payload) {
      commit('LOADING', true)
      getShowDetailsSeason(payload)
        .then(res => {
          commit('TV_SHOWS_SEASON', res)
          commit('LOADING', false)
        })
        .catch(error => {
          commit('ERRORS', error)
        })
    }
  },
  getters: {
    getTvShow: state => {
      return state.tvShow
    },
    getTvShowCast: state => {
      return state.cast
    },
    getTvShowSeason: state => {
      return state.season
    },
    loading: state => {
      return state.loading
    }
  }
}
