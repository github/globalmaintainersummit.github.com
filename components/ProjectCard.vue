<template>
  <a :href="maintainer.project.url" target="_blank" class="project">
    <CommonProjectBadge
      :badge="maintainer.project.badge"
      :alt="maintainer.project.name"
    />
    <div class="project__content">
      <h4>{{ maintainer.project.name }}</h4>
      <p>{{ maintainer.profile.name }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    maintainer: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.project {
  /*
  Optional display table to avoid the
  focus ring to include the "shadow" shape
  */
  display: table;
  color: var(--fc-default);
  cursor: pointer;
  &__content {
    --t-font-color: color 0.3s ease-in;

    margin-top: 32px;
    h4 {
      margin: 0;
      padding: 0;
      color: var(--fc-default);
      transition: var(--t-font-color);
    }
    p {
      margin: 16px 0 0 0;
      padding: 0;
      color: var(--fc-primary);
      font-size: var(--fs-small);
      transition: var(--t-font-color);
    }
  }
  &:hover,
  &:focus {
    .project__image {
      &::after {
        top: 7px;
        left: 7px;
        background-color: var(--bg-accent);
      }
    }
    .project__content {
      h4 {
        color: var(--fc-primary);
      }
      p {
        color: var(--fc-default);
      }
    }
  }
}
</style>
