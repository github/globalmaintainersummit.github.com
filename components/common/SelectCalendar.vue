<template>
  <div>
    <CommonCustomSelect
      :title="title"
      :options="options"
      label="Select a calendar to save the conference date"
      show-icons
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Save the date',
      options: ['apple', 'google', 'outlook'],
    }
  },
}
</script>
