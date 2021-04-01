<template>
  <main class="main">
    <section>
      <Hero :content="hero" />
      <Lead :content="lead" />
      <Details :content="details" />
      <div class="cta">
        <CommonLink button :href="cta.url">
          {{ cta.label }}
        </CommonLink>
      </div>
    </section>
    <DecorativeGlows />
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const { hero, lead, details, cta } = await $content('home').fetch()

    return {
      hero,
      lead,
      details,
      cta,
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
  overflow: hidden;
}
section {
  @include section();
}
.cta {
  margin-top: 88px;
}
</style>
