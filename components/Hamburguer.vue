<template>
  <div class="burguer" :class="{ 'burguer--active': active }">
    <span />
    <span />
    <span />
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.burguer {
  span {
    position: relative;
    top: 0;
    display: block;
    width: 28px;
    height: 3px;
    margin: 3px 0;
    background: var(--bg-hamburger);
    cursor: pointer;
    transition: transform 0.2s linear, top 0.15s ease-in-out 0.3s,
      color 0.25s ease 0.2s, width 0.25s ease 0.2s;
    &:nth-child(2) {
      width: 18px;
    }
    &:nth-child(3) {
      width: 8px;
    }
  }
  &--active {
    span {
      background: var(--bg-hamburger--open);
      &:nth-child(1) {
        top: 6px;
        transform: rotate(45deg);
        transition: top 0.2s linear, transform 0.15s ease 0.3s,
          color 0.25s ease 0.2s;
      }
      &:nth-child(2) {
        width: 0;
        transition: color 0.25s ease 0.2s;
      }
      &:nth-child(3) {
        top: -6px;
        width: 28px;
        transform: rotate(-45deg);
        transition: top 0.2s linear, transform 0.15s ease 0.3s,
          color 0.25s ease 0.2s;
      }
    }
  }
}
</style>
