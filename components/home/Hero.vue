<template>
  <section>
    <HomeHeroLive v-if="eventIsLive" :content="content.live" />
    <HomeHeroNormal v-else :content="content.normal" />
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
  data() {
    return {
      eventIsLive: true,
    }
  },
}
</script>
