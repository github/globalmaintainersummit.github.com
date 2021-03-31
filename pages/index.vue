<template>
  <div style="display: grid; place-items: center; margin-top: 100px">
    <h1>Open Source Maintainer Summit - June 7-9 2021</h1>
    <p>
      A virtual gathering for the maintainers that make open source possible.
    </p>
    <div style="display: flex; flex-direction: column; gap: 16px">
      <CustomLink href="#">Terms</CustomLink>
      <CustomLink href="#" button>Nominate an Open Source Project</CustomLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  @include gradientTitle(var(--bg-gradient-start), var(--bg-gradient-end));
}
</style>
