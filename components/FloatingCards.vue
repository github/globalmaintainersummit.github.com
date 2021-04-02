<template>
  <div class="floating">
    <div class="floating__wrapper">
      <FloatingCard
        v-for="project in slicedProjects(3)"
        :key="project.name"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
  methods: {
    slicedProjects(limit) {
      // Limit the content lenght to display only an specific amount of cards.
      return this.content.slice(0, limit)
    },
  },
}
</script>

<style lang="scss" scoped>
.floating {
  display: none;
  @media screen and (min-width: $screen-xl) {
    position: relative;
    display: block;
  }
  &__wrapper {
    position: absolute;
    top: 0;
    right: 0;
    .card {
      position: absolute;

      &:nth-child(1) {
        top: -80px;
        left: -620px;
      }
      &:nth-child(2) {
        top: 260px;
        left: calc(100vw * -0.4);
        left: -420px;
      }
      &:nth-child(3) {
        top: 100px;
        left: calc(100vw * -0.25);
        left: -200px;
      }
    }
  }
}
</style>
