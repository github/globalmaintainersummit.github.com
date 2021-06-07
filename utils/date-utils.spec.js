import {
  formatDateShort,
  formatDateLong,
  getLocalTime,
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

  describe('Converts America/Los_Angeles (PDT) Time', () => {
    const cases = [
      ['2021-06-08 09:00:00', 'Europe/Madrid', '6:00 pm'],
      ['2021-06-09 09:00:00', 'Europe/London', '5:00 pm'],
      ['2021-06-09 09:00:00', 'America/Los_Angeles', '9:00 am'],
    ]
    test.each(cases)(
      'Converts %p to %p time zone',
      (time, timeZone, expectedTime) => {
        const actualTime = getLocalTime(time, timeZone)

        expect(actualTime).not.toBeUndefined()
        expect(actualTime).toEqual(expectedTime)
      }
    )
  })
})
