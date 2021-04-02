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
      <CommonLink :href="content.project.url">
        <GitHub :aria-label="content.project.label" role="presentation" />
      </CommonLink>
    </div>
  </footer>
</template>

<script>
import GitHub from '~/assets/svg/github.svg?inline'

export default {
  components: {
    GitHub,
  },
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
    vertical-align: middle;
    a {
      @include mobileToDesktopFontSize(var(--fs-small), var(--fs-default));

      margin: 0 32px 24px 0;
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
  }
}
</style>
