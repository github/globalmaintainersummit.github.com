<template>
  <div class="details">
    <p class="details__highlight">{{ content.highlight }}</p>
    <div class="details__content" v-html="content.body" />
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
.details {
  max-width: 628px;
  margin-top: 60px;
  @media screen and (min-width: $screen-ipad) {
    margin-top: 120px;
  }

  &__highlight,
  &__content {
    @include mobileToDesktopFontSize(var(--fs-default), var(--fs-regular));

    color: var(--fc-default);
    font-weight: var(--fw-medium);
  }
  &__content {
    color: var(--fc-dimmed);
  }
}
</style>
