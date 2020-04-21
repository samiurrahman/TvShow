import store from '@/store/dashboard'
import { getAllShows } from '@/api/api'
// Mock module with Jest mock functions
jest.mock('@/api/api')

describe('In store', () => {
  describe('In mutations', () => {
    it('ALL_TV_SHOWS sets state.allTvShows to allTvShows', () => {
      const allTvShows = [{ id: 1, name: 'xyz' }]
      const state = {
        allTvShows: {}
      }
      store.mutations.ALL_TV_SHOWS(state, allTvShows)
      expect(state.allTvShows).toBe(allTvShows)
    })
  })
  describe('In actions', () => {
    let commit
    beforeEach(() => {
      commit = jest.fn() // mock the function
    })

    it('getTvShows should commits allTvShows returned by getAllShows Api method', async () => {
      const allTvShows = [{ id: 1, name: 'xyz' }]
      // Control mock to resolve with an array of objects
      getAllShows.mockResolvedValue(allTvShows)
      await store.actions.getTvShows({ commit })
      expect(commit).toHaveBeenCalledWith('ALL_TV_SHOWS', allTvShows)
    })

    // it('getTvShows should cacth en error when allTvShows Api throws error', async () => {
    //   const err = 'error occured';
    //   getAllShows.mockRejectedValue(err)
    //   await store.actions.getTvShows({ commit })
    //   expect(commit).toHaveBeenCalledWith('ERRORS', err)
    // })
  })
})
