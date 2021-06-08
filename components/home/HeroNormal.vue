<template>
  <div class="hero">
    <div class="hero__message">
      <h1>
        {{ title }}
      </h1>
      <p>{{ eventDates }}</p>
    </div>
    <HomeNewsletter />
  </div>
</template>

<script>
import { formatDateShort } from '~/utils/date-utils'

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    dates: {
      type: Object,
      required: true,
    },
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

<style lang="scss" scoped>
.hero {
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: 50px 0 40px;
  @media only screen and (min-width: $screen-sm) {
    padding: 100px 0 80px;
  }

  &__message {
    max-width: 900px;
  }
  h1,
  p {
    margin: 0;
    padding: 0;
  }
  h1 {
    line-height: 1;
  }
  p {
    @include mobileToDesktopFontSize(var(--fs-medium), var(--fs-large));
    @include wave($bottom: -16px);

    display: inline-block;
    margin-top: 64px;
    font-family: var(--ff-title);
  }
}
</style>
