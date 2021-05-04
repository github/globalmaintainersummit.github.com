<template>
  <div class="button-wrapper">
    <Component
      :is="type"
      class="button"
      :class="iconPrefix && 'button--reverse'"
      :href="href"
      :to="to"
      role="link"
    >
      <span class="button__text" role="presentation" aria-hidden="true">
        <slot name="text" />
      </span>
      <span class="button__icon">
        <slot name="icon" />
      </span>
    </Component>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
    iconPrefix: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    type() {
      return this.to ? 'nuxt-link' : 'a'
    },
  },
}
</script>

<style lang="scss" scoped>
.button-wrapper {
  display: inline-block;
}

.button {
  --box-shadow-color: var(--bs-button);

  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10px;
  padding: 24px 32px;
  background-color: var(--bg-button);
  border: 3px solid var(--bg-body);
  border-radius: 33px;
  box-shadow: 6px 8px 0 0 var(--box-shadow-color);
  transition: all 0.3s ease-in;
  &:hover {
    --box-shadow-color: var(--bs-button--hover);

    background-color: var(--bg-button--hover);
  }
  &--reverse {
    flex-direction: row-reverse;
  }

  &__icon {
    width: 21px;
    height: 23px;
  }

  &__text {
    color: var(--fc-light);
  }
}
</style>
