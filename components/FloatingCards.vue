<template>
  <div class="floating">
    <div ref="wrapper" class="floating__wrapper">
      <FloatingCard
        v-for="project in projects"
        :key="project.name"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      observers: [],
      maintainers: null,
    }
  },
  async fetch() {
    const { maintainers } = await this.$content('home')
      .only(['maintainers'])
      .fetch()
    this.maintainers = maintainers
  },
  computed: {
    projects() {
      return this.maintainers?.flatMap((maintainer) =>
        maintainer.projects.map((project) => ({
          ...project,
          speaker: maintainer.speaker,
        }))
      )
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.observeScroll()
    })
  },
  beforeDestroy() {
    this.observers.forEach((observer) => observer.disconnect())
  },
  methods: {
    observeScroll() {
      const options = {
        root: null,
        rootMargin: '-380px 0px 0px 0px',
        threshold: Array.from({ length: 100 }, (value, index) => index / 100),
      }

      const observer = new IntersectionObserver(
        (entries) => this.parallaxOnScroll(entries),
        options
      )
      observer.observe(this.$refs.wrapper)
    },
    parallaxOnScroll(entries) {
      entries.forEach(({ target, isIntersecting, intersectionRatio }) => {
        if (isIntersecting) {
          target.style.setProperty(
            '--position-y',
            `${(intersectionRatio - 1) * 220}px`
          )
        }
      })
    },
    buildThresholdList() {
      const thresholds = []
      const numSteps = 20

      for (let i = 1.0; i <= numSteps; i++) {
        const ratio = i / numSteps
        thresholds.push(ratio)
      }

      thresholds.push(0)
      return thresholds
    },
  },
}
</script>

<style lang="scss" scoped>
.floating {
  z-index: var(--z-index-cards);
  display: none;
  @media screen and (min-width: $screen-xl) {
    position: absolute;
    top: 380px;
    right: 0;
    left: 0;
    display: block;
    width: 100%;
    max-width: 1150px;
    margin: 0 auto;
  }
  &__wrapper {
    position: absolute;
    top: var(--position-y, 0);
    right: 0;
    width: 100%;
    height: 500px;
    transition: top linear;
    will-change: top;
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
        top: 1800px;
        right: calc(100vw * 0.6);
        @media screen and (min-width: $screen-max) {
          right: calc(100vw * 0.49);
        }
      }
      &:nth-child(8) {
        // Diesel
        top: 2000px;
        right: calc(100vw * 0.5);
        @media screen and (min-width: $screen-max) {
          right: calc(100vw * 0.4);
        }
      }
    }
  }
}
</style>
