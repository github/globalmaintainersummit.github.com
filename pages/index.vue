<template>
  <section>
    <h1 style="display: flex; margin-top: 100px; place-content: center">
      Work in progress
    </h1>
    <CommonCustomButton href="https://vuejs.org/v2/guide/components-slots.html">
      <template #text>All Maintainers</template>
    </CommonCustomButton>
    <!-- <CommonButton to="#" icon-prefix>
      <template #text>Sponsor PyLadies</template>
    </CommonButton> -->
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
