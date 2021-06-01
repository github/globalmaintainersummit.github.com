<template>
  <section class="maintainers">
    <CommonMaintainerSwitchButton />
    <CommonGrid :maintainers="maintainersList" data-cy="maintainers" />
  </section>
</template>

<script>
import socialMetadata from '~/mixins/social-metadata'

export default {
  mixins: [socialMetadata],
  async asyncData({ $content }) {
    const maintainers = await $content('2021/shared/maintainers').fetch()

    const maintainersList = maintainers.sort(
      ({ profile: profileA }, { profile: profileB }) =>
        profileA.name.localeCompare(profileB.name)
    )
    return {
      maintainersList,
    }
  },
}
</script>

<style lang="scss" scoped>
.maintainers {
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
