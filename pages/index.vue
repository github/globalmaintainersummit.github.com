<template>
  <section class="home">
    <div class="home__decoration" aria-hidden="true">
      <img src="~/assets/svg/bg_pills/graphic_hero.svg" alt="" />
    </div>
    <HomeHero :content="hero" />
    <HomeNewsletter :content="newsletter" />
    <div class="home__content">
      <div class="home__content--normal">
        <h2>{{ content.title1 }}</h2>
        <div v-html="content.block1" />
      </div>
      <div class="home__content--highlighted">
        <h2>{{ content.title2 }}</h2>
        <div v-html="content.block2" />
        <div class="home__save">
          <CommonCalendarDropdown type="button" class="home__save-button" />
          <CommonWave class="home__save-decoration" />
        </div>
      </div>
    </div>
    <div class="home__maintainers">
      <h3>{{ maintainersContent.title }}</h3>
      <CommonGrid :maintainers="maintainers" three-cols data-cy="maintainers" />
      <div class="home__maintainers-button">
        <CommonCustomButton to="/maintainers" icon="arrow-right" icon-suffix>
          {{ maintainersContent.cta }}
        </CommonCustomButton>
      </div>
    </div>
  </section>
</template>

<script>
import socialMetadata from '~/mixins/social-metadata'

export default {
  mixins: [socialMetadata],
  async asyncData({ $content }) {
    const {
      maintainers: maintainersContent,
      content,
      hero,
      newsletter,
    } = await $content('2021/pages/home/index').fetch()
    const maintainers = await $content('2021/shared/maintainers')
      .where({ featured: true })
      .fetch()

    return {
      content,
      hero,
      newsletter,
      maintainersContent,
      maintainers,
    }
  },
}
</script>

<style lang="scss" scoped>
.home {
  @include section();

  position: relative;
  &__decoration {
    position: absolute;
    top: -105px;
    left: -110px;
    width: 100%;
  }
  &__content {
    position: relative;
    &--normal {
      max-width: 786px;
      margin: 0 auto;
      margin-top: 120px;
      h2 {
        max-width: 786px;
      }
      div {
        max-width: 671px;
        font-family: var(--ff-default);
        line-height: 1.5;
      }
    }
    &--highlighted {
      @include highlightedBox();

      max-width: 902px;
      margin: 0 auto;
      margin-top: 200px;
      padding: 80px 120px;

      h2 {
        @include mobileToDesktopFontSize(var(--fs-giant), var(--fs-colossal));

        max-width: 671px;
        margin-top: 0;
        margin-bottom: 48px;
        line-height: 1;
      }
    }
  }
  &__save {
    display: flex;
    align-items: center;
    max-width: 786px;
    margin: 80px auto 0;
    &-button {
      min-width: 300px;
    }
    &-decoration {
      position: absolute;
      left: 30px;
      min-width: 1000px;
      @media only screen and (min-width: 680px) {
        left: 100px;
      }
    }
  }
  &__maintainers {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 200px;
    &-button {
      align-self: center;
      margin-top: 70px;
      margin-bottom: 10px;
    }
  }
}
</style>
