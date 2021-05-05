<template>
  <div>
    <TopNav />
    <main class="main">
      <Nuxt />
    </main>
    <FollowEvent />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.main {
  position: relative;
  z-index: var(--z-index-content);
  width: 100%;
  overflow: hidden;
}
</style>
