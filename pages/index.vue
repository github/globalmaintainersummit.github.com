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
  data() {
    return {
      metadata: {
        title: 'Global Maintainers Summit Event 2021',
        description:
          'A virtual event for the maintainers that make open source possible, hosted by GitHub.',
        image: require(`~/assets/img/meta/social-card.jpg`),
      },
    }
  },
}
</script>

<style lang="scss" scoped>
section {
  @include section();
}
</style>
