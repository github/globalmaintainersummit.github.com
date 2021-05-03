<template>
  <div class="follow-wrapper">
    <div class="follow">
      <h3 class="follow__title">{{ followEvent.title }}</h3>
      <p class="follow__hashtag">{{ followEvent.hashtag }}</p>
      <p class="follow__lead">{{ followEvent.lead }}</p>
    </div>
    <div class="gather">
      <CommonLink :to="followEvent.joinUs.link">
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
  max-width: 684px;
  margin: 0 auto;
}

.follow {
  text-align: center;

  &__title {
    @include mobileToDesktopFontSize(var(--fs-medium), var(--fs-large));

    margin: 0;
  }

  &__hashtag {
    @include mobileToDesktopFontSize(var(--fs-giant), var(--fs-colossal));
    @include gradientTitle(var(--fc-primary), var(--fc-accent));

    margin: 8px 0 40px;
    font-weight: var(--fw-extra-bold);
  }

  &__lead {
    padding: 0 112px;
    font-size: var(--fs-small);
  }
}

.gather {
  margin-top: 120px;
}
</style>
