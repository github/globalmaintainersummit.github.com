<template>
  <CommonSwitchButton
    v-if="hasDifferentTimeZones"
    id="timezone"
    :options="options"
    :selected-option="selectedOption"
    data-cy="timezoneSwitch"
    @click="changeTimeZone"
  />
</template>

<script>
export default {
  data() {
    return {
      selectedOption: this.$store.state.defaultTimeZone,
    }
  },
  computed: {
    hasDifferentTimeZones() {
      return (
        this.$store.state.defaultTimeZone !== this.$store.state.userTimeZone
      )
    },
    options() {
      return [
        {
          label: this.$store.state.defaultTimeZone,
        },
        {
          label: this.$store.state.userTimeZone,
        },
      ]
    },
  },
  methods: {
    changeTimeZone(option) {
      this.selectedOption = option
      this.$store.commit('updateSelectedTimeZone', option)
    },
  },
}
</script>
