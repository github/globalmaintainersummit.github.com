\
<template>
  <section>
    <div class="decoration" aria-hidden="true">
      <img src="~/assets/svg/bg_pills/graphic_hero.svg" alt="" />
    </div>
    <HomeHero :content="hero" />
    <div class="home__content">
      <h2>{{ content.title1 }}</h2>
      <div v-html="content.block1" />
      <h1>{{ content.title2 }}</h1>
      <div v-html="content.block2" />
    </div>
    <div class="home__save">
      <CommonCalendarDropdown type="button" class="home__save-button" />
      <CommonWave class="home__save-decoration" />
    </div>
    <div class="home__maintainers">
      <h3>{{ maintainers.title }}</h3>
      <CommonGrid
        :maintainers="maintainers.list"
        three-cols
        data-cy="maintainers"
      />
      <div class="home__maintainers-button">
        <CommonCustomButton to="/maintainers" icon="arrow-right" icon-suffix>
          {{ maintainers.cta }}
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
    const { maintainers, content, hero } = await $content(
      '2021/pages/home/index'
    ).fetch()
    return {
      maintainers,
      content,
      hero,
    }
  },
}
</script>

<style lang="scss" scoped>
section {
  @include section();

  position: relative;
}
.home {
  &__content {
    position: relative;
    max-width: 786px;
    margin: 0 auto;
    margin-top: 120px;
    h2 {
      max-width: 786px;
    }
    p {
      max-width: 671px;
      font-family: var(--ff-default);
      line-height: 1.5;
    }
    h1 {
      max-width: 671px;
      margin-top: 120px;
      @include gradientTitle(var(--bg-primary), var(--bg-accent));
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
      margin-top: 80px;
    }
  }
}
.decoration {
  position: absolute;
  top: -105px;
  left: -110px;
  width: 100%;
}
</style>
