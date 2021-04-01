<template>
  <div>
    <div class="details">
      <p class="details__highlight">{{ content.highlight }}</p>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="details__content" v-html="content.body" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.details {
  max-width: 628px;
  margin-top: 60px;
  @media screen and (min-width: $screen-ipad) {
    margin-top: 120px;
  }

  &__highlight,
  &__content {
    color: var(--fc-default);
    font-size: var(--fs-regular);
  }
  &__content {
    color: var(--fc-dimmed);
  }
}
</style>
