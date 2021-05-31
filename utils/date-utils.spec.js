import {
  formatDateShort,
  formatDateLong,
  formatTime,
  pdtToLocaleDate,
} from '~/utils/date-utils.js'

describe('Date utils', () => {
  const startDate = '2021-06-08'
  const endDate = '2021-06-09'

  describe('Format Date Short', () => {
    it('formats dates that belong to the same month', () => {
      const actualDate = formatDateShort(startDate, endDate)
      const expectedDate = 'June 8-9, 2021'

      expect(actualDate).not.toBeUndefined()
      expect(actualDate).toEqual(expectedDate)
    })

    it('formats dates that belong to the different months', () => {
      const actualDate = formatDateShort(startDate, '2021-07-09')
      const expectedDate = 'June 8 - July 9, 2021'

      expect(actualDate).not.toBeUndefined()
      expect(actualDate).toEqual(expectedDate)
    })

    it('returns void if a date is invalid', () => {
      const actualDate = formatDateShort(startDate, '2021-07-90')

      expect(actualDate).not.toBeUndefined()
      expect(actualDate).toEqual('')
    })
  })

  describe('Format Date Long', () => {
    it('formats a single date in long format', () => {
      const actualDate = formatDateLong('2021-06-08')
      const expectedDate = 'Tuesday ⌁ June 8, 2021'

      expect(actualDate).not.toBeUndefined()
      expect(actualDate).toEqual(expectedDate)
    })
  })

  describe('Format Time', () => {
    it('returns just the time in a short format with am/pm', () => {
      const actualTime = formatTime('6/8/2021, 6:00:00 PM')
      const expectedTime = '6:00 pm'

      expect(actualTime).not.toBeUndefined()
      expect(actualTime).toEqual(expectedTime)
    })
  })

  describe('Converts PDT Time', () => {
    it('converts PDT date and time to Europe/Madrid timezone', () => {
      const actualTime = pdtToLocaleDate('6/8/2021', '9:00 am', 'Europe/Madrid')
      const expectedTime = '6/8/2021, 6:00:00 PM'

      expect(actualTime).not.toBeUndefined()
      expect(actualTime).toEqual(expectedTime)
    })
    it('converts PDT date and time to Europe/London timezone', () => {
      const actualTime = pdtToLocaleDate('6/8/2021', '9:00 am', 'Europe/London')
      const expectedTime = '6/8/2021, 5:00:00 PM'

      expect(actualTime).not.toBeUndefined()
      expect(actualTime).toEqual(expectedTime)
    })
    it('converts PDT date and time to America/Los_Angeles timezone', () => {
      const actualTime = pdtToLocaleDate(
        '6/8/2021',
        '9:00 am',
        'America/Los_Angeles'
      )
      const expectedTime = '6/8/2021, 9:00:00 AM'

      expect(actualTime).not.toBeUndefined()
      expect(actualTime).toEqual(expectedTime)
    })
  })
})
