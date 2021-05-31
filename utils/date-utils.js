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
 * @returns {String}
 */
export function formatDateShort(startDate, endDate) {
  if (!isValidDate(startDate) || !isValidDate(endDate)) {
    return ''
  }

  const locale = 'en-US'
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

export function formatDateLong() {
  // TODO
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

/**
 *Converts the given date from PDT timezone to the given timezone.
 *
 * @param {String} date
 * @param {String} timezone
 * @returns {String}
 */
export function pdtToLocaleDate(date, timezone) {
  const datePDT = new Date(`2021-06-08 ${date} PDT`)
  return datePDT.toLocaleString('en-US', {
    timeZone: timezone,
  })
}

/** Formats a full date to just the time in short format, e.g:
 * "6/8/2021, 6:00:00 PM" --> "6:00 pm"
 *
 * @param {String} date
 * @returns {String}
 */
export function formatTime(time) {
  const timeSplit = time.split(' ')
  const hourFull = timeSplit[1] // 6:00:00
  const hourShort = hourFull.substring(0, hourFull.length - 3) // 6:00
  const period = timeSplit[2].toLowerCase() // pm
  return hourShort.concat(' ').concat(period) // 6:00 pm
}
