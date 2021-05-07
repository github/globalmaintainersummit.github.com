<template>
  <div class="wave"></div>
</template>

<style lang="scss" scoped>
.wave {
  @include wave($bottom: -20px);

  position: relative;
  top: -6px;
  width: 100%;
}
</style>
