<template>
  <div class="main">
    <Hero :content="hero" />
    <Lead :content="lead" />
    <Details :content="details" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const { hero, lead, details } = await $content('home').fetch()

    return {
      hero,
      lead,
      details,
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  @include section();
}
</style>
