<template>
  <section>
    <HomeHeroLive v-if="eventIsLive" :content="content.live" />
    <HomeHeroNormal v-else :content="content" :dates="dates" />
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
      eventIsLive: false, // Change this attribute to toggle between the Hero and the Hero Live
    }
  },
}
</script>
