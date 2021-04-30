<template>
  <div>
    <TopNav />
    <main class="main">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import TopNav from '~/components/TopNav.vue'
export default {
  components: { TopNav },
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
  overflow: hidden;
}
</style>
