<template>
  <div class="video">
    <client-only placeholder="Loading...">
      <youtube class="video__iframe" :video-id="videoId"></youtube>
      <div class="video__decoration"></div>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.video {
  --video-width: 256px;
  --video-height: 192px;

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
  &__iframe {
    position: relative;
    z-index: 2;
    ::v-deep iframe {
      width: var(--video-width);
      height: var(--video-height);
      transition: all 0.3s ease-in;
    }
  }
  &__decoration {
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
</style>
