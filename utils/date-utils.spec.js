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

  describe('Build Google Calendar URL', () => {
    it('builds a valid Google Calendar URL', () => {
      const actualGoogleCalendarUrl = buildGoogleCalendarUrl(
        startDate,
        endDate,
        'This is some text',
        'These are the details'
      )
      const expectedGoogleCalendarUrl =
        'http://www.google.com/calendar/event?action=TEMPLATE&dates=20210608%2F20210610&text=This is some text&&details=These are the details'

      expect(actualGoogleCalendarUrl).not.toBeUndefined()
      expect(actualGoogleCalendarUrl).toEqual(expectedGoogleCalendarUrl)
    })
    it('returns void if a date is invalid', () => {
      const actualGoogleCalendarUrl = buildGoogleCalendarUrl(
        new Date('2021-70-9'),
        endDate,
        'This is some text',
        'These are the details'
      )

      expect(actualGoogleCalendarUrl).not.toBeUndefined()
      expect(actualGoogleCalendarUrl).toEqual('')
    })
  })
})
