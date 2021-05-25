<template>
  <section class="project">
    <div class="project__decoration">
      <CommonProjectBadge :badge="project.badge" :animated-hover="false" />
      <CommonWave />
    </div>
    <h2 class="project__name">{{ project.name }}</h2>
    <div class="project__description" v-html="project.description"></div>
    <MaintainerLinks v-if="project.links" :links="project.links" />
    <CommonCustomButton
      v-if="project.sponsorLink"
      icon="heart"
      :href="project.sponsorLink"
      class="project__sponsor"
    >
      Sponsor {{ project.name }}
    </CommonCustomButton>
  </section>
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 56px;
  &__decoration {
    display: flex;
    align-items: center;
    width: 100%;
  }
  &__name {
    margin: 40px 0;
  }
  &__description {
    line-height: 1.5;

    ::v-deep p {
      &:first-of-type {
        margin-top: 0;
      }
      &:last-of-type {
        margin-bottom: 0;
      }
    }

    ::v-deep a {
      @include linksWithinText();
    }
  }
  &__sponsor {
    align-self: flex-end;
  }
}
</style>
