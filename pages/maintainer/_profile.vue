<template>
  <section class="maintainer">
    <CommonCustomButton
      icon="arrow-left"
      theme="transparent"
      class="maintainer__go-back"
      @click="goBack"
    >
      Go back
    </CommonCustomButton>
    <div class="maintainer__image">
      <MaintainerImage :handler="maintainer.handler" />
    </div>
    <div class="maintainer__details">
      <MaintainerProfile
        :handler="maintainer.handler"
        :profile="maintainer.profile"
      />
      <MaintainerProject :project="maintainer.project" />
      <!-- TODO uncomment once we have all the content to finish this section -->
      <!-- <MaintainerTalk
        :handler="maintainer.handler"
        :speaker-name="maintainer.profile.name"
      /> -->
    </div>
  </section>
</template>

<script>
import socialMetadata from '~/mixins/social-metadata'

export default {
  mixins: [socialMetadata],
  async asyncData({ $content, params }) {
    const maintainer = await $content(
      `2021/shared/maintainers/${params.profile}`
    ).fetch()

    return { maintainer }
  },
  methods: {
    goBack() {
      this.$router.back()
    },
  },
}
</script>

<style lang="scss" scoped>
.maintainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 24px;
  background-image: url('~/assets/svg/bg_pills/graphic_pills.svg');
  background-repeat: no-repeat;
  background-position: top;
  &__go-back {
    align-self: flex-start;
    margin-bottom: 24px;

    @media screen and (min-width: $screen-tablet) {
      margin-bottom: 42px;
    }
  }
  &__image {
    margin-bottom: 72px;
  }
  &__details {
    max-width: 720px;
  }
}
</style>
