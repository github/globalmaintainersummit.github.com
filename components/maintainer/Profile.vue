<template>
  <section class="profile">
    <h1 class="profile__name">{{ profile.name }}</h1>
    <p class="profile__handler">@{{ handler }}</p>
    <div class="profile__bio" v-html="profile.bio"></div>
    <MaintainerLinks v-if="profile.links" :links="profile.links" />
    <CommonCustomButton
      v-if="profile.sponsorLink"
      icon="heart"
      :href="profile.sponsorLink"
      class="profile__sponsor"
    >
      Sponsor {{ firstName }}
    </CommonCustomButton>
  </section>
</template>

<script>
export default {
  props: {
    handler: {
      type: String,
      required: true,
    },
    profile: {
      type: Object,
      required: true,
    },
  },
  computed: {
    firstName() {
      return this.profile.name.split(' ')[0]
    },
  },
}
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &__name {
    margin: 0;
  }
  &__handler {
    @include mobileToDesktopFontSize(var(--fs-medium), var(--fs-large));

    margin-top: 0;
    color: var(--fc-primary);
    font-weight: var(--fw-bold);
  }
  &__bio {
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
