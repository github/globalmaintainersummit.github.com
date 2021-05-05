<template>
  <div class="button-wrapper">
    <Component
      :is="type"
      class="button"
      :class="{
        'button--reverse': iconSuffix,
        'button--animate-heart': icon === 'heart',
      }"
      :href="href"
      :target="href && '__blank'"
      :to="to"
      role="link"
      tabindex="0"
    >
      <span class="button__icon" role="presentation" aria-hidden="true">
        <ArrowRight
          v-if="icon === 'arrow-right'"
          class="button__icon--arrow-right"
        />
        <Heart v-else-if="icon === 'heart'" class="button__icon--heart" />
      </span>
      <span class="button__text">
        <slot />
      </span>
    </Component>
  </div>
</template>

<script>
import ArrowRight from '~/assets/svg/icons/arrow_right.svg?inline'
import Heart from '~/assets/svg/icons/heart.svg?inline'

export default {
  components: {
    ArrowRight,
    Heart,
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
  display: flex;
  align-items: center;
  margin: 0 8px 10px 0;
  padding: 24px 32px;
  column-gap: 24px;
  background-color: var(--bg-button);
  border: 3px solid var(--bg-body);
  border-radius: 42px;
  box-shadow: 6px 8px 0 0 var(--bs-button);
  cursor: pointer;
  transition: all 0.3s ease-in;

  &--reverse {
    flex-direction: row-reverse;
  }

  &__icon {
    &--arrow-right {
      width: 18px;
      height: 14px;
    }
    &--heart {
      width: 22px;
      height: 19px;
      path {
        transition: fill-opacity 0.3s linear;
        stroke: white;
        stroke-width: 2px;
        fill-opacity: 0;
      }
    }
  }

  &:hover,
  &:focus {
    background-color: var(--bg-button--hover);
    box-shadow: 8px 10px 0 0 var(--bs-button--hover);
    .button__icon--heart {
      path {
        fill: white;
        fill-opacity: 1;
      }
    }
  }

  &:active {
    .button__icon--heart {
      path {
        --heart-fill: #eb5281;

        fill: var(--heart-fill);
        stroke: var(--heart-fill);
      }
    }
  }

  &__text {
    @include mobileToDesktopFontSize(var(--fs-smaller), var(--fs-small));

    color: var(--fc-light);
    font-family: var(--ff-title);
  }
}
</style>
