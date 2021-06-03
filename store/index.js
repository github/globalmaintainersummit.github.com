import { IANA_PDT_TIMEZONE } from '~/utils/date-utils'

export const state = () => ({
  userTimeZoneIANA: null,
  defaultTimeZoneIANA: IANA_PDT_TIMEZONE,
  selectedTimeZone: IANA_PDT_TIMEZONE,
})

export const mutations = {
  updateUserTimeZone(state, newTimeZone) {
    state.userTimeZoneIANA = newTimeZone
  },
  updateSelectedTimeZone(state, newTimeZone) {
    state.selectedTimeZone = newTimeZone
  },
}
