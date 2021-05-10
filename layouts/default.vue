<template>
  <div :class="{ 'open-nav': navActive }">
    <TopNav :active="navActive" @toggle="toggleNav" />
    <main class="main">
      <Nuxt />
    </main>
    <FollowEvent />
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      navActive: false,
    }
  },
  methods: {
    toggleNav(value) {
      this.navActive = value
    },
  },
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  z-index: var(--z-index-content);
  width: 100%;
  overflow: hidden;
}
.open-nav {
  @media screen and (max-width: $screen-sm) {
    height: 100vh;
    overflow: hidden;
  }
}
</style>
