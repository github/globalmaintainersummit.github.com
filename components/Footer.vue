<template>
  <footer v-if="footer" class="footer">
    <div class="footer__left">
      <p class="footer__copy">{{ footer.github }}</p>
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
      <CommonLink :href="footer.repository.url">
        {{ footer.repository.label }}
      </CommonLink>
      <CommonLink :to="footer.codeOfConduct.url">
        {{ footer.codeOfConduct.label }}
      </CommonLink>
    </div>
  </footer>
</template>

<script>
export default {
  components: {},
  data() {
    return { footer: null }
  },
  async fetch() {
    const { footer } = await this.$content('home').only(['footer']).fetch()
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
    margin: 0 32px 24px 0;
    padding: 0;
    color: var(--fc-dimmed);
    font-weight: var(--fw-bold);
    font-size: var(--fs-small);
  }
}
</style>
