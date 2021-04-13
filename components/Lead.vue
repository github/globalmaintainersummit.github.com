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
import { formatDate, buildGoogleCalendarUrl } from '~/utils/date-utils.js'

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
      return formatDate(this.startDate, this.endDate, this.locale)
    },
    calendarUrl() {
      return buildGoogleCalendarUrl(
        this.startDate,
        this.endDate,
        this.lead?.calendarEvent.text,
        this.lead?.calendarEvent.details
      )
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
