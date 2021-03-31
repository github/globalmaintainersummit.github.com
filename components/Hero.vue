<template>
  <div class="hero">
    <h1 class="hero__title">{{ content.title }}</h1>
    <p class="hero__subtitle">{{ content.subtitle }}</p>
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
.hero {
  padding-top: 40px;

  &__title {
    @include mobileToDesktopFontSize(var(--fs-giant), var(--fs-colossal));

    max-width: 480px;
    margin-bottom: 24px;
    font-weight: var(--fw-bold);
    line-height: 1;
  }

  &__subtitle {
    color: var(--fc-dimmed);
    font-size: var(--fs-default);
  }
}
</style>
