<template>
  <section>
    <h3>{{ eventDate }}</h3>
    <div v-for="slot in content.slots" :key="slot.label">
      <ScheduleSlot :content="slot" :date="date" />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { formatDateLong } from '~/utils/date-utils'

export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(['selectedTimeZone']),
    eventDate() {
      const timeFirstSlot = this.content.slots[0].time
      return formatDateLong(this.date, timeFirstSlot, this.selectedTimeZone)
    },
  },
}
</script>

<style lang="scss" scoped>
h3 {
  margin-bottom: 32px;
  color: var(--fc-primary);

  @media screen and (min-width: $screen-sm) {
    margin-bottom: 80px;
  }
}
</style>
