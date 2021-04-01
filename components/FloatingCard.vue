<template>
  <div class="card">
    <div class="card__badge">
      <img
        :src="
          require(`~/assets/img/badges/${project.name
            .replace(/\s/g, '')
            .toLowerCase()}.png`)
        "
        :alt="project"
      />
    </div>
    <div class="card__content">
      <h4>{{ project.name }}</h4>
      <p>by {{ project.speaker }} ({{ project.handler }})</p>
    </div>
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
.card {
  display: flex;
  align-items: center;
  padding: 16px;
  overflow: hidden;
  border: 1px solid var(--border-floating-card);
  border-radius: 8px;
  box-shadow: 0 8px 48px 0 var(--bs-floating-card);
  &__badge {
    display: grid;
    width: 64px;
    height: 64px;
    margin-right: 16px;
    border-radius: 32px;
    place-items: center;
    img {
      max-width: 32px;
    }
  }
  &__content {
    margin-right: 16px;
    h4,
    p {
      margin: 0;
    }
    h4 {
      font-size: var(--fs-default);
      font-family: var(--ff-title);
    }
    p {
      margin-top: 4px;
      color: var(--fc-floating-pill-mantainer);
      font-size: var(--fs-small);
    }
  }

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
</style>
