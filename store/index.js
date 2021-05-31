export const state = () => ({
  userTimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  selectedTimeZone: 'PDT',
})

export const mutations = {
  updateSelectedTimeZone(state, newTimeZone) {
    state.selectedTimeZone = newTimeZone
  },
}
