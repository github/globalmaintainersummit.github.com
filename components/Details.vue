<template>
  <div v-if="details" class="details">
    <p class="details__highlight">{{ details.highlight }}</p>
    <div class="details__content" v-html="details.body" />
  </div>
</template>

<script>
export default {
  data() {
    return { details: null }
  },
  async fetch() {
    const { details } = await this.$content('home').only(['details']).fetch()
    this.details = details
  },
}
</script>

<style lang="scss" scoped>
.details {
  max-width: 628px;
  margin-top: 60px;
  @media screen and (min-width: $screen-ipad) {
    margin-top: 120px;
  }

  &__highlight,
  &__content {
    @include mobileToDesktopFontSize(var(--fs-default), var(--fs-regular));

    color: var(--fc-default);
    font-weight: var(--fw-medium);
  }
  &__content {
    color: var(--fc-dimmed);
  }
}
</style>
