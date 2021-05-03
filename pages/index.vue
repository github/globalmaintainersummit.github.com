<template>
  <section>
    <h1 style="display: flex; margin-top: 100px; place-content: center">
      Work in progress
    </h1>
    <CommonGrid :items="maintainersHome" three-cols />
  </section>
</template>

<script>
import socialMetadata from '~/mixins/social-metadata'

export default {
  mixins: [socialMetadata],
  data() {
    return {
      maintainersHome: [
        { name: 'Bartłomiej Płotka', project: 'Prometheus' },
        { name: 'Chrissy LeMaire', project: 'dbatools' },
        { name: 'Eileen Uchitelle', project: 'Ruby on Rails' },
        { name: 'Helen Hou-Sandí', project: 'WordPress' },
        { name: 'Ifiok Jr.', project: 'Remirror' },
        { name: 'Lorena Mesa', project: 'PyLadies' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
section {
  @include section();
}
</style>
