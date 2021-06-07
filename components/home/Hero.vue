<template>
  <section>
    <HomeHeroLive v-if="eventIsLive" :content="content.live" />
    <HomeHeroNormal v-else :content="content.normal" />
  </section>
</template>

<script>
import { formatDateShort } from '~/utils/date-utils'

export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
    dates: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      eventIsLive: true,
    }
  },
  computed: {
    eventDates() {
      const startDate = new Date(this.dates.startDate)
      const endDate = new Date(this.dates.endDate)
      return formatDateShort(startDate, endDate)
    },
  },
}
</script>
