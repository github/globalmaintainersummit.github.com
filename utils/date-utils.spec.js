import { formatDate, buildGoogleCalendarUrl } from '~/utils/date-utils.js'

describe('Date utils', () => {
  const startDate = new Date('2021-06-08')
  const endDate = new Date('2021-06-09')

  describe('Format Date', () => {
    it('formats dates that belong to the same month', () => {
      const actualDate = formatDate(startDate, endDate)
      const expectedDate = 'June 8-9, 2021'

      expect(actualDate).not.toBeUndefined()
      expect(actualDate).toEqual(expectedDate)
    })

    it('formats dates that belong to the different months', () => {
      const actualDate = formatDate(startDate, new Date('2021-07-09'))
      const expectedDate = 'June 8 - July 9, 2021'

      expect(actualDate).not.toBeUndefined()
      expect(actualDate).toEqual(expectedDate)
    })

    it('returns void if a date is invalid', () => {
      const actualDate = formatDate(startDate, new Date('2021-07-90'))

      expect(actualDate).not.toBeUndefined()
      expect(actualDate).toEqual('')
    })
  })
})
