<template>
  <section>
    <h3>{{ content.date }}</h3>
    <div v-for="slot in content.slots" :key="slot.label">
      <ScheduleSlot :content="slot" />
    </div>
  </section>
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
  margin-bottom: 32px;
  color: var(--fc-primary);

  @media screen and (min-width: $screen-sm) {
    margin-bottom: 80px;
  }
}
</style>
