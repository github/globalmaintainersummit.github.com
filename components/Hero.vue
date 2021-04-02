<template>
  <div>
    <div class="hero">
      <GitHub aria-hidden="true" role="presentation" />
      <h1 class="hero__title">{{ content.title }}</h1>
      <p class="hero__subtitle">{{ content.subtitle }}</p>
    </div>
  </div>
</template>

<script>
import GitHub from '~/assets/svg/github.svg?inline'

export default {
  components: {
    GitHub,
  },
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
  position: relative;
  margin-top: 40px;
  @media screen and (min-width: $screen-ipad) {
    margin-top: 80px;
  }

  &__title {
    @include mobileToDesktopFontSize(var(--fs-giant), var(--fs-colossal));

    max-width: 480px;
    margin-top: 40px;
    margin-bottom: 0;
    font-weight: var(--fw-bold);
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
