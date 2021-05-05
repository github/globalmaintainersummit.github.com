<template>
  <Component
    :is="type"
    v-bind="
      href ? { href: mailto !== null ? `mailto:${mailto}` : href } : { to }
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
  --underline-color: var(--salmon);

  position: relative;
  display: inline-block;
  font-weight: var(--fw-semi-bold);
  font-size: var(--fs-small);
  text-decoration: none;
  &::after {
    position: absolute;
    bottom: -18px;
    left: 0;
    height: 24px;

    /** Draw a circle at the center and displaced it up 10px
     Then draw a transparent 100% circle less -4px that will act as a "border"
     and another one with color that extrudes thos 4 pixels (3+1) to make it smother on both sides.
     form there to the rest of the backgroudn extend the transparency. */
    background: radial-gradient(
          52% 100% at 50% -10px,
          transparent calc(100% - 4px),
          var(--underline-color) calc(100% - 3px) calc(100% - 1px),
          transparent
        ) -18px 100%,
      /** Draw a circle at the top center and displaced it to the bottom + 10px
      and follow the exact instrucitions as the previous one. */
        radial-gradient(
          52% 100% at 50% calc(100% + 10px),
          transparent calc(100% - 4px),
          var(--underline-color) calc(100% - 3px) calc(100% - 1px),
          transparent
        )
        0 calc(100% - 12px);
    background-repeat: repeat-x;
    // Width and height of a single wave
    background-size: 36px 16px;
    cursor: pointer;
    transition: 0.5s ease, mask-position 0s 0.5s;
    content: '';
    // Add a mask to hide the whole gradient that can be animated to be removed.
    mask: linear-gradient(#fff 0 0) top / 100% calc(100% - 18px),
      linear-gradient(#fff 0 0) var(--p, 0) 100% / var(--d, 0) 18px;
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
