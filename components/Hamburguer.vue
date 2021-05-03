<template>
  <div class="burguer" :class="{ 'burguer--open': open }">
    <span />
    <span />
    <span />
  </div>
</template>

<script>
export default {
  props: {
    open: {
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
    background: var(--bg-hamburguer);
    cursor: pointer;
    transition: transform 0.2s linear, top 0.15s ease-in-out 0.3s,
      color 0.25s ease 0.2s;
  }
  &--open {
    span {
      background: var(--bg-hamburguer--open);
      &:nth-child(1) {
        top: 6px;
        transform: rotate(45deg);
        transition: top 0.2s linear, transform 0.15s ease 0.3s,
          color 0.25s ease 0.2s;
      }
      &:nth-child(2) {
        opacity: 0;
        transition: color 0.25s ease 0.2s;
      }
      &:nth-child(3) {
        top: -6px;
        transform: rotate(-45deg);
        transition: top 0.2s linear, transform 0.15s ease 0.3s,
          color 0.25s ease 0.2s;
      }
    }
  }
}
</style>
