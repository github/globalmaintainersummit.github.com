<template>
  <a :href="mantainer.project.url" target="_blank" class="project">
    <div class="project__image">
      <img
        v-if="mantainer.project.badge"
        :src="require(`~/assets/img/badges/${mantainer.project.badge}`)"
        :alt="mantainer.project.name"
      />
    </div>
    <div class="project__content">
      <h4>{{ mantainer.project.name }}</h4>
      <p>{{ mantainer.profile.name }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    mantainer: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.project {
  --project-width: 85px;
  --project-height: 85px;
  --project-border: 3px;

  /*
  Optional display table to avoid the
  focus ring to include the "shadow" shape
  */
  display: table;
  color: var(--fc-default);
  cursor: pointer;
  &__image {
    position: relative;
    width: calc(var(--project-width) + var(--project-border));
    height: calc(var(--project-height) + var(--project-border));
    img {
      position: relative;
      top: 0;
      left: 0;
      width: calc(var(--project-width) + var(--project-border));
      height: calc(var(--project-height) + var(--project-border));
      object-position: center;
      overflow: hidden;
      border: var(--project-border) white solid;
      border-radius: 44px;
      transition: top 0.25s ease, left 0.25s ease;
    }
    &::after {
      position: absolute;
      top: 6px;
      left: 6px;
      z-index: -1;
      display: block;
      width: var(--project-width);
      height: var(--project-height);
      overflow: hidden;
      background-color: var(--bg-dimmed);
      border-radius: 44px;
      transition: background-color 0.25s ease, top 0.25s ease, left 0.25s ease;
      content: '';
      -webkit-mask-image: url('~/assets/svg/pattern_shadow.svg');
      mask-image: url('~/assets/svg/pattern_shadow.svg');
    }
  }
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
