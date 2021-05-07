<template>
  <div class="label" :class="isTopic && 'label--topic'">
    <p v-if="content.time" class="label__time">
      <span>{{ content.time }}</span>
      <span class="label__time--timezone">PDT</span>
    </p>
    <div class="label__title">
      <p :class="isTopic && 'label__title--topic'">
        {{ content.label }}
      </p>
      <ScheduleTopicSlot
        v-if="isTopic"
        :talks="content.talks"
        :has-discussions="!!content.hasDiscussions"
        class="talks"
      />
    </div>
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
.label {
  display: grid;
  grid-template-areas:
    'time title title'
    '. wave wave';
  grid-template-columns: 0.25fr 0.75fr;
  width: 100%;
  font-family: var(--ff-title);
  column-gap: 50px;

  @media screen and (min-width: $screen-tablet) {
    column-gap: 116px;
  }

  &--topic {
    grid-template-areas:
      'time title talks'
      '. . talks'
      '. . talks'
      '. wave wave';
  }

  &__time {
    display: flex;
    flex-direction: column;
    grid-area: time;
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
}

.talks {
  grid-area: talks;
}
</style>
