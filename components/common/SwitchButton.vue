<template>
  <div class="switch">
    <Component
      :is="type"
      v-for="option in options"
      :key="option.label"
      class="switch-button"
      :to="option.to ? option.to : null"
    >
      {{ option.label }}
    </Component>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  computed: {
    type() {
      return this.options[0].to ? 'nuxt-link' : 'button'
    },
  },
}
</script>

<style lang="scss">
.switch {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 40px 24px 12px;
  color: var(--fc-light);
  font-size: var(--fs-extra-small);
  font-family: var(--ff-title);
  @media only screen and (min-width: $screen-xs) {
    padding: 40px 24px;
    font-size: var(--fs-small);
  }
  @media only screen and (min-width: $screen-sm) {
    justify-content: flex-end;
    padding: 40px 40px 0;
  }

  &-button {
    z-index: var(--z-index-switch-off);
    padding: 11px 32px 9px;
    color: var(--fc-default);
    background: var(--white-lilac);
    border-radius: 32px;
    transition: color 0.4s ease, background 0.4s ease, opacity 0.4s ease;
    @media only screen and (min-width: $screen-xs) {
      padding: 11px 48px 9px;
    }
    @media only screen and (min-width: $screen-sm) {
      padding: 8px 32px 7px;
    }

    &:last-of-type {
      margin-left: -18px;
      @media only screen and (min-width: $screen-xs) {
        margin-left: -28px;
      }
      @media only screen and (min-width: $screen-sm) {
        margin-left: -24px;
      }
    }

    &:hover,
    &:focus {
      color: var(--fc-primary);
    }
    &.nuxt-link-exact-active {
      z-index: var(--z-index-switch-on);
      color: var(--fc-light);
      background-image: linear-gradient(135deg, #c562f5 0%, #f68084 100%);
    }
  }
}
</style>
