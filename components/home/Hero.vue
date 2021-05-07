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
    position: relative;
    display: inline-block;
    margin-top: 64px;
    @include mobileToDesktopFontSize(var(--fs-medium), var(--fs-large));

    &::after {
      --underline-color: var(--salmon);

      position: absolute;
      bottom: -16px;
      left: 0;
      width: 100%;
      height: 24px;
      background: radial-gradient(
            52% 100% at 50% -12px,
            transparent calc(100% - 5px),
            var(--underline-color) calc(100% - 4px) calc(100% - 1px),
            transparent
          ) -18px 100%,
        radial-gradient(
            52% 100% at 50% calc(100% + 12px),
            transparent calc(100% - 5px),
            var(--underline-color) calc(100% - 4px) calc(100% - 1px),
            transparent
          )
          0 calc(100% - 15px);
      background-repeat: repeat-x;
      background-size: 36px 20px;
      cursor: pointer;
      transition: 0.5s ease, mask-position 0s 0.5s;
      content: '';
    }
  }
}
</style>
