<template>
  <section class="profile">
    <h1 class="profile__name">{{ profile.name }}</h1>
    <p class="profile__handler">@{{ handler }}</p>
    <p class="profile__bio" v-html="profile.bio"></p>
    <ul class="links">
      <li v-for="link in profile.links" :key="link.url">
        {{ link.platform }}
      </li>
    </ul>
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
    margin-bottom: 0;
  }
  &__sponsor {
    align-self: flex-end;
  }
}
</style>
