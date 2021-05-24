<template>
  <div class="talk">
    <p class="talk__title">{{ maintainer.talkTitle }}</p>
    <p class="talk__speaker">{{ maintainer.profile.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    speakerHandler: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      maintainer: {
        talkTitle: 'PR incoming',
        profile: {
          name: 'PR incoming!',
        },
      },
    }
  },
  async fetch() {
    if (this.speakerHandler !== '') {
      const maintainer = await this.$content(
        `2021/shared/maintainers/${this.speakerHandler}`
      ).fetch()
      this.maintainer = maintainer
    }
  },
}
</script>

<style lang="scss" scoped>
.talk {
  &__title {
    @include mobileToDesktopFontSize(var(--fs-small), var(--fs-medium));

    margin: 0;
    font-family: var(--ff-secondary);
  }
  &__speaker {
    @include mobileToDesktopFontSize(var(--fs-small), var(--fs-default));

    margin-top: 8px;
    margin-bottom: 24px;
    font-weight: var(--fw-regular);
    font-family: var(--ff-default);

    @media screen and (min-width: $screen-sm) {
      margin-bottom: 40px;
    }
  }
}
</style>
