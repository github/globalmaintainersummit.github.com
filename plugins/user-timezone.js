export default ({ app, store }, inject) => {
  // Inject user timezone in Vue, context and store.
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  inject('timezone', () => timeZone)
  window.updateTimeZone = (timeZone) =>
    store.commit('updateUserTimeZone', timeZone)
}
