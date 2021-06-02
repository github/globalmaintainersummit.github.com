<template>
  <client-only>
    <CommonSwitchButton
      v-if="hasDifferentTimeZones"
      id="timezone"
      :options="options"
      :selected-option="selectedOption"
      data-cy="timezoneSwitch"
      @click="changeTimeZone"
    />
  </client-only>
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
  computed: {
    hasDifferentTimeZones() {
      return (
        this.$store.state.defaultTimeZone !== this.$store.state.userTimeZone
      )
    },
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
