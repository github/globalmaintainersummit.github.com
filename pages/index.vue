<template>
  <div
    class="main"
    style="display: grid; place-items: center; margin-top: 100px"
  >
    <h1>Open Source Maintainer Summit - June 7-9 2021</h1>
    <p>
      A virtual gathering for the maintainers that make open source possible.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.main {
  @include section();
}
h1 {
  @include gradientTitle(var(--bg-gradient-start), var(--bg-gradient-end));
}
</style>
