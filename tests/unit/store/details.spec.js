import {
  getShowDetailsById,
  getShowDetailsSeason
} from '@/api/api'
import store from "@/store/details";
// Mock module with Jest mock functions
jest.mock('@/api/api')

describe('In store', () => {
  describe('In mutations', () => {
    let state = {}
    beforeEach(() => {state = {
        tvShow: {},
        cast: [],
        season: [],
        loading: false,
        error: ''
      }
    })
     //TV_SHOWS_CAST, TV_SHOWS_SEASON, LOADING, ERRORS
    it('TV_SHOWS sets state.tvShow to tvShow', () => {
      const tvShow = [{ id: 1, name: 'xyz' }]
      store.mutations.TV_SHOWS(state, tvShow)
      expect(state.tvShow).toBe(tvShow)
    })

    it('TV_SHOWS_CAST sets state.cast to cast', () => {
      const cast = [{ id: 1, name: 'xyz' }]
      store.mutations.TV_SHOWS_CAST(state, cast)
      expect(state.cast).toBe(cast)
    })

    it('TV_SHOWS_SEASON sets state.season to season', () => {
      const season = [{ id: 1, name: 'xyz' }]
      
      store.mutations.TV_SHOWS_SEASON(state, season)
      expect(state.season).toBe(season)
    })
    it('LOADING sets state.loading to loading', () => {
      const loading = false;
      store.mutations.LOADING(state, loading)
      expect(state.loading).toBe(loading)
    })
    it('ERRORS sets state.loading to loading', () => {
        const error = '';
        store.mutations.ERRORS(state, error)
        expect(state.error).toBe(error)
      })
  })
  describe('In actions', () => {
    let commit
    beforeEach(() => {
      commit = jest.fn() // mock the function
    })

    it('getTvShowDetailsById should commits TV_SHOWS returned by getShowDetailsById Api method', async () => {
      const TV_SHOWS = [{ id: 1, name: 'xyz' }]
      // Control mock to resolve with an array of objects
      getShowDetailsById.mockResolvedValue(TV_SHOWS)
      await store.actions.getTvShowDetailsById({ commit })
      expect(commit).toHaveBeenCalledWith('TV_SHOWS', TV_SHOWS)
    })

    it('getTvShowSeasonDetailsById should commits TV_SHOWS_SEASON returned by getShowDetailsSeason Api method', async () => {
        const TV_SHOWS_SEASON = [{ id: 1, name: 'xyz' }]
        // Control mock to resolve with an array of objects
        getShowDetailsSeason.mockResolvedValue(TV_SHOWS_SEASON)
        await store.actions.getTvShowSeasonDetailsById({ commit })
        expect(commit).toHaveBeenCalledWith('TV_SHOWS_SEASON', TV_SHOWS_SEASON)
      })
  })
})
