<template>
  <section>
    <CommonGrid :projects="projectsList" data-cy="projects" />
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const { projects } = await $content('projects').fetch()

    const projectsList = projects.list.sort(
      ({ name: nameA }, { name: nameB }) => nameA.localeCompare(nameB)
    )
    return {
      projectsList,
    }
  },
}
</script>
