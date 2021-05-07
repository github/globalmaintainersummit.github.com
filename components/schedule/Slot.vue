<template>
  <div class="slot" :class="isTopic && 'slot--topic'">
    <p v-if="content.time" class="slot__time">
      <span>{{ content.time }}</span>
      <span class="slot__time--timezone">PDT</span>
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
  },
}
</script>

<style lang="scss" scoped>
.slot {
  display: grid;
  grid-template-areas:
    'time title title'
    '. wave wave';
  grid-template-columns: 240px repeat(2, 1fr);
  width: 100%;
  margin-bottom: 24px;
  font-family: var(--ff-title);
  column-gap: 50px;

  @media screen and (min-width: $screen-tablet) {
    column-gap: 116px;
  }

  &--topic {
    grid-template-areas:
      'time title talks'
      '. wave wave';
  }

  &__time {
    display: flex;
    flex-direction: column;
    grid-area: time;
    justify-self: baseline;
    text-align: right;

    &--timezone {
      color: var(--fc-dimmed);
      font-size: var(--fs-extra-small);
    }
  }

  &__title {
    grid-area: title;
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
