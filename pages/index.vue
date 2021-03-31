<template>
  <div
    class="main"
    style="display: grid; place-items: center; margin-top: 100px"
  >
    <h1>{{ page.hero.title }}</h1>
    <p>
      {{ page.hero.subtitle }}
    </p>
    <div style="display: flex; flex-direction: column; gap: 16px">
      <CustomLink href="#">Terms</CustomLink>
      <CustomLink href="#" button>Nominate an Open Source Project</CustomLink>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('home').fetch()

    return {
      page,
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  @include section();
}
h1 {
  @include gradientTitle(var(--bg-gradient-start), var(--bg-gradient-end));
}
</style>
