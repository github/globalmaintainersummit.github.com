<template>
  <div class="overflow-hidden">
    <span class="glow glow--left" />
    <span class="glow glow--right" />
    <span class="glow glow--bottom" />
  </div>
</template>

<style lang="scss" scoped>
.overflow-hidden {
  overflow: hidden;
}
.glow {
  position: absolute;
  z-index: var(--z-index-decorative);
  width: 40%;
  min-width: 400px;
  height: calc(100vw * 0.4);
  min-height: 400px;
  border-radius: 100%;
  opacity: 0.4;
  filter: blur(50px);
  &--left {
    top: -15%;
    left: -15%;
    background-color: var(--bg-glow);
  }
  &--right {
    top: -25%;
    right: -25%;
    background-color: var(--bg-glow-accent);
  }
  &--bottom {
    top: 35%;
    right: -15%;
    background-color: var(--bg-glow);
  }
}
</style>
