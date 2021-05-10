\
<template>
  <section>
    <div class="decoration" aria-hidden="true">
      <img src="~/assets/svg/bg_pills/graphic_hero.svg" alt="" />
    </div>
    <HomeHero :content="hero" />
    <section>
      <h2>{{ content.title1 }}</h2>
      <p v-html="content.block1" />
      <h1>{{ content.title2 }}</h1>
      <p v-html="content.block2" />
      <CommonCalendarDropdown type="button" />
    </section>
    <CommonGrid :maintainers="maintainers" three-cols data-cy="maintainers" />
  </section>
</template>

<script>
import socialMetadata from '~/mixins/social-metadata'

export default {
  mixins: [socialMetadata],
  async asyncData({ $content }) {
    const { content, hero } = await $content('2021/pages/home/index').fetch()
    const maintainers = await $content('2021/shared/maintainers').fetch()

    return {
      content,
      hero,
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
