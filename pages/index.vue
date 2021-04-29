<template>
  <section>
    <h1 style="display: flex; margin-top: 100px; place-content: center">
      Work in progress
    </h1>
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
