<template>
  <div>
    <h3>{{ content.date }}</h3>
    <div v-for="slot in content.slots" :key="slot.label" class="slot">
      <ScheduleSlot :content="slot" />
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
h3 {
  margin-bottom: 80px;
  color: var(--fc-primary);
}

.slot {
  margin-bottom: 24px;
}
</style>
