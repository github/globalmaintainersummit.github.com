<template>
  <div>
    <div v-if="hasBreak" class="break">
      <p>Break</p>
      <CommonWave />
    </div>
    <CommonWave
      v-if="isLongBreak || !hasBreak"
      :class="isLongBreak && 'long-wave'"
    />
  </div>
</template>

<script>
export default {
  props: {
    break: {
      type: String || null,
      default: null,
    },
  },
  computed: {
    isLongBreak() {
      return this.break === 'long'
    },
    hasBreak() {
      return ['long', 'short'].includes(this.break)
    },
  },
}
</script>

<style lang="scss" scoped>
.break {
  display: flex;
  align-items: center;
  color: var(--fc-accent);
  font-family: var(--ff-title);
  column-gap: 20px;
}

.long-wave {
  margin-top: -8px;
  margin-bottom: 32px;
}
</style>
