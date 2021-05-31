<template>
  <div class="slot" :class="isTopic && 'slot--topic'">
    <p v-if="content.time" class="slot__time">
      <span>{{ time }}</span>
      <span class="slot__time--timezone">{{ selectedTimeZone }}</span>
    </p>
    <p class="slot__title" :class="isTopic && 'slot__title--topic'">
      {{ content.title }}
    </p>
    <ScheduleTopicSlot
      v-if="isTopic"
      :talks="content.talks"
      :has-discussions="!!content.hasDiscussions"
      class="talks"
    />
    <div class="wave">
      <ScheduleBreak :break="content.break" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isTopic() {
      return this.content.talks?.length > 1
    },
    selectedTimeZone() {
      return this.$store.state.selectedTimeZone
    },
    time() {
      if (this.selectedTimeZone === this.$store.state.defaultTimeZone) {
        return this.content.time
      } else {
        return this.localTime()
      }
    },
  },
  methods: {
    localTime() {
      const datePDT = new Date(`2021-06-08 ${this.content.time} PDT`)
      const dateLocale = datePDT.toLocaleString('en-US', {
        timeZone: this.selectedTimeZone,
      })

      return this.formatTime(dateLocale)
    },
    /** Formats a full date to just the time in short format, e.g:
     * "6/8/2021, 6:00:00 PM" --> "6:00 pm"
     */
    formatTime(time) {
      const timeSplit = time.split(' ')
      const hourFull = timeSplit[1] // 6:00:00
      const hourShort = hourFull.substring(0, hourFull.length - 3) // 6:00
      const period = timeSplit[2].toLowerCase() // pm
      return hourShort.concat(' ').concat(period) // 6:00 pm
    },
  },
}
</script>

<style lang="scss" scoped>
.slot {
  display: grid;
  grid-template-areas:
    'time'
    'title'
    'wave';
  grid-template-columns: 1fr;
  width: 100%;
  margin-bottom: 24px;
  font-family: var(--ff-title);
  column-gap: 50px;
  row-gap: 16px;

  @media screen and (min-width: $screen-xl) {
    grid-template-areas:
      'time title title'
      '. wave wave';
    grid-template-columns: 240px 300px 1fr;
  }

  &--topic {
    grid-template-areas:
      'time'
      'title'
      'talks'
      'wave';
    grid-template-columns: 1fr;
    @media screen and (min-width: $screen-xl) {
      grid-template-areas:
        'time title talks'
        '. wave wave';
      grid-template-columns: 240px 350px 1fr;
    }
  }

  &__time {
    display: flex;
    flex-direction: column;
    grid-area: time;
    padding-bottom: 16px;
    text-align: right;

    @media screen and (min-width: $screen-xl) {
      justify-self: baseline;
    }

    &--timezone {
      color: var(--fc-dimmed);
      font-size: var(--fs-extra-small);
    }
  }

  &__title {
    display: contents;
    grid-area: title;
    height: 60px;

    @media screen and (min-width: $screen-sm) {
      display: block;
    }
    &--topic {
      color: var(--fc-primary);
    }
  }

  p {
    @include mobileToDesktopFontSize(var(--fs-medium), var(--fs-large));

    margin: 0;
  }
}

.wave {
  grid-area: wave;
  width: 100%;
}

.talks {
  grid-area: talks;
}
</style>
