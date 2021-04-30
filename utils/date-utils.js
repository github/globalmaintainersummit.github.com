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
 * Check if the given date is valid
 *
 * @param {Date} date
 * @returns {Boolean}
 */
function isValidDate(date) {
  return date instanceof Date && !isNaN(date)
}
