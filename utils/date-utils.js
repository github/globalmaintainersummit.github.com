/**
 * Formats two given dates with the following patterns:
 * For dates within the same month:
 * June 8-9, 2021
 *
 * For dates that belong to different months:
 * June 8 - July 9, 2021
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @param {String} locale
 * @returns {String}
 */
export function formatDate(startDate, endDate, locale) {
  if (!isValidDate(startDate) || !isValidDate(endDate)) {
    return ''
  }

  const startDay = startDate.getUTCDate()
  const startMonth = startDate.toLocaleDateString(locale, {
    month: 'long',
  })
  const endDay = endDate.getUTCDate()
  const endMonth = endDate.toLocaleDateString(locale, {
    month: 'long',
  })
  const year = startDate.getUTCFullYear()

  return startMonth === endMonth
    ? `${startMonth} ${startDay}-${endDay}, ${year}`
    : `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${year}`
}

/**
 * Build a URL to create an event in Google Calendar with the given parameters.
 * In order to set an all day event in Google Calendar, the end day has to be a day more of the actual date.
 * e.g. To create an event for dates June 8-9 it needs to be set June 8-10
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @param {String} text
 * @param {String} details
 * @returns {String}
 */
export function buildGoogleCalendarUrl(startDate, endDate, text, details) {
  if (!isValidDate(startDate) || !isValidDate(endDate)) {
    return ''
  }

  const startDateFormatted = formatDateCalendar(startDate)
  const endDateFormatted = formatDateCalendar(nextDay(endDate))

  return `http://www.google.com/calendar/event?action=TEMPLATE&dates=${startDateFormatted}%2F${endDateFormatted}&text=${text}&&details=${details}`
}

/**
 * Format the given date to the following format:
 * YYYYMMDD
 *
 * @param {Date} date
 * @returns {String}
 */
function formatDateCalendar(date) {
  return date.toISOString().slice(0, 10).replaceAll('-', '')
}

/**
 * Calculates the next day of the given date
 *
 * @param {Date} date
 * @returns {Date}
 */
function nextDay(date) {
  const nextDate = new Date(date)
  return new Date(nextDate.setDate(nextDate.getUTCDate() + 1))
}

/**
 * Check if the given date is valid
 *
 * @param {Date} date
 * @returns {Boolean}
 */
function isValidDate(date) {
  return date instanceof Date && !isNaN(date)
}
