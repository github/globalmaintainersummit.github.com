<template>
  <div class="talk">
    <CommonWave class="talk__decoration" />
    <div class="talk__details">
      <p>text with <a href="/schedule">link</a></p>
      <p class="talk__details--date">date</p>
    </div>
    <CommonCustomButton
      icon="calendar"
      icon-suffix
      to="/schedule"
      class="talk__cta"
    >
      Check Schedule
    </CommonCustomButton>
  </div>
</template>

<style lang="scss" scoped>
.talk {
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 16px;

  &__decoration {
    width: 100%;
  }

  &__details {
    margin-top: 72px;
    font-weight: var(--fw-bold);
    font-family: var(--ff-title);
    &--date {
      color: var(--fc-accent);
    }

    p {
      @include mobileToDesktopFontSize(var(--fs-default), var(--fs-medium));
    }

    a {
      @include linksWithinText();
    }
  }

  &__cta {
    align-self: flex-end;
    margin-top: 24px;
  }
}
</style>
