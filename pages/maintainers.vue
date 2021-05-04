<template>
  <section>
    <CommonGrid :items="maintainersList" data-cy="maintainers" />
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
