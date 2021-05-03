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
  display: inline-block;
  font-weight: var(--fw-semi-bold);
  font-size: var(--fs-small);
  text-decoration: none;
  cursor: pointer;
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
