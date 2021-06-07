<template>
  <section>
    <!-- <HomeHeroLive :content="content.live" /> -->
    <HomeHeroNormal :title="content.title" :dates="dates" />
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
    dates: {
      type: Object,
      required: true,
    },
  },
}
</script>
