<template>
  <CommonSwitchButton
    v-if="defaultTimeZoneIANA !== userTimeZoneIANA"
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
  computed: {
    ...mapState([
      'defaultTimeZoneIANA',
      'userTimeZoneIANA',
      'selectedTimeZone',
    ]),
    options() {
      return [
        {
          label: this.defaultTimeZoneIANA,
        },
        {
          label: this.userTimeZoneIANA,
        },
      ]
    },
  },
  methods: {
    ...mapMutations(['updateSelectedTimeZone']),
  },
}
</script>
