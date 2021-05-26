<template>
  <nuxt-link
    :to="`/maintainer/${maintainer.handler}`"
    class="maintainer"
    :class="{ 'maintainer--oversize': oversize }"
  >
    <div class="maintainer__image">
      <img
        :src="require(`~/assets/img/maintainers/${maintainer.handler}.jpg`)"
        :alt="maintainer.name"
      />
    </div>
    <div class="maintainer__content">
      <h3>{{ maintainer.profile.name }}</h3>
      <p>{{ maintainer.project.name }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    maintainer: {
      type: Object,
      required: true,
    },
    oversize: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.maintainer {
  --maintainer-width: 256px;
  --maintainer-height: 284px;
  --maintainer-border: 5px;

  &--oversize {
    --maintainer-width: 256px;
    --maintainer-height: 284px;
    @media screen and (min-width: $screen-sm) {
      --maintainer-width: 376px;
      --maintainer-height: 420px;
    }
  }

  /*
  Optional display table to avoid the
  focus ring to include the "shadow" shape
  */
  display: table;
  max-width: var(--maintainer-width);
  color: var(--fc-default);
  &__image {
    position: relative;
    width: calc(var(--maintainer-width) + var(--maintainer-border));
    height: calc(var(--maintainer-height) + var(--maintainer-border));

    img {
      position: relative;
      top: 0;
      left: 0;
      width: calc(var(--maintainer-width) + var(--maintainer-border));
      height: calc(var(--maintainer-height) + var(--maintainer-border));
      object-fit: cover;
      object-position: center;
      border: var(--maintainer-border) var(--bg-body) solid;
      transition: top 0.25s ease-in-out, left 0.25s ease-in-out;
    }
    &::before {
      position: absolute;
      z-index: 1;
      display: block;
      width: 100%;
      height: 100%;
      background: rgba(197, 98, 245, 1);
      background: radial-gradient(
        circle at var(--gradient-position),
        rgba(197, 98, 245, 1),
        rgba(246, 128, 132, 0.4)
      );
      background-position: center;
      opacity: 0.75;
      mix-blend-mode: color;
      transition: opacity 0.25s ease-in-out;
      content: '';
      @media (prefers-reduced-motion: reduce) {
        opacity: 0;
      }
    }
    &::after {
      position: absolute;
      top: 19px;
      left: 19px;
      z-index: -1;
      display: block;
      width: var(--maintainer-width);
      height: var(--maintainer-height);
      background-color: var(--bg-dimmed);
      transition: background-color 0.25s ease-in-out, top 0.25s ease-in-out,
        left 0.25s ease-in-out;
      content: '';
      -webkit-mask-image: url('~/assets/svg/pattern_shadow.svg');
      mask-image: url('~/assets/svg/pattern_shadow.svg');
    }
  }

  cursor: pointer;
  &__content {
    --t-font-color: color 0.3s ease-in;

    margin-top: 40px;
    h3 {
      @include mobileToDesktopFontSize(var(--fs-small), var(--fs-large));

      margin: 0;
      padding: 0;
      color: var(--fc-default);
      transition: var(--t-font-color);
    }
    p {
      margin: 16px 0 0 0;
      padding: 0;
      color: var(--fc-primary);
      font-size: var(--fs-small);
      transition: var(--t-font-color);
    }
  }
  &:hover,
  &:focus {
    .maintainer__image {
      &::before {
        opacity: 0;
      }
      &::after {
        top: 21px;
        left: 21px;
        background-color: var(--bg-accent);
      }
    }
    .maintainer__content {
      h3 {
        color: var(--fc-primary);
      }
      p {
        color: var(--fc-default);
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .maintainer__image {
        &::after {
          top: 19px;
          left: 19px;
          background-color: var(--bg-accent);
        }
      }
    }
  }
}
</style>
