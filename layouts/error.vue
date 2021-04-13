<template>
  <main class="error">
    <Error404 />
    <h1 class="error__title">Oopsie!</h1>
    <p>
      We can't find the page you're looking for, sorry. It's probably our bad.
    </p>
    <CommonLink button to="/">Back to Homepage</CommonLink>
  </main>
</template>

<script>
import Error404 from '~/assets/svg/bg_404.svg?inline'

export default {
  components: {
    Error404,
  },
  transition: {
    name: 'fade',
  },
}
</script>

<style lang="scss" scoped>
.error {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100vh;
  overflow: hidden;
  place-items: center;
  &__title {
    @include mobileToDesktopFontSize(var(--fs-medium), var(--fs-large));
    @include gradientTitle(var(--bg-gradient-start), var(--bg-gradient-end));

    max-width: 1024px;
    height: 4rem;
    margin-bottom: 0;
    color: var(--fc-default);
    font-weight: var(--fw-bold);
    line-height: 1;
  }
  a {
    margin-top: 40px;
  }
  svg {
    width: 100%;
    padding: 0 24px;
    opacity: 0.7;
  }
}
</style>
