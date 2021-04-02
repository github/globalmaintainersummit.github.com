<template>
  <footer class="footer">
    <div class="footer__left">
      <p class="footer__copy">{{ content.github }}</p>
      <CommonLink
        v-for="link in content.links"
        :key="link.label"
        :href="link.url"
      >
        {{ link.label }}
      </CommonLink>
    </div>
    <div class="footer__right">
      <CommonLink :mailto="content.contact.mailto">
        {{ content.contact.label }}
      </CommonLink>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  @include mobileToDesktopFontSize(var(--fs-small), var(--fs-default));

  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 80px;
  margin-bottom: 32px;
  @media screen and (min-width: $screen-ipad) {
    margin-top: 160px;
    margin-bottom: 64px;
  }
  &__right,
  &__left {
    display: flex;
    a {
      @include mobileToDesktopFontSize(var(--fs-small), var(--fs-default));

      margin: 0 32px 16px 0;
    }
  }
  &__copy {
    margin: 0 32px 16px 0;
    padding: 0;
  }
}
</style>
