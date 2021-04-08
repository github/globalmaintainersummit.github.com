<template>
  <div v-if="cta" class="cta">
    <CommonLink button :href="cta.url">
      {{ cta.label }}
    </CommonLink>
  </div>
</template>

<script>
export default {
  data() {
    return { cta: null }
  },
  async fetch() {
    const { cta } = await this.$content('home').only(['cta']).fetch()
    this.cta = cta
  },
}
</script>

<style lang="scss" scoped>
.cta {
  margin-top: 88px;
}
</style>
