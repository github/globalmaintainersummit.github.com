<template>
  <Component
    :is="type"
    v-bind="
      href || mailto ? { href: mailto ? `mailto:${mailto}` : href } : { to }
    "
    :target="href ? '_blank' : null"
    class="link"
    :class="{ button: button }"
    role="link"
    :tabindex="button ? 0 : null"
  >
    <span :class="!button && 'link__content'">
      <slot />
    </span>
  </Component>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
    mailto: {
      type: String,
      default: null,
    },
    button: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    type() {
      if (this.to !== null) {
        return 'nuxt-link'
      } else if (this.href !== null || this.mailto !== null) {
        return 'a'
      } else {
        return 'span'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.link {
  position: relative;
  display: inline-block;
  font-weight: var(--fw-semi-bold);
  font-size: var(--fs-small);
  text-decoration: none;
  &::after {
    position: absolute;
    bottom: -22px;
    left: 0;
    width: 100%;
    height: 24px;
    background: radial-gradient(
          52% 100% at 50% -12px,
          transparent calc(100% - 5px),
          var(--underline-color) calc(100% - 4px) calc(100% - 1px),
          transparent
        ) -18px 100%,
      radial-gradient(
          52% 100% at 50% calc(100% + 12px),
          transparent calc(100% - 5px),
          var(--underline-color) calc(100% - 4px) calc(100% - 1px),
          transparent
        )
        0 calc(100% - 15px);
    background-repeat: repeat-x;
    background-size: 36px 20px;
    cursor: pointer;
    transition: 0.5s ease, mask-position 0s 0.5s;
    content: '';
    mask: linear-gradient(#fff 0 0) top / 100% calc(100% - 24px),
      linear-gradient(#fff 0 0) var(--p, 0) 100% / var(--d, 0) 24px;
    mask-repeat: no-repeat;
  }
  &:hover {
    --d: 100%;
    --p: 100%;
  }
}

.button {
  @include mobileToDesktopFontSize(var(--fs-small), var(--fs-default));

  padding: 16px 40px 20px;
  font-weight: var(--fw-semi-bold);
  background-color: var(--black);
  border-radius: 8px;
  outline-offset: 4px;
}
</style>
