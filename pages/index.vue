<template>
  <section class="home">
    <div class="home__decoration" aria-hidden="true">
      <img src="~/assets/svg/bg_pills/graphic_hero.svg" alt="" />
    </div>
    <HomeHero :content="hero" />
    <HomeContent
      :normal-block="content.normalBlock"
      :highlighted-block="content.highlightedBlock"
    />
    <HomeMaintainers :content="maintainersContent" :maintainers="maintainers" />
  </section>
</template>

<script>
import socialMetadata from '~/mixins/social-metadata'

export default {
  mixins: [socialMetadata],
  async asyncData({ $content }) {
    const {
      maintainers: maintainersContent,
      content,
      hero,
    } = await $content('2021/pages/home/index').fetch()
    const maintainers = await $content('2021/shared/maintainers')
      .where({ featured: true })
      .fetch()

    return {
      content,
      hero,
      maintainersContent,
      maintainers,
    }
  },
}
</script>

<style lang="scss" scoped>
.home {
  @include section();

  position: relative;
  &__decoration {
    position: absolute;
    top: -105px;
    left: -110px;
    width: 100%;
  }
}
</style>
