<template>
  <section class="profile">
    <h1 class="profile__name">{{ profile.name }}</h1>
    <p class="profile__handler">@{{ handler }}</p>
    <p class="profile__bio" v-html="profile.bio"></p>
    <MaintainerLinks :links="profile.links" />
    <CommonCustomButton
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
    margin-top: 0;
    line-height: 1.5;

    ::v-deep a {
      @include linksWithinText();
    }
  }
  &__sponsor {
    align-self: flex-end;
  }
}
</style>
