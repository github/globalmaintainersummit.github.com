export default ({ app }, inject) => {
  // Inject user timezone in Vue, context and store.
  console.log('user-timezone')
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  inject('timezone', () => timeZone)
}
