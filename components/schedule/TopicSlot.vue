<template>
  <div>
    <div v-for="talk in talks" :key="talk.title" class="topic">
      <p class="topic__title">{{ talk.title }}</p>
      <p class="topic__speaker">{{ talk.speaker }}</p>
    </div>
    <ScheduleDiscussion v-if="hasDiscussions" />
  </div>
</template>

<script>
export default {
  props: {
    talks: {
      type: Array,
      required: true,
    },
    hasDiscussions: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.topic {
  &__title {
    @include mobileToDesktopFontSize(var(--fs-small), var(--fs-medium));

    margin: 0;
  }
  &__speaker {
    @include mobileToDesktopFontSize(var(--fs-small), var(--fs-default));

    margin-top: 8px;
    margin-bottom: 40px;
    font-weight: var(--fw-regular);
    font-family: var(--ff-default);
  }
}
</style>
