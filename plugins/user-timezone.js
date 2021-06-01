export default ({ app }, inject) => {
  // Inject user timezone in Vue, context and store.
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  inject('timezone', () => timeZone)
}
