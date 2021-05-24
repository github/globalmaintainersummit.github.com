<template>
  <section class="maintainers">
    <h3>{{ content.title }}</h3>
    <CommonGrid :maintainers="maintainers" three-cols data-cy="maintainers" />
    <div class="maintainers-button">
      <CommonCustomButton to="/maintainers" icon="arrow-right" icon-suffix>
        {{ content.cta }}
      </CommonCustomButton>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
    maintainers: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.maintainers {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  @media screen and (min-width: $screen-sm) {
    margin-top: 200px;
  }
  &-button {
    align-self: center;
    margin-top: 70px;
    margin-bottom: 10px;
  }
}
</style>
