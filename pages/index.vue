<template>
  <section>
    <h1 style="display: flex; margin-top: 100px; place-content: center">
      Work in progress
    </h1>
    <CommonCustomButton to="/design">
      <template #icon><ArrowRight /></template>
      <template #text>All Maintainers</template>
    </CommonCustomButton>
    <CommonCustomButton
      icon-prefix
      href="https://vuejs.org/v2/guide/components-slots.html"
    >
      <template #icon><HeartEmpty /></template>
      <template #text>Sponsor PyLadies</template>
    </CommonCustomButton>
  </section>
</template>

<script>
import socialMetadata from '~/mixins/social-metadata'
import ArrowRight from '~/assets/svg/icons/arrow_right.svg?inline'
import HeartEmpty from '~/assets/svg/icons/heart_empty.svg?inline'

export default {
  components: {
    ArrowRight,
    HeartEmpty,
  },
  mixins: [socialMetadata],
}
</script>

<style lang="scss" scoped>
section {
  @include section();
}
</style>
