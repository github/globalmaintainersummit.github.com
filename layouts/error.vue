<template>
  <main class="error">
    <Error404 />
    <CommonLink button to="/">Go to the Homepage</CommonLink>
    <Footer />
  </main>
</template>

<script>
import Error404 from '~/assets/svg/bg_404.svg?inline'

export default {
  components: {
    Error404,
  },
  transition: {
    name: 'fade',
  },
}
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
  place-items: center;
  max-height: 100vh;
  a {
    margin-top: 40px;
  }
  svg {
    width: 100%;
    padding: 0 24px;
    opacity: 0.7;
  }
}
</style>
