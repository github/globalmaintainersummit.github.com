<template>
  <div class="follow-wrapper">
    <div class="follow">
      <h3 class="follow__title">{{ followEvent.title }}</h3>
      <p class="follow__hashtag">{{ followEvent.hashtag }}</p>
      <p class="follow__lead">{{ followEvent.lead }}</p>
    </div>
    <div class="gather">
      <img
        src="~/assets/svg/gather_logo.svg"
        alt=""
        role="presentation"
        class="gather__logo"
      />
      <picture role="presentation" class="gather__dancers">
        <source
          srcset="~/assets/img/gather_dancers.png"
          media="(prefers-reduced-motion: reduce)"
        />
        <img srcset="~/assets/img/gather_dancers.gif" alt="" />
      </picture>
      <CommonLink :to="followEvent.joinUs.link" class="gather__link">
        {{ followEvent.joinUs.text }}
      </CommonLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { followEvent: null }
  },
  async fetch() {
    const { followEvent } = await this.$content('home')
      .only(['followEvent'])
      .fetch()
    this.followEvent = followEvent
  },
}
</script>

<style lang="scss" scoped>
.follow-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 56px;
  background-image: url('~/assets/svg/bg_pills/graphic_pills_footer.svg');
  background-repeat: no-repeat;
  background-position: bottom;

  @media screen and (min-width: $screen-sm) {
    padding-top: 160px;
  }
}

.follow {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 684px;
  text-align: center;

  &__title {
    @include mobileToDesktopFontSize(var(--fs-small), var(--fs-large));

    margin: 0 auto;
    padding: 0 24px;
  }

  &__hashtag {
    @include mobileToDesktopFontSize(var(--fs-medium), var(--fs-colossal));
    @include gradientTitle(var(--fc-primary), var(--fc-accent));

    margin: 8px 0 40px;
    font-weight: var(--fw-extra-bold);
  }

  &__lead {
    padding: 0 24px;
    font-size: var(--fs-small);
    @media screen and (min-width: $screen-sm) {
      padding: 0 112px;
    }
  }
}

.gather {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 56px;
  row-gap: 42px;

  @media screen and (min-width: $screen-sm) {
    margin-top: 120px;
  }

  &__logo {
    max-width: 40px;
    max-height: 53px;
  }
}
</style>
