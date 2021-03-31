<template>
  <Component
    :is="type"
    :href="href ? link : null"
    :to="to ? to : null"
    :target="href ? '_blank' : null"
    class="link"
    :class="button && 'button'"
    role="link"
    tabindex="0"
  >
    <span class="link__text">
      <slot />
    </span>
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
.link {
  cursor: pointer;
}

.button {
  padding: 16px 40px 20px;
  color: var(--fc-dark);
  font-weight: var(--fw-semi-bold);
  background: linear-gradient(
    119.72deg,
    var(--bg-gradient-start) 0%,
    var(--bg-gradient-end) 100%
  );
  background-size: 100%;
  border-radius: 8px;
  outline-offset: 4px;

  &:hover,
  &:focus {
    background-size: 250%;
    transition: background 0.75s linear;
  }
}
</style>
