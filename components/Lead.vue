<template>
  <div>
    <div class="lead">
      <h2 class="lead__title">{{ content.title }}</h2>
      <p class="lead__dates">{{ content.dates }}</p>
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
.lead {
  margin-top: 80px;
  @media screen and (min-width: $screen-ipad) {
    margin-top: 160px;
  }
  &__title {
    @include mobileToDesktopFontSize(var(--fs-large), var(--fs-giant));
    @include gradientTitle(var(--bg-gradient-start), var(--bg-gradient-end));

    max-width: 1024px;
    color: var(--fc-default);
    font-weight: var(--fw-bold);
    line-height: 1;
  }

  &__dates {
    margin-top: 40px;
    color: var(--fc-default);
    font-weight: var(--fs-medium);
    font-size: var(--fs-medium);
  }
}
</style>
