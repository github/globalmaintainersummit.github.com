const defaultTimeZone = 'PDT'

export const state = () => ({
  userTimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  defaultTimeZone,
  selectedTimeZone: defaultTimeZone,
})

export const mutations = {
  updateSelectedTimeZone(state, newTimeZone) {
    state.selectedTimeZone = newTimeZone
  },
}
