<template>
  <header>
    <GitHub aria-hidden="true" role="presentation" />
  </header>
</template>

<script>
import GitHub from '~/assets/svg/github.svg?inline'

export default {
  components: {
    GitHub,
  },
}
</script>

<style lang="scss" scoped>
header {
  @include section();

  position: relative;
  margin-top: 40px;
  @media screen and (min-width: $screen-ipad) {
    margin-top: 80px;
  }
}
</style>
