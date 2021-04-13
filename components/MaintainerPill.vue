<template>
  <div class="maintainer">
    <a
      :href="`https://github.com/${maintainer.handler}`"
      target="_blank"
      data-cy="speaker"
    >
      <h2 class="maintainer__speaker">{{ maintainer.speaker }}</h2>
    </a>
    <div class="maintainer__projects">
      <div
        v-for="(project, index) in maintainer.projects"
        :key="project.name"
        class="project"
      >
        <a
          :href="project.url"
          target="_blank"
          class="project__link"
          data-cy="project"
        >
          {{ project.name }}
        </a>
        <span v-if="maintainer.projects.length > 1" class="project__separator">
          <span v-if="index + 2 === maintainer.projects.length"> and </span>
          <span
            v-else-if="index + 1 < maintainer.projects.length"
            class="project__separator--comma"
            >,
          </span>
        </span>
      </div>
    </div>
  </div>
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
.maintainer {
  display: block;
  width: 100%;
  max-width: 628px;
  margin-top: 32px;
  &__speaker {
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

  a {
    &:hover {
      .maintainer__speaker {
        background-position: 100% center;
      }
    }
  }

  &__projects {
    @include mobileToDesktopFontSize(var(--fs-small), var(--fs-default));

    margin-top: 8px;
    margin-bottom: 0;
  }
}

.project {
  display: inline-block;
  color: var(--fc-dimmed);
  font-weight: var(--fw-medium);

  &__link {
    color: var(--fc-dimmed);
    font-weight: var(--fw-medium);
    transition: color 0.5s ease-in;
    &:hover {
      color: var(--fc-default);
    }
  }

  &__separator {
    padding-right: 4px;
    &--comma {
      margin-left: -4px;
    }
  }
}
</style>
