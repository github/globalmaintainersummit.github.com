<template>
  <div :class="{ 'open-nav': navActive }">
    <TopNav :active="navActive" @toggle="toggleNav" />
    <main class="main">
      <transition name="fade" mode="out-in">
        <Nuxt />
      </transition>
    </main>
    <FollowEvent />
    <Footer />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      navActive: false,
    }
  },
  mounted() {
    this.updateUserTimeZone(this.$timezone())
  },
  methods: {
    ...mapMutations(['updateUserTimeZone']),
    toggleNav() {
      this.navActive = !this.navActive
    },
  },
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  z-index: var(--z-index-content);
  width: 100%;
  margin-top: 80px;
  overflow: hidden;
  @media (min-width: $screen-sm) {
    margin-top: 112px;
  }
}
.open-nav {
  @media screen and (max-width: $screen-sm) {
    height: 100vh;
    overflow: hidden;
  }
}
</style>
