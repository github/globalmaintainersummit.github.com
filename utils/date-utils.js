import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz'

const TIME_FORMAT = 'h:mm aaa'
export const IANA_PDT_TIMEZONE = 'America/Los_Angeles' // This is one of the timezones that belong to PDT timing in IANA timezones

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
  const date = new Date(dateString.concat(' 9:00 AM')) // TODO use the time of the first slot instead of hardcoded

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
 * "6:00 pm"
 *
 * @param {String} date
 * @returns {String}
 */
export function formatTime(date) {
  return format(date, TIME_FORMAT)
}

/**
 *Converts the given date from PDT timezone to the given timezone.
 *
 * @param {String} date
 * @param {String} timezone
 * @returns {String}
 */
export function getLocalTime(date, timeZone) {
  const utcDate = zonedTimeToUtc(date, IANA_PDT_TIMEZONE)
  const zonedDate = utcToZonedTime(utcDate, timeZone)
  return format(zonedDate, TIME_FORMAT)
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
