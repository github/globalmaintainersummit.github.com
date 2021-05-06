<template>
  <div class="day">
    <h3>{{ content.date }}</h3>
    <div v-for="slot in content.slots" :key="slot.label" class="slots">
      <ScheduleTopicSlot v-if="slot.talks" :content="slot" />
      <ScheduleSlot v-else :content="slot" />
    </div>
  </div>
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
.day {
  margin: 40px;
  h3 {
    color: var(--fc-primary);
  }
}
</style>
