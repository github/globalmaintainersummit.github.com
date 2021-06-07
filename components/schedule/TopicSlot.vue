<template>
  <div>
    <div v-for="(talk, index) in talks" :key="index">
      <ScheduleTalk :speaker-handler="talk.speakerHandler" />
    </div>
    <ScheduleDiscussion v-if="hasDiscussions" />
  </div>
</template>

<script>
export default {
  props: {
    talks: {
      type: Array,
      required: true,
    },
    hasDiscussions: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
