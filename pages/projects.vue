<template>
  <section class="projects">
    <CommonSwitchButton />
    <CommonGrid :projects="projectsList" data-cy="projects" />
  </section>
</template>

<script>
import socialMetadata from '~/mixins/social-metadata'

export default {
  mixins: [socialMetadata],
  async asyncData({ $content }) {
    const { projects } = await $content('2021/pages/projects/index').fetch()

    const projectsList = projects.list.sort(
      ({ name: nameA }, { name: nameB }) => nameA.localeCompare(nameB)
    )
    return {
      projectsList,
    }
  },
}
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-image: url('~/assets/svg/bg_pills/graphic_pills.svg');
  background-repeat: no-repeat;
  background-position: top;
}
</style>
