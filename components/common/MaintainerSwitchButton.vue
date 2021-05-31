<template>
  <CommonSwitchButton :options="options" />
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          label: 'Maintainers',
          to: '/maintainers',
        },
        {
          label: 'Projects',
          to: '/projects',
        },
      ],
    }
  },
}
</script>
