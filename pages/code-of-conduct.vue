<template>
  <div>
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
      '2021/pages/code-of-conduct'
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
