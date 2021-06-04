<template>
  <div class="hero">
    <client-only placeholder="Loading...">
      <youtube
        class="hero__video"
        :video-id="videoId"
        player-width="1130"
        player-height="635"
      ></youtube>
      <div class="hero__video-decoration"></div>
    </client-only>
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
  data() {
    return {
      videoId: 'wHn1_QVoXGM',
    }
  },
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 24px;
  @media only screen and (min-width: $screen-sm) {
    padding-top: 40px;
  }
  h1 {
    @include mobileToDesktopFontSize(var(--fs-medium), var(--fs-giant));
    @include gradientTitle(var(--fc-primary), var(--fc-accent));

    max-width: 836px;
    margin-top: 56px;
    line-height: 1;
  }
  &__video {
    position: relative;
    z-index: 2;
    &-decoration {
      --video-width: 1130px;
      --video-height: 635px;

      position: absolute;
      top: 58px;
      left: 16px;
      width: var(--video-width);
      height: var(--video-height);
      &::after {
        z-index: 1;
        display: block;
        width: var(--video-width);
        height: var(--video-height);
        overflow: hidden;
        background-color: var(--bg-dimmed);
        transition: background-color 0.25s ease, top 0.25s ease, left 0.25s ease;
        content: '';
        -webkit-mask-image: url('~/assets/svg/pattern_shadow.svg');
        mask-image: url('~/assets/svg/pattern_shadow.svg');
      }
    }
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
