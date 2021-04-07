<template>
  <div>
    <div class="hero">
      <h1 class="hero__title">{{ content.title }}</h1>
      <p class="hero__subtitle">{{ content.subtitle }}</p>
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
.hero {
  &__title {
    max-width: 480px;
    margin-top: 40px;
    margin-bottom: 0;
    font-weight: var(--fw-bold);
    font-size: var(--fs-large);
    @media screen and (min-width: $screen-sm) {
      font-size: var(--fs-giant);
    }
    @media screen and (min-width: $screen-ipad) {
      font-size: var(--fs-colossal);
    }

    line-height: 1;
  }

  &__subtitle {
    margin-top: 24px;
    color: var(--fc-dimmed);
    font-weight: var(--fw-medium);
    font-size: var(--fw-default);
  }
}
</style>
