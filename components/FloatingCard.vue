<template>
  <a :href="project.url" target="_blank" class="card">
    <div class="card-badge">
      <picture>
        <source
          :srcset="require(`~/assets/img/badges/logo_${projectName}@2x.png`)"
          media="(min-width: 600px)"
        />
        <img
          :src="require(`~/assets/img/badges/logo_${projectName}.png`)"
          :alt="project"
        />
      </picture>
    </div>
    <div class="card-content">
      <p class="card-content__name">{{ project.name }}</p>
      <p class="card-content__speaker">{{ project.speaker }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  computed: {
    projectName() {
      return this.project.name
        .replace(/([$&+,:;=?@#|'<>.^*()%!-])|(\s)/g, '')
        .toLowerCase()
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  padding: 16px;
  overflow: hidden;
  color: var(--ff-default);
  border: 1px solid var(--border-floating-card);
  border-radius: 8px;
  box-shadow: 0 0 32px 0 var(--bs-floating-card);
  pointer-events: auto;

  @supports (
    (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px))
  ) {
    background-color: var(--bg-floating-card);
    backdrop-filter: blur(4px);
  }

  @supports not (
    (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px))
  ) {
    background-color: var(--bg-floating-card-fallback);
  }
}

.card-badge {
  display: grid;
  width: 64px;
  height: 64px;
  margin-right: 16px;
  overflow: hidden;
  border-radius: 32px;
  place-items: center;
  img {
    width: 100%;
  }
}

.card-content {
  margin-right: 16px;
  &__name,
  &__speaker {
    margin: 0;
    white-space: nowrap;
  }
  &__name {
    font-size: var(--fs-default);
    font-family: var(--ff-title);
  }
  &__speaker {
    margin-top: 4px;
    color: var(--fc-floating-pill-mantainer);
    font-size: var(--fs-small);
  }
}
</style>
