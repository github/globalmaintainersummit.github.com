<template>
  <div class="main">
    <Hero :content="hero" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const { hero } = await $content('home').fetch()

    return {
      hero,
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  @include section();
}
</style>
