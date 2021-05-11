<template>
  <div>hi</div>
</template>

<script>
import socialMetadata from '~/mixins/social-metadata'

export default {
  mixins: [socialMetadata],
  async asyncData({ $content, params }) {
    const maintainer = await $content(
      `2021/shared/maintainers/${params.profile}`
    ).fetch()

    return { maintainer }
  },
}
</script>
