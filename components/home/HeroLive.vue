<template>
  <div class="hero">
    <HomeStreamingVideo :video-id="videoId" />
    <h1>
      {{ content.title }}
    </h1>
    <div class="hero__lead">
      <p>{{ content.lead }}</p>
      <CommonCustomButton
        v-if="gatherTown"
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
      videoId: 'EJnmfB4tu24',
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
