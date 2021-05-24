<template>
  <div class="container">
    <CodeOfConductPill :content="intro" />
    <CodeOfConductMain :content="codeOfConduct" />
    <CodeOfConductPill :content="reportingIncident" />
    <CodeOfConductPill :content="credit" />
  </div>
</template>

<script>
import socialMetadata from '~/mixins/social-metadata'

export default {
  mixins: [socialMetadata],
  async asyncData({ $content }) {
    const { intro, codeOfConduct, reportingIncident, credit } = await $content(
      '2021/pages/codeOfConduct/index'
    ).fetch()
    return {
      intro,
      codeOfConduct,
      reportingIncident,
      credit,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 740px;
  margin: 0 auto;
  padding: 40px 24px;
  font-size: var(--fs-small);

  ::v-deep p {
    font-size: var(--fs-small);
  }

  ::v-deep a {
    @include linksWithinText();
  }

  ::v-deep h4 {
    margin-top: 56px;
    margin-bottom: 32px;
  }
}
</style>
