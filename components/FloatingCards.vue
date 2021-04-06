<template>
  <div class="floating">
    <div class="floating__wrapper">
      <FloatingCard
        v-for="project in slicedProjects(8)"
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
    --position-y: -100px;

    position: absolute;
    top: var(--position-y);
    right: 0;
    width: 100%;
    height: 400px;
    transition: top 0.25s ease;
    .card {
      position: absolute;
      &:nth-child(1) {
        // PyLadies
        top: -10px;
        right: calc(100vw * 0.07);
      }
      &:nth-child(2) {
        // Ruby on Rails
        top: 95px;
        right: calc(100vw * 0.25);
      }
      &:nth-child(3) {
        // Wordpress
        top: 200px;
        right: calc(100vw * -0.1);
      }
      &:nth-child(4) {
        // Homebrew
        top: 350px;
        right: calc(100vw * 0.075);
      }
      &:nth-child(5) {
        // Node.js
        top: 800px;
        right: calc(100vw * 0.075);
      }
      &:nth-child(6) {
        // Phyton
        top: 550px;
        right: calc(100vw * 0.02);
      }
      &:nth-child(7) {
        // Prometheus
        top: 1300px;
        right: calc(100vw * 0.49);
      }
      &:nth-child(8) {
        // Rust
        top: 1500px;
        right: calc(100vw * 0.4);
      }
    }
  }
}
</style>
