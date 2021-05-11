<template>
  <div class="button-wrapper">
    <Component
      :is="type"
      class="button"
      :class="{
        'button--reverse': iconSuffix,
        'button--animate-heart': icon === 'heart',
        'button--dark': theme === 'dark',
        'button--light': theme === 'light',
        'button--transparent': theme === 'transparent',
      }"
      :href="href"
      :target="href && '__blank'"
      :to="to"
      role="link"
      tabindex="0"
      @click="handleClick"
      @keydown.enter="handleClick"
      @keydown.space="handleClick"
    >
      <span class="button__icon" role="presentation" aria-hidden="true">
        <ArrowRight
          v-if="icon === 'arrow-right'"
          class="button__icon--arrow-right"
        />
        <ArrowRight
          v-if="icon === 'arrow-left'"
          class="button__icon--arrow-left"
        />
        <Heart v-else-if="icon === 'heart'" class="button__icon--heart" />
        <Calendar
          v-else-if="icon === 'calendar'"
          class="button__icon--calendar"
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
import Heart from '~/assets/svg/icons/heart.svg?inline'
import Calendar from '~/assets/svg/icons/calendar.svg?inline'

export default {
  components: {
    ArrowRight,
    Heart,
    Calendar,
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
        return ['arrow-right', 'arrow-left', 'heart', 'calendar'].includes(
          value
        )
      },
    },
    theme: {
      type: String,
      default: 'dark',
      validator: (value) => {
        return ['dark', 'light', 'transparent'].includes(value)
      },
    },
    iconSuffix: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    type() {
      return this.to ? 'nuxt-link' : this.href ? 'a' : 'button'
    },
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.button-wrapper {
  display: inline-block;
}

.button {
  @include mobileToDesktopFontSize(var(--fs-smaller), var(--fs-small));

  display: flex;
  align-items: center;
  padding: 20px 32px 18px;
  color: var(--button-text-color);
  font-family: var(--ff-title);
  white-space: nowrap;
  column-gap: 24px;
  background-color: var(--button-bg);
  border: var(--button-border);
  border-radius: 42px;
  box-shadow: var(--button-box-shadow);
  cursor: pointer;
  transition: all 0.3s ease-in;
  &--reverse {
    flex-direction: row-reverse;
  }

  &--dark {
    --button-bg: var(--bg-dark);
    --button-bg--hover: var(--bg-primary);
    --button-border: 3px solid var(--bg-body);
    --button-text-color: var(--fc-light);
    --button-box-shadow: 6px 8px 0 0 var(--bg-primary);
    --button-box-shadow--hover: 8px 10px 0 0 var(--bg-accent);
  }
  &--light {
    --button-bg: var(--bg-body);
    --button-bg--hover: var(--bg-body);
    --button-border: 3px solid var(--bg-primary);
    --button-text-color: var(--fc-default);
    --button-box-shadow: 6px 8px 0 0 var(--bg-primary-dark);
    --button-box-shadow--hover: 8px 10px 0 0 var(--bg-dark);
  }
  &--transparent {
    --button-bg: transparent;
    --button-bg-hover: transparent;
    --button-border: none;
    --button-text-color: var(--fc-primary);
    --button-box-shadow: none;
    --button-box-shadow--hover: none;
    &:hover,
    &:focus {
      color: var(--fc-default);
    }
  }

  &__icon {
    &--arrow-left {
      width: 18px;
      height: 14px;
      transform: scaleX(-1);
    }
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
    background-color: var(--button-bg--hover);
    box-shadow: var(--button-box-shadow--hover);
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
}
</style>
