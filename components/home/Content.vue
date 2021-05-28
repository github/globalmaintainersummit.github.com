<template>
  <section class="content">
    <div class="content--normal">
      <h2>{{ normalBlock.title }}</h2>
      <div v-html="normalBlock.description" />
    </div>
    <div class="content--highlighted">
      <h2>{{ highlightedBlock.title }}</h2>
      <ul>
        <li v-for="(item, index) in highlightedBlock.bulletPoints" :key="index">
          <span v-html="item"></span>
        </li>
      </ul>
      <div v-html="highlightedBlock.description" />
      <div class="save">
        <CommonCalendarDropdown class="save-button" type="dark" />
        <CommonWave class="save-decoration" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    normalBlock: {
      type: Object,
      required: true,
    },
    highlightedBlock: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  z-index: var(--z-index-dropdown);
  margin-top: 64px;
  @media screen and (min-width: $screen-sm) {
    margin-top: 120px;
  }
  &--normal {
    max-width: 786px;
    margin: 0 auto;
    h2 {
      max-width: 786px;
      word-wrap: break-word;
    }
    div {
      max-width: 671px;
      font-family: var(--ff-default);
      line-height: 1.5;
    }
  }
  &--highlighted {
    @include highlightedBox();
    @include mobileToDesktopFontSize(var(--fs-smaller), var(--fs-default));

    max-width: 902px;
    margin: 0 auto;
    margin-top: 56px;
    padding: 20px 32px 0;
    @media screen and (min-width: $screen-sm) {
      margin-top: 200px;
      padding: 40px 60px;
    }
    @media screen and (min-width: $screen-xl) {
      padding: 80px 120px;
    }

    h2 {
      @include mobileToDesktopFontSize(var(--fs-large), var(--fs-colossal));

      max-width: 671px;
      margin-top: 0;
      margin-bottom: 48px;
      line-height: 1;
      word-break: break-word;
    }

    ul {
      margin: 0 0 48px;
      padding: 0;
      list-style-type: '⌁';
      li {
        padding-bottom: 24px;
        padding-left: 24px;
        &:last-child {
          padding-bottom: 0;
        }
      }
    }

    ::v-deep p {
      margin: 0;
    }
  }
}
.save {
  display: flex;
  align-items: center;
  max-width: 786px;
  margin: 80px 0;
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
