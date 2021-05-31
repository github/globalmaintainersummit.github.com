<template>
  <CommonSwitchButton
    id="timezone"
    :options="options"
    :selected-option="selectedOption"
    @click="changeTimeZone"
  />
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          label: 'PDT',
        },
      ],
      selectedOption: 'PDT',
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
