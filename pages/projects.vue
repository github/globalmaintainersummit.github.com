<template>
  <section class="projects">
    <CommonMaintainerSwitchButton />
    <CommonGrid :projects="maintainers" data-cy="projects" />
  </section>
</template>

<script>
import socialMetadata from '~/mixins/social-metadata'

export default {
  mixins: [socialMetadata],
  async asyncData({ $content }) {
    const maintainers = await $content('2021/shared/maintainers').fetch()

    return { maintainers }
  },
}
</script>

<style lang="scss" scoped>
.projects {
  @include section();

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-image: url('~/assets/svg/bg_pills/graphic_pills.svg');
  background-repeat: no-repeat;
  background-position: top;
}
</style>
