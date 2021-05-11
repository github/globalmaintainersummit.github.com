<template>
  <ul class="links">
    <li v-for="link in links" :key="link.url">
      <a :href="link.url" target="_blank">
        <GitHub v-if="link.platform === 'github'" :aria-label="link.platform" />
        <GitLab v-if="link.platform === 'gitlab'" :aria-label="link.platform" />
        <ReadMe v-if="link.platform === 'readme'" :aria-label="link.platform" />
        <Twitter
          v-if="link.platform === 'twitter'"
          :aria-label="link.platform"
        />
        <OtherLink
          v-if="link.platform === 'other'"
          :aria-label="link.platform"
        />
      </a>
    </li>
  </ul>
</template>

<script>
import GitHub from '~/assets/svg/social/github.svg?inline'
import GitLab from '~/assets/svg/social/gitlab.svg?inline'
import ReadMe from '~/assets/svg/social/readme.svg?inline'
import Twitter from '~/assets/svg/social/twitter.svg?inline'
import OtherLink from '~/assets/svg/social/others.svg?inline'

export default {
  components: {
    GitHub,
    GitLab,
    ReadMe,
    Twitter,
    OtherLink,
  },
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  align-items: center;
  margin: 40px 0;
  padding: 0;
  column-gap: 32px;
  list-style-type: none;
}
</style>
