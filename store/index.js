const defaultTimeZone = 'PDT'

export const state = () => ({
  userTimeZone: null,
  defaultTimeZone,
  selectedTimeZone: defaultTimeZone,
})

export const mutations = {
  updateUserTimeZone(state, newTimeZone) {
    state.userTimeZone = newTimeZone
  },
  updateSelectedTimeZone(state, newTimeZone) {
    state.selectedTimeZone = newTimeZone
  },
}
