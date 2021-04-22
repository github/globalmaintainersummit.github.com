<template>
  <div v-if="hero">
    <div class="hero">
      <div style="float: right">
        <select id="year" name="year" @change="updateSelectedYear">
          <option
            v-for="year in yearList"
            :key="year"
            :value="year"
            :selected="year === selectedYear"
          >
            {{ year }}
          </option>
        </select>
      </div>
      <h1 class="hero__title">{{ hero.title }}</h1>
      <p class="hero__subtitle">{{ hero.subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { hero: null, currentYear: new Date().getFullYear() + 1 }
  },
  async fetch() {
    const { hero } = await this.$content(`${this.currentYear}/home`)
      .only(['hero'])
      .fetch()
    this.hero = hero
  },
  computed: {
    yearList() {
      const YEAR_FIRST_CONFERENCE = 2021
      const yearList = []
      for (let year = YEAR_FIRST_CONFERENCE; year <= this.currentYear; year++) {
        yearList.push(year)
      }
      return yearList.reverse()
    },
    selectedYear() {
      return this.$store.state.selectedYear
    },
  },
  methods: {
    async updateSelectedYear(selectedYear) {
      this.$store.commit('updateSelectedYear', selectedYear.target.value)
      const { hero } = await this.$content(`${this.selectedYear}/home`)
        .only(['hero'])
        .fetch()
      this.hero = hero
    },
  },
}
</script>

<style lang="scss" scoped>
.hero {
  &__title {
    max-width: 480px;
    margin-top: 40px;
    margin-bottom: 0;
    font-weight: var(--fw-bold);
    font-size: var(--fs-large);
    @media screen and (min-width: $screen-sm) {
      font-size: var(--fs-giant);
    }
    @media screen and (min-width: $screen-ipad) {
      font-size: var(--fs-colossal);
    }

    line-height: 1;
  }

  &__subtitle {
    margin-top: 24px;
    color: var(--fc-dimmed);
    font-weight: var(--fw-medium);
    font-size: var(--fw-default);
  }
}
</style>
