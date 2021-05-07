<template>
  <div>
    <ScheduleDay
      v-for="day in schedule"
      :key="day.slug"
      :content="day"
      class="day"
    />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const schedule = await $content('2021/pages/schedule').fetch()
    return {
      schedule,
    }
  },
}
</script>

<style lang="scss" scoped>
.day {
  margin: 40px;
  &:last-child {
    margin-top: 120px;
  }
}
</style>
