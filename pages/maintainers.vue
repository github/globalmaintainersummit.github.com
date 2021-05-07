<template>
  <section class="maintainers">
    <CommonSwitchButton />
    <CommonGrid :maintainers="maintainersList" data-cy="maintainers" />
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const { maintainers } = await $content('maintainers').fetch()

    const maintainersList = maintainers.list.sort(
      ({ name: nameA }, { name: nameB }) => nameA.localeCompare(nameB)
    )
    return {
      maintainersList,
    }
  },
}
</script>

<style lang="scss" scoped>
.maintainers {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-image: url('~/assets/svg/bg_pills/graphic_pills.svg');
  background-repeat: no-repeat;
  background-position: top;
}
</style>
