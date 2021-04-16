<template>
  <section>
    <Hero />
    <FloatingCards />
    <Lead />
    <Details />
    <Cta />
    <Maintainers />
  </section>
</template>

<script>
import socialMetadata from '~/mixins/social-metadata'

export default {
  mixins: [socialMetadata],
  async asyncData({ $content }) {
    const { hero, lead, details, cta, maintainers } = await $content(
      'home'
    ).fetch()

    return {
      hero,
      lead,
      details,
      cta,
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
