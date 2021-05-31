<template>
  <CommonSwitchButton
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
      options: [
        {
          label: this.$store.state.defaultTimeZone,
        },
      ],
      selectedOption: this.$store.state.defaultTimeZone,
    }
  },
  mounted() {
    this.options.push({ label: this.$store.state.userTimeZone })
  },
  methods: {
    changeTimeZone(option) {
      this.selectedOption = option
      this.$store.commit('updateSelectedTimeZone', option)
    },
  },
}
</script>
