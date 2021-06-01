export default ({ app }, inject) => {
  // Inject user timezone in Vue, context and store.
  inject('timezone', () => Intl.DateTimeFormat().resolvedOptions().timeZone)
}
