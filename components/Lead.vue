<template>
  <div v-if="lead" class="lead">
    <h2 class="lead__title">{{ lead.title }}</h2>
    <CommonLink :href="calendarUrl">
      <span class="lead__dates">{{ dates }}</span>
      <AddToCalIcon />
    </CommonLink>
  </div>
</template>

<script>
import AddToCalIcon from '~/assets/svg/add_to_cal.svg?inline'

export default {
  components: {
    AddToCalIcon,
  },
  data() {
    return {
      lead: null,
      locale: 'en-US',
      startDate: null,
      endDate: null,
    }
  },
  async fetch() {
    const { lead } = await this.$content('home').only(['lead']).fetch()
    this.lead = lead
    this.startDate = new Date(lead.dates.start)
    this.endDate = new Date(lead.dates.end)
  },
  computed: {
    dates() {
      const startDay = this.startDate.getUTCDate()
      const startMonth = this.startDate.toLocaleDateString(this.locale, {
        month: 'long',
      })
      const endDay = this.endDate.getUTCDate()
      const endMonth = this.endDate.toLocaleDateString(this.locale, {
        month: 'long',
      })
      const year = this.startDate.getUTCFullYear()

      return startMonth === endMonth
        ? `${startMonth} ${startDay}-${endDay}, ${year}`
        : `${startMonth} ${startDay} - ${endMonth}${endDay}, ${year}`
    },
    calendarUrl() {
      const startDate = this.formatDateCalendar(this.startDate)
      // In order to set an all day event in Google Calendar, the end day has to be a day more of the actual date
      // e.g. To create an event for dates June 8-9 it needs to be set June 8-10
      const endDate = this.formatDateCalendar(this.nextDay(this.endDate))
      const text = this.lead?.calendarEvent.text
      const details = this.lead?.calendarEvent.details

      return `http://www.google.com/calendar/event?action=TEMPLATE&dates=${startDate}%2F${endDate}&text=${text}&&details=${details}`
    },
  },
  methods: {
    formatDateCalendar(date) {
      return date.toISOString().slice(0, 10).replaceAll('-', '') // YYYYMMDD
    },
    nextDay(date) {
      const nextDate = new Date(date)
      return new Date(nextDate.setDate(nextDate.getUTCDate() + 1))
    },
  },
}
</script>

<style lang="scss" scoped>
.lead {
  margin-top: 80px;
  @media screen and (min-width: $screen-ipad) {
    margin-top: 160px;
  }
  &__title {
    @include mobileToDesktopFontSize(var(--fs-medium), var(--fs-giant));
    @include gradientTitle(var(--bg-gradient-start), var(--bg-gradient-end));

    max-width: 1024px;
    margin-bottom: 0;
    color: var(--fc-default);
    font-weight: var(--fw-bold);
    line-height: 1;
  }

  &__dates {
    @include mobileToDesktopFontSize(var(--fs-regular), var(--fs-medium));

    display: inline-block;
    margin-top: 40px;
    margin-right: 16px;
    color: var(--fc-default);
    font-weight: var(--fw-medium);
    font-size: var(--fs-medium);
  }
}
</style>
