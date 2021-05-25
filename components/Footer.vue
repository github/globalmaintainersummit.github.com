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
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 80px;
  margin-bottom: 32px;
  font-size: var(--fs-small);
  @media screen and (min-width: $screen-tablet) {
    margin-top: 160px;
    margin-bottom: 64px;
  }
  &__right,
  &__left {
    display: flex;
    flex-wrap: wrap;
    vertical-align: middle;

    a {
      margin: 0 32px 24px 0;
      color: var(--fc-default);
      &:last-child {
        margin: 0 0 24px 0;
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
  &__copy {
    display: flex;
    gap: 0.3rem;
    align-items: baseline;
    margin: 0 32px 24px 0;
    padding: 0;
    color: var(--fc-dimmed--darker);
    font-weight: var(--fw-regular);
    font-size: var(--fs-small);
    &-heart {
      width: 14px;
      height: 13px;
      stroke: var(--fc-dimmed--darker);
    }
  }
}
</style>
