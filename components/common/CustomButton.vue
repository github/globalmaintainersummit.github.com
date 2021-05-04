<template>
  <div class="button-wrapper">
    <Component
      :is="type"
      class="button"
      :class="iconSuffix && 'button--reverse'"
      :href="href"
      :to="to"
      role="link"
    >
      <span class="button__icon" role="presentation" aria-hidden="true">
        <ArrowRight v-if="icon === 'arrow-right'" class="button__icon--arrow" />
        <HeartEmpty v-if="icon === 'heart'" class="button__icon--heart" />
        <HeartFilled
          v-if="icon === 'heart'"
          class="button__icon--heart-filled"
        />
      </span>
      <span class="button__text">
        <slot />
      </span>
    </Component>
  </div>
</template>

<script>
import ArrowRight from '~/assets/svg/icons/arrow_right.svg?inline'
import HeartEmpty from '~/assets/svg/icons/heart_empty.svg?inline'
import HeartFilled from '~/assets/svg/icons/heart_filled.svg?inline'

export default {
  components: {
    ArrowRight,
    HeartEmpty,
    HeartFilled,
  },
  props: {
    href: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
      validator: (value) => {
        return ['arrow-right', 'heart'].includes(value)
      },
    },
    iconSuffix: {
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
  margin: 0 8px 10px 0;
  padding: 24px 32px;
  column-gap: 24px;
  background-color: var(--bg-button);
  border: 3px solid var(--bg-body);
  border-radius: 33px;
  box-shadow: 6px 8px 0 0 var(--box-shadow-color);
  cursor: pointer;
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
    @include mobileToDesktopFontSize(var(--fs-smaller), var(--fs-small));

    color: var(--fc-light);
    font-family: var(--ff-title);
  }
}
</style>
