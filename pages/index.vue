<template>
  <section>
    <h1 style="display: flex; margin-top: 100px; place-content: center">
      Work in progress
    </h1>
    <CommonGrid :items="maintainers.list" three-cols data-cy="maintainers" />
  </section>
</template>

<script>
import socialMetadata from '~/mixins/social-metadata'

export default {
  mixins: [socialMetadata],
  async asyncData({ $content }) {
    const { maintainers } = await $content('home').fetch()
    return {
      maintainers,
    }
  },
}
</script>

<style lang="scss" scoped>
section {
  @include section();
}
</style>
