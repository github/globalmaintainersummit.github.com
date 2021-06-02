<template>
  <CommonSwitchButton
    v-if="hasDifferentTimeZones"
    id="timezone"
    :options="options"
    :selected-option="selectedTimeZone"
    data-cy="timezoneSwitch"
    @click="updateSelectedTimeZone"
  />
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {
      selectedOption: this.defaultTimeZone,
    }
  },
  computed: {
    ...mapState(['defaultTimeZone', 'userTimeZone', 'selectedTimeZone']),
    hasDifferentTimeZones() {
      return (
        this.$store.state.defaultTimeZone !== this.$store.state.userTimeZone
      )
    },
    options() {
      return [
        {
          label: this.defaultTimeZone,
        },
        {
          label: this.userTimeZone,
        },
      ]
    },
  },
  methods: {
    ...mapMutations(['updateSelectedTimeZone']),
  },
}
</script>
