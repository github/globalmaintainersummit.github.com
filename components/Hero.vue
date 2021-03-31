<template>
  <div>
    <div class="bg-glow" aria-hidden="true"></div>
    <div class="hero">
      <GitHub aria-hidden="true" role="presentation" />
      <h1 class="hero__title">{{ content.title }}</h1>
      <p class="hero__subtitle">{{ content.subtitle }}</p>
    </div>
  </div>
</template>

<script>
import GitHub from '~/assets/svg/github.svg'

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
.bg-glow {
  position: absolute;
  top: -15rem;
  left: -20rem;
  z-index: var(--z-index-bg-glow);
  width: 582px;
  height: 458px;
  background-color: var(--bg-glow);
  border-radius: 100%;
  opacity: 0.7;
  filter: blur(50px);

  @media screen and (min-width: $screen-ipad) {
    top: -10rem;
    left: -10rem;
  }
}

.hero {
  position: relative;
  z-index: var(--z-index-bg-content);
  margin-top: 40px;
  @media screen and (min-width: $screen-ipad) {
    margin-top: 80px;
  }

  &__title {
    @include mobileToDesktopFontSize(var(--fs-giant), var(--fs-colossal));

    max-width: 480px;
    margin-top: 40px;
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
