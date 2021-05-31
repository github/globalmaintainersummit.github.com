<template>
  <CommonSwitchButton
    id="timezone"
    :options="options"
    :selected-option="selectedOption"
    @click="changeTimeZone"
  />
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          label: 'PDT',
        },
        {
          label: 'CEST',
        },
      ],
      selectedOption: 'PDT',
    }
  },
  methods: {
    changeTimeZone(option) {
      console.log({ option })
      this.selectedOption = option
    },
  },
}
</script>
