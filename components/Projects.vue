<template>
  <div class="projects__grid">
    <div class="projects">
      <h3>Projects</h3>
      <ProjectPill
        v-for="project in content"
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
}
</script>

<style lang="scss" scoped>
.projects__grid {
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
</style>
