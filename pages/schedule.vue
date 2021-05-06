<template>
  <div>
    <ScheduleDay v-for="day in schedule" :key="day.slug" :content="day" />
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
