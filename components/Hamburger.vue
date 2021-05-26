<template>
  <div class="burger" :class="{ 'burger--active': active }">
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
.burger {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  span {
    position: relative;
    top: 0;
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    background: var(--bg-hamburger);
    border-radius: 3px;
    transform-origin: 4px 0;
    cursor: pointer;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    &:first-child {
      transform-origin: 0% 0%;
    }
    &:nth-child(2) {
      width: 18px;
    }
    &:nth-child(3) {
      width: 10px;
      transform-origin: 0% 100%;
    }
  }
  &--active {
    display: block;
    span {
      background: var(--bg-hamburger--open);
      transform: rotate(45deg) translate(-2px, -1px);
      opacity: 1;
      &:nth-child(2) {
        transform: rotate(0deg) scale(0.2, 0.2);
        opacity: 0;
      }
      &:nth-child(3) {
        width: 33px;
        transform: rotate(-45deg) translate(-2px, 0);
      }
    }
  }
}
</style>
