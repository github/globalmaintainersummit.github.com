<template>
  <div class="switch">
    <Component
      :is="type"
      v-for="option in options"
      :key="option.label"
      class="switch-button"
      :class="{
        'switch-button--selected': selectedOption === option.label,
      }"
      :to="option.to ? option.to : null"
      :aria-label="`Change the ${id} to ${option.label}`"
      @click="$emit('click', option.label)"
    >
      {{ formatLabel(option.label) }}
    </Component>
  </div>
</template>

<script>
import { formatIANATimeZone } from '~/utils/date-utils'

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    selectedOption: {
      type: String,
      default: null,
    },
  },
  computed: {
    type() {
      return this.options[0].to ? 'nuxt-link' : 'button'
    },
  },
  methods: {
    formatLabel(option) {
      return this.type === 'button' ? formatIANATimeZone(option) : option
    },
  },
}
</script>

<style lang="scss" scoped>
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

  button {
    border: none;
  }

  &-button {
    z-index: var(--z-index-switch-off);
    padding: 11px 32px 9px;
    color: var(--fc-default);
    background: var(--white-lilac);
    border-radius: 32px;
    cursor: pointer;
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
    &.nuxt-link-exact-active,
    &:active,
    &--selected {
      z-index: var(--z-index-switch-on);
      color: var(--fc-light) !important;
      background-image: linear-gradient(135deg, #c562f5 0%, #f68084 100%);
    }
  }
}
</style>
