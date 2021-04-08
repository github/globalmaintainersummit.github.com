<template>
  <div v-if="maintainers" class="maintainers__grid">
    <div class="decorative-background">
      <pixelsBG />
    </div>
    <div class="maintainers">
      <h3>Maintainers</h3>
      <MaintainerPill
        v-for="maintainer in maintainers"
        :key="maintainer.speaker"
        :maintainer="maintainer"
      />
    </div>
  </div>
</template>

<script>
import pixelsBG from '~/assets/svg/pixelsBG.svg?inline'

export default {
  components: {
    pixelsBG,
  },
  data() {
    return { maintainers: null }
  },
  async fetch() {
    const { maintainers } = await this.$content('home')
      .only(['maintainers'])
      .sortBy('speaker')
      .fetch()
    this.maintainers = maintainers
  },
}
</script>

<style lang="scss" scoped>
.maintainers__grid {
  position: relative;
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr;
  margin-top: 88px;
  @media screen and (min-width: $screen-xl) {
    grid-template-columns: 1fr 1fr;
  }
  .maintainers {
    grid-column: 1;
    @media screen and (min-width: $screen-xl) {
      grid-column: 2;
    }
    h3 {
      font-weight: var(--fs-medium);
      font-size: var(--fs-regular);
    }
  }
}

.decorative-background {
  position: absolute;
  top: -40px;
  right: -55%;
  z-index: var(--z-index-decorative);
  z-index: -1;
  opacity: 0.1;
  pointer-events: none;
  svg {
    width: 200%;
    height: 200%;
  }
}
</style>
