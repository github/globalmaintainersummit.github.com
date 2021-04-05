<template>
  <div class="projects__grid">
    <div class="decorative-background">
      <pixelsBG />
    </div>
    <div class="projects">
      <h3>Projects</h3>
      <ProjectPill
        v-for="project in projectsSortedByName"
        :key="project.name"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import pixelsBG from '~/assets/svg/pixelsBG.svg?inline'

export default {
  components: {
    pixelsBG,
  },
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
  computed: {
    projectsSortedByName() {
      return [...this.content].sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.projects__grid {
  position: relative;
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr;
  margin-top: 88px;
  @media screen and (min-width: $screen-xl) {
    grid-template-columns: 1fr 1fr;
  }
  .projects {
    grid-column: 1;
    @media screen and (min-width: $screen-xl) {
      grid-column: 2;
    }
    h3 {
      font-weight: var(--fs-medium);
      font-size: var(--fs-regular);
    }
  }
}

.decorative-background {
  position: absolute;
  top: -40px;
  right: -55%;
  z-index: var(--z-index-decorative);
  z-index: -1;
  opacity: 0.1;
  pointer-events: none;
  svg {
    width: 200%;
    height: 200%;
  }
}
</style>
