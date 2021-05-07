\
<template>
  <section>
    <div class="decoration" aria-hidden="true">
      <img src="~/assets/svg/bg_pills/graphic_hero.svg" alt="" />
    </div>
    <HomeHero />
    <section style="margin: 40px auto">
      <CommonCalendarDropdown type="button" />
      <CommonCustomButton to="/design" icon="arrow-right" icon-suffix>
        All Maintainers
      </CommonCustomButton>
      <CommonCustomButton
        icon="heart"
        href="https://vuejs.org/v2/guide/components-slots.html"
      >
        Sponsor PyLadies
      </CommonCustomButton>
      <CommonCustomButton
        icon="arrow-right"
        theme="light"
        icon-suffix
        href="https://vuejs.org/v2/guide/components-slots.html"
      >
        Sign up
      </CommonCustomButton>
      <CommonCustomButton
        icon="arrow-left"
        theme="transparent"
        href="https://vuejs.org/v2/guide/components-slots.html"
      >
        Go Back
      </CommonCustomButton>
    </section>
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
