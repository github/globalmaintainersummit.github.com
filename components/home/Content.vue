<template>
  <section class="content">
    <div class="content--normal">
      <h2>{{ content.title1 }}</h2>
      <div v-html="content.block1" />
    </div>
    <div class="content--highlighted">
      <h2>{{ content.title2 }}</h2>
      <div v-html="content.block2" />
      <div class="save">
        <CommonCalendarDropdown type="button" class="save-button" />
        <CommonWave class="save-decoration" />
      </div>
    </div>
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
}
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  &--normal {
    max-width: 786px;
    margin: 0 auto;
    margin-top: 120px;
    h2 {
      max-width: 786px;
    }
    div {
      max-width: 671px;
      font-family: var(--ff-default);
      line-height: 1.5;
    }
  }
  &--highlighted {
    @include highlightedBox();

    max-width: 902px;
    margin: 0 auto;
    margin-top: 200px;
    padding: 80px 120px;

    h2 {
      @include mobileToDesktopFontSize(var(--fs-giant), var(--fs-colossal));

      max-width: 671px;
      margin-top: 0;
      margin-bottom: 48px;
      line-height: 1;
    }
  }
}
.save {
  display: flex;
  align-items: center;
  max-width: 786px;
  margin: 80px auto 0;
  &-button {
    min-width: 300px;
  }
  &-decoration {
    position: absolute;
    left: 30px;
    min-width: 1000px;
    @media only screen and (min-width: 680px) {
      left: 100px;
    }
  }
}
</style>
