<template>
  <div class="discussion">
    <CommonWave />
    <p>Discussions</p>
  </div>
</template>

<style lang="scss" scoped>
.discussion {
  display: flex;
  flex-direction: column;
  p {
    @include mobileToDesktopFontSize(var(--fs-small), var(--fs-medium));

    margin: 16px 0;
  }
}
</style>
