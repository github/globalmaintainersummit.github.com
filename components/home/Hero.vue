<template>
  <section class="hero">
    <div class="hero__message">
      <h1>
        {{ hero.lead }}
      </h1>
      <h3>{{ hero.date }}</h3>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return { hero: null }
  },
  async fetch() {
    const { hero } = await this.$content('home').only(['hero']).fetch()
    this.hero = hero
  },
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: 50px 0 40px;
  @media only screen and (min-width: 680px) {
    padding: 100px 0 80px;
  }

  &__message {
    max-width: 900px;
  }
  h1,
  h3 {
    margin: 0;
    padding: 0;
  }
  h1 {
    line-height: 1;
  }
  h3 {
    @include mobileToDesktopFontSize(var(--fs-medium), var(--fs-large));
    @include wave($bottom: -16px);

    display: inline-block;
    margin-top: 64px;
  }
}
</style>
