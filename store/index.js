export const state = () => ({
  selectedYear: new Date().getFullYear() + 1,
})

export const mutations = {
  updateSelectedYear(state, year) {
    state.selectedYear = year
  },
}
