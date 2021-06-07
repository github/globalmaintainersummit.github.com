<template>
  <section>
    <HomeHeroLive v-if="eventIsLive" :content="content.live" />
    <HomeHeroNormal v-else :title="content.title" :dates="dates" />
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
  data() {
    return {
      eventIsLive: true,
    }
  },
}
</script>
