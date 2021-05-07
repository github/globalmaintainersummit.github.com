<template>
  <section>
    <div class="decoration" aria-hidden="true">
      <img src="~/assets/svg/bg_pills/graphic_hero.svg" alt="" />
    </div>
    <HomeHero />
    <CommonGrid
      :maintainers="maintainers.list"
      three-cols
      data-cy="maintainers"
    />
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

  position: relative;
}
.decoration {
  position: absolute;
  top: -105px;
  left: -110px;
  width: 100%;
}
</style>
