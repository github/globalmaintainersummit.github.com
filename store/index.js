const defaultTimeZone = 'PDT'

export const state = () => ({
  userTimeZone: defaultTimeZone,
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

export const actions = {
  setUserTimezone({ commit }) {
    commit('updateUserTimeZone', this.$timezone())
  },
}
