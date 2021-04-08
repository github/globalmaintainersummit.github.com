<template>
  <div>
    <span class="glow glow--left" />
    <span class="glow glow--right" />
    <span class="glow glow--middle" />
    <span class="glow glow--bottom" />
  </div>
</template>

<style lang="scss" scoped>
.glow {
  position: absolute;
  z-index: var(--z-index-decorative);
  width: 40%;
  min-width: 400px;
  height: calc(100vw * 0.4);
  min-height: 400px;
  border-radius: 100%;
  opacity: 0.3;
  filter: blur(50px);
  &--left {
    top: -15%;
    left: -15%;
    background-color: var(--bg-glow);
  }
  &--right {
    top: -18%;
    right: -23%;
    background-color: var(--bg-glow-accent);
  }
  &--middle {
    top: 35%;
    right: -19%;
    background-color: var(--bg-glow);
  }
  &--bottom {
    bottom: -22%;
    left: 12%;
    width: 66%;
    height: calc(100vw * 0.3);
    background-color: var(--bg-glow);
  }
}
</style>
