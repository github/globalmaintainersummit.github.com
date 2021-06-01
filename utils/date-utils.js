/**
 * Formats two given dates with the following patterns:
 * For dates within the same month:
 * June 8-9, 2021
 *
 * For dates that belong to different months:
 * June 8 - July 9, 2021
 *
 * @param {String} startDateString
 * @param {String} endDateString
 * @returns {String}
 */
export function formatDateShort(startDateString, endDateString) {
  const startDate = new Date(startDateString)
  const endDate = new Date(endDateString)

  if (!isValidDate(startDate) || !isValidDate(endDate)) {
    return ''
  }

  const startDay = getDay(startDate)
  const startMonth = getMonth(startDate)
  const endDay = getDay(endDate)
  const endMonth = getMonth(endDate)
  const year = getYear(startDate)

  return startMonth === endMonth
    ? `${startMonth} ${startDay}-${endDay}, ${year}`
    : `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${year}`
}

/**
 *Formats a single date with the following format:
  "2021-06-08" --> Tuesday ⌁ June 8, 2021
 *
 * @param {Date} date
 * @returns {String}
 */
export function formatDateLong(dateString) {
  // Creates a date from the given String adding the time so the date it's not a midnight and it doesn't change the actual weekday.
  const date = new Date(dateString.concat(' 9:00 AM'))

  if (!isValidDate(date)) {
    return ''
  }

  const weekday = getWeekday(date)
  const day = getDay(date)
  const month = getMonth(date)
  const year = getYear(date)

  return `${weekday} ⌁ ${month} ${day}, ${year}`
}

/** Formats a full date to just the time in short format, e.g:
 * "6/8/2021, 6:00:00 PM" --> "6:00 pm"
 *
 * @param {String} date
 * @returns {String}
 */
export function formatTime(date) {
  const dateSplit = date.split(' ')
  const hourFull = dateSplit[1] // 6:00:00
  const hourShort = hourFull.substring(0, hourFull.length - 3) // 6:00
  const period = dateSplit[2].toLowerCase() // pm
  return hourShort.concat(' ').concat(period) // 6:00 pm
}

/**
 *Converts the given date from PDT timezone to the given timezone.
 *
 * @param {String} date
 * @param {String} time
 * @param {String} timezone
 * @returns {String}
 */
export function pdtToLocaleDate(date, time, timezone) {
  const datePDT = new Date(`${date} ${time} PDT`)
  return datePDT.toLocaleString('en-US', {
    timeZone: timezone,
  })
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

/** Returns the day of a given date
 *
 * @param {String} date
 * @returns {String}
 */
function getDay(date) {
  return date.getUTCDate()
}

/** Returns the weekday of a given date, long version, e.g: Tuesday
 *
 * @param {String} date
 * @returns {String}
 */
function getWeekday(date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
  })
}

/** Returns the month of a given date, long version, e.g: June
 *
 * @param {String} date
 * @returns {String}
 */
function getMonth(date) {
  return date.toLocaleDateString('en-US', {
    month: 'long',
  })
}

/** Returns the year of a given date
 *
 * @param {String} date
 * @returns {String}
 */
function getYear(date) {
  return date.getUTCFullYear()
}
