<template>
  <CommonSwitchButton
    v-if="defaultTimeZone !== userTimeZone"
    id="timezone"
    :options="options"
    :selected-option="selectedTimeZone"
    data-cy="timezoneSwitch"
    @click="updateSelectedTimeZone"
  />
</template>

<script>
import { format } from 'date-fns-tz'
import { mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {
      selectedOption: this.defaultTimeZone,
    }
  },
  computed: {
    ...mapState(['defaultTimeZone', 'userTimeZone', 'selectedTimeZone']),
    userTimeZoneFormated() {
      return format(new Date(), 'zzz', { timeZone: this.userTimeZone })
    },
    options() {
      return [
        {
          label: this.defaultTimeZone,
        },
        {
          label: this.userTimeZoneFormated,
        },
      ]
    },
  },
  methods: {
    ...mapMutations(['updateSelectedTimeZone']),
  },
}
</script>
