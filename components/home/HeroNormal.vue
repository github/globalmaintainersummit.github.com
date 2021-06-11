<template>
  <div class="hero">
    <div class="hero__message">
      <h1>
        {{ content.title }}
      </h1>
      <p class="hero__lead">
        <span v-if="content.lead">{{ content.lead }}</span>
        <span v-else>{{ eventDates }}</span>
      </p>
    </div>
    <!-- Newsletter hidden after event has passed -->
    <!-- <HomeNewsletter /> -->
  </div>
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
      default: null,
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
  h1 {
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  &__lead {
    @include mobileToDesktopFontSize(var(--fs-medium), var(--fs-large));
    @include wave($bottom: -16px);

    display: inline-block;
    margin: 64px 0 0;
    font-weight: var(--fw-regular);
    font-family: var(--ff-title);
  }
}
</style>
