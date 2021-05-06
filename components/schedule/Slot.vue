<template>
  <div class="label">
    <p v-if="content.time" class="label__time">
      <span>{{ content.time }}</span>
      <span class="label__time--timezone">PDT</span>
    </p>
    <p class="label__description">{{ content.label }}</p>
    <div class="label__wave">
      <ScheduleBreak v-if="content.break" />
      <CommonWave v-else />
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
}
</script>

<style lang="scss" scoped>
.label {
  display: grid;
  grid-template-areas:
    'time description'
    '. wave';
  grid-template-columns: 0.25fr 0.75fr;
  width: 100%;
  font-family: var(--ff-title);
  column-gap: 50px;

  @media screen and (min-width: $screen-tablet) {
    column-gap: 116px;
  }

  &__time {
    display: flex;
    flex-direction: column;
    grid-area: time;
    // padding-right: 40px; PLAY WITH POSITION IN GRID CELL
    text-align: right;

    &--timezone {
      color: var(--fc-dimmed);
      font-size: var(--fs-extra-small);
    }
  }

  &__description {
    grid-area: description;
  }

  &__wave {
    grid-area: wave;
  }

  p {
    @include mobileToDesktopFontSize(var(--fs-medium), var(--fs-large));

    margin: 0;
  }
}
</style>
