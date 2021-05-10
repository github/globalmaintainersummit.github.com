<template>
  <section>
    <h4>{{ content.title }}</h4>
    <p>{{ content.description }}</p>
    <CodeOfConductList
      v-for="(behavior, index) in content.goodAndBadBehaviors"
      :key="index"
      :description="behavior.description"
      :examples="behavior.examples"
    />
    <div v-html="content.finalTips"></div>
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
