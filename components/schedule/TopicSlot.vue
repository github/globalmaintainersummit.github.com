<template>
  <div>
    <div v-for="talk in talks" :key="talk.speakerHandler">
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
