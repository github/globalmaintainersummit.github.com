<template>
  <div class="hero">
    <client-only placeholder="Loading...">
      <youtube class="hero__video" :video-id="videoId"></youtube>
      <div class="hero__video-decoration"></div>
    </client-only>
    <h1>
      {{ content.title }}
    </h1>
    <div class="hero__lead">
      <p>{{ content.lead }}</p>
      <CommonCustomButton
        :href="gatherTown.link"
        icon="arrow-right"
        icon-suffix
        class="hero__button"
      >
        {{ gatherTown.joinUs }}
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
      videoId: '5qap5aO4i9A',
      gatherTown: null,
    }
  },
  async fetch() {
    const { gatherTown } = await this.$content('2021/pages/home/index')
      .only(['gatherTown'])
      .fetch()
    this.gatherTown = gatherTown
  },
}
</script>

<style lang="scss" scoped>
.hero {
  --video-width: 256px;
  --video-height: 192px;

  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 24px;
  @media only screen and (min-width: $screen-xs) {
    --video-width: 320px;
    --video-height: 192px;
  }
  @media only screen and (min-width: 600px) {
    --video-width: 320px;
    --video-height: 192px;
  }
  @media only screen and (min-width: $screen-sm) {
    --video-width: 480px;
    --video-height: 272px;

    padding-top: 40px;
  }
  @media only screen and (min-width: $screen-tablet) {
    --video-width: 640px;
    --video-height: 360px;
  }
  @media only screen and (min-width: $screen-xl) {
    --video-width: 854px;
    --video-height: 480px;
  }
  @media only screen and (min-width: 1200px) {
    --video-width: 1024px;
    --video-height: 600px;
  }
  @media only screen and (min-width: $screen-max) {
    --video-width: 1280px;
    --video-height: 720px;
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
    ::v-deep iframe {
      width: var(--video-width);
      height: var(--video-height);
      transition: all 0.3s ease-in;
    }
    &-decoration {
      position: absolute;
      top: 40px;
      left: 16px;
      width: var(--video-width);
      height: var(--video-height);
      transition: all 0.5s ease-in;
      @media only screen and (min-width: $screen-sm) {
        top: 58px;
      }
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
    flex-direction: column;
    align-items: flex-start;
    @media screen and (min-width: $screen-tablet) {
      flex-direction: row;
      align-items: center;
    }
    p {
      @include mobileToDesktopFontSize(var(--fs-small), var(--fs-default));

      max-width: 550px;
      padding-right: 100px;
      font-weight: var(--fw-regular);
    }
  }
  &__button {
    align-self: center;
    padding-top: 40px;
    @media screen and (min-width: $screen-tablet) {
      padding-top: 0;
    }
  }
}
</style>
