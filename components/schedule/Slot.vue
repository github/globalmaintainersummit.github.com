<template>
  <div data-cy="slot" class="slot" :class="isTopic && 'slot--topic'">
    <p v-if="content.time" class="slot__time" data-cy="slotTime">
      <span>{{ time }}</span>
      <span class="slot__time--timezone">{{ timeZoneFormated }}</span>
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
import { mapState } from 'vuex'
import { getLocalTime, formatIANATimeZone } from '~/utils/date-utils'

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
    ...mapState(['selectedTimeZone', 'defaultTimeZone']),
    isTopic() {
      return this.content.talks?.length > 1
    },
    time() {
      return getLocalTime(
        `${this.date} ${this.content.time}:00`,
        this.selectedTimeZone
      )
    },
    timeZoneFormated() {
      return formatIANATimeZone(this.selectedTimeZone)
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
