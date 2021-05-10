<template>
  <div>
    <p>{{ description }}</p>
    <ul>
      <li v-for="(item, index) in examples" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true,
    },
    examples: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
li {
  padding: 8px 0;
}
</style>
