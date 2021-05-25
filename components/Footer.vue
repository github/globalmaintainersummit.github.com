<template>
  <footer v-if="footer" class="footer">
    <div class="footer__left">
      <p class="footer__copy">
        <span>{{ footer.madeWith }}</span>
        <HeartIcon class="footer__copy-heart" />
        <span>{{ footer.github }}</span>
      </p>

      <CommonLink
        v-for="link in footer.links"
        :key="link.label"
        :href="link.url"
      >
        {{ link.label }}
      </CommonLink>
    </div>
    <div class="footer__right">
      <CommonLink :mailto="footer.contact.mailto">
        {{ footer.contact.label }}
      </CommonLink>
      <CommonLink :href="footer.project.url">Repository</CommonLink>
      <CommonLink to="/code-of-conduct">Code of Conduct</CommonLink>
    </div>
  </footer>
</template>

<script>
import HeartIcon from '~/assets/svg/icons/heart_footer.svg?inline'

export default {
  components: { HeartIcon },
  data() {
    return { footer: null }
  },
  async fetch() {
    const { footer } = await this.$content('footer').only(['footer']).fetch()
    this.footer = footer
  },
}
</script>

<style lang="scss" scoped>
.footer {
  @include section();

  position: relative;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 80px;
  margin-bottom: 32px;
  font-size: var(--fs-small);
  @media screen and (min-width: 1060px) {
    flex-direction: row;
  }
  @media screen and (min-width: $screen-tablet) {
    margin-top: 160px;
    margin-bottom: 64px;
  }
  &__right,
  &__left {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    text-align: center;
    vertical-align: middle;
    @media screen and (min-width: $screen-tablet) {
      flex-direction: row;
    }

    a {
      margin-bottom: 24px;
      color: var(--fc-default);
      @media screen and (min-width: $screen-tablet) {
        margin: 0 32px 24px 0;
        &:last-child {
          margin: 0 0 24px 0;
        }
      }

      svg {
        width: 18px;
        height: 18px;
        @media (min-width: $screen-sm) {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
  &__left {
    flex-direction: column-reverse;
    margin-top: 48px;
    @media screen and (min-width: $screen-tablet) {
      flex-direction: row;
      margin-top: 0;
    }
  }
  &__copy {
    display: flex;
    align-items: baseline;
    margin: 0;
    padding: 0;
    color: var(--fc-dimmed--darker);
    font-weight: var(--fw-regular);
    font-size: var(--fs-small);
    @media screen and (min-width: $screen-tablet) {
      margin: 0 32px 24px 0;
    }
    &-heart {
      width: 14px;
      height: 13px;
      margin: 0 0.3rem;
      stroke: var(--fc-dimmed--darker);
    }
  }
}
</style>
