export const state = () => ({
  selectedYear: new Date().getFullYear(),
})

export const mutations = {
  updateSelectedYear(state, year) {
    state.selectedYear = year
  },
}
