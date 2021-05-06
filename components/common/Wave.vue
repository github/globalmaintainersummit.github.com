<template>
  <div class="wave"></div>
</template>

<style lang="scss" scoped>
.wave {
  position: relative;
  top: -8px;
  display: inline-block;
  width: 100%;
  content: '';
  &::after {
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100%;
    height: 24px;
    background: radial-gradient(
          52% 100% at 50% -10px,
          transparent calc(100% - 4px),
          var(--underline-color) calc(100% - 3px) calc(100% - 1px),
          transparent
        ) -18px 100%,
      radial-gradient(
          52% 100% at 50% calc(100% + 10px),
          transparent calc(100% - 4px),
          var(--underline-color) calc(100% - 3px) calc(100% - 1px),
          transparent
        )
        0 calc(100% - 12px);
    background-repeat: repeat-x;
    background-size: 36px 16px;
    transition: 0.5s ease, mask-position 0s 0.5s;
    content: '';
    mask: linear-gradient(#fff 0 0) top / 100% calc(100% - 18px),
      linear-gradient(#fff 0 0) 100% 100% / 100% 18px;
    mask-repeat: no-repeat;
  }
}
</style>
