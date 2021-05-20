<template>
  <section>
    <div class="decoration" aria-hidden="true">
      <img src="~/assets/svg/bg_pills/graphic_hero.svg" alt="" />
    </div>
    <HomeHero :content="hero" />
    <HomeNewsletter :content="newsletter" />
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
      newsletter,
    } = await $content('2021/pages/home/index').fetch()
    const maintainers = await $content('2021/shared/maintainers')
      .where({ featured: true })
      .fetch()

    return {
      content,
      hero,
      newsletter,
      maintainersContent,
      maintainers,
    }
  },
}
</script>

<style lang="scss" scoped>
section {
  @include section();

  position: relative;
}
.decoration {
  position: absolute;
  top: -105px;
  left: -110px;
  width: 100%;
}
</style>
