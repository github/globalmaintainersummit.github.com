<template>
  <div class="logo" :class="animatedHover && 'logo--animated'">
    <img
      v-if="badge"
      :src="require(`~/assets/img/badges/${badge}`)"
      :alt="alt"
      role="presentation"
    />
  </div>
</template>

<script>
export default {
  props: {
    badge: {
      type: String,
      default: null,
    },
    alt: {
      type: String,
      default: null,
    },
    animatedHover: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.logo {
  --project-width: 85px;
  --project-height: 85px;
  --project-border: 3px;

  position: relative;
  width: calc(var(--project-width) + var(--project-border));
  height: calc(var(--project-height) + var(--project-border));
  img {
    position: relative;
    top: 0;
    left: 0;
    width: calc(var(--project-width) + var(--project-border));
    height: calc(var(--project-height) + var(--project-border));
    object-position: center;
    overflow: hidden;
    border: var(--project-border) white solid;
    border-radius: 44px;
    transition: top 0.25s ease, left 0.25s ease;
  }
  &::after {
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: -1;
    display: block;
    width: var(--project-width);
    height: var(--project-height);
    overflow: hidden;
    background-color: var(--bg-dimmed);
    border-radius: 44px;
    transition: background-color 0.25s ease, top 0.25s ease, left 0.25s ease;
    content: '';
    -webkit-mask-image: url('~/assets/svg/pattern_shadow.svg');
    mask-image: url('~/assets/svg/pattern_shadow.svg');
  }
  &--animated {
    &:hover,
    &:focus {
      &::after {
        top: 7px;
        left: 7px;
        background-color: var(--bg-accent);
      }
    }
  }
}
</style>
