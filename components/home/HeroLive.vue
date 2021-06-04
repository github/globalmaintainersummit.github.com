<template>
  <div class="hero">
    <div class="hero__video">video</div>
    <h1>
      {{ content.title }}
    </h1>
    <div class="hero__lead">
      <p>{{ content.lead }}</p>
      <CommonCustomButton href="#" icon="arrow-right" icon-suffix>
        Join us at Gather
      </CommonCustomButton>
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
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 50px;
  @media only screen and (min-width: 680px) {
    padding-top: 100px;
  }
  h1 {
    @include mobileToDesktopFontSize(var(--fs-medium), var(--fs-giant));
    @include gradientTitle(var(--fc-primary), var(--fc-accent));

    max-width: 836px;
    line-height: 1;
  }
  &__lead {
    display: flex;

    p {
      @include mobileToDesktopFontSize(var(--fs-small), var(--fs-default));

      max-width: 550px;
      padding-right: 100px;
      font-weight: var(--fw-regular);
    }
  }
}
</style>
