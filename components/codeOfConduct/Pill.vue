<template>
  <section>
    <h4 v-if="content.title">{{ content.title }}</h4>
    <div v-html="content.description"></div>
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
