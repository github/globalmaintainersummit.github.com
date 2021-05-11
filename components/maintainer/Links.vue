<template>
  <ul>
    <li>hi</li>
  </ul>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>
