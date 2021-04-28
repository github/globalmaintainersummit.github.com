<template>
  <Select :options="options" label="Select the conference year" />
</template>

<script>
export default {
  data() {
    return {
      options: ['2021', '2020'],
    }
  },
}
</script>
