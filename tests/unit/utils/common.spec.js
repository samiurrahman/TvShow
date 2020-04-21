import { sortTvSHow } from '@/utils/common'
describe('In common, ', () => {
  it('sortTvShow should return -1 when a is bigger object values', () => {
    const a = { rating: { average: '5.2' } }
    const b = { rating: { average: '4.2' } }
    const expected = sortTvSHow(a, b)
    expect (expected).toBe(-1);
  })


  it('sortTvShow should return 1 when b is bigger object values', () => {
    const a = { rating: { average: '1.2' } }
    const b = { rating: { average: '4.2' } }
    const expected = sortTvSHow(a, b)
    expect (expected).toBe(1);
  })
})
