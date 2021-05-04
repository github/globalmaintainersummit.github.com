<template>
  <section>
    <h1 style="display: flex; margin-top: 100px; place-content: center">
      Work in progress
    </h1>
    <CommonCustomButton to="/design" icon="arrow-right" icon-suffix>
      All Maintainers
    </CommonCustomButton>
    <CommonCustomButton
      icon="heart"
      href="https://vuejs.org/v2/guide/components-slots.html"
    >
      Sponsor PyLadies
    </CommonCustomButton>
  </section>
</template>

<script>
import socialMetadata from '~/mixins/social-metadata'

export default {
  mixins: [socialMetadata],
}
</script>

<style lang="scss" scoped>
section {
  @include section();
}
</style>
