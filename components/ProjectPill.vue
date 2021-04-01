<template>
  <div class="project">
    <a :href="project.url" target="_blank">
      <h2 class="project__name">{{ project.name }}</h2>
      <p class="project__speaker">
        by {{ project.speaker }} ({{ project.handler }})
      </p>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.project {
  display: block;
  width: 100%;
  max-width: 628px;
  margin-top: 32px;
  &__name {
    @include mobileToDesktopFontSize(var(--fs-medium), var(--fs-large));

    margin: 0;
    color: var(--fc-default);
    font-weight: var(--fw-bold);
    background-color: var(--fc-default);
    background-image: linear-gradient(
      90deg,
      var(--bg-gradient-start) 0%,
      var(--bg-gradient-end) 33%,
      var(--fc-default) 66%
    );
    background-position: 0% center;
    background-size: 300% 100%;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    transition: background-position 0.5s ease-in;
  }

  &__speaker {
    @include mobileToDesktopFontSize(var(--fs-small), var(--fs-default));

    margin-top: 8px;
    margin-bottom: 0;
    color: var(--fc-dimmed);
    font-weight: var(--fw-medium);
    transition: color 0.5s ease-in;
  }

  a {
    display: inline-block;
    text-decoration: none;
    &:hover {
      .project__name {
        background-position: 100% center;
      }
      .project__speaker {
        color: var(--fc-default);
      }
    }
  }
}
</style>
