<template>
  <main class="main">
    <section>
      <Hero :content="hero" />
      <FloatingCards :content="maintainers" />
      <Lead :content="lead" />
      <Details :content="details" />
      <div class="cta">
        <CommonLink button :href="cta.url">
          {{ cta.label }}
        </CommonLink>
      </div>
      <Maintainers :content="maintainers" />
    </section>
  </main>
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
.main {
  position: relative;
  width: 100%;
  overflow: hidden;
}
section {
  @include section();
}
.cta {
  margin-top: 88px;
}
</style>
