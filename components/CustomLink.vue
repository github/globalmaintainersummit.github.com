<template>
  <Component
    :is="type"
    :href="href ? link : null"
    :to="to ? to : null"
    :target="href ? '_blank' : null"
    :class="button && 'button'"
    :role="button ? 'button' : 'link'"
  >
    <slot />
  </Component>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    button: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    type() {
      if (this.to) {
        return 'nuxt-link'
      } else if (this.href) {
        return 'a'
      } else {
        return 'span'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  padding: 16px 40px 20px;
  color: var(--fc-dark);
  background-image: linear-gradient(
    119.72deg,
    var(--bg-gradient-start) 0%,
    var(--bg-gradient-end) 100%
  );
  border-radius: 8px;
}
</style>
