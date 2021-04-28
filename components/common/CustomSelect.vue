<template>
  <div class="select">
    <span class="select__title">{{ title }}</span>
    <ul>
      <li v-for="option in options" :key="option">{{ option }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      required: true,
    },
    showIcons: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.select {
  padding: 24px;
  background: var(--bg-default);
  border-radius: 12px;
  box-shadow: 0 16px 24px 0 rgba(13, 9, 16, 0.08),
    0 8px 16px 0 rgba(13, 9, 16, 0.12);

  &__title {
    display: block;
    padding-bottom: 8px;
  }
}

ul {
  list-style-type: none;
  margin-block: 0;
  padding-inline: 0;
}

li {
  padding: 10px 0;
}
</style>
