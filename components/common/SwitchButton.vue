<template>
  <div class="switch">
    <nuxt-link class="switch-button" to="/maintainers">Maintainers</nuxt-link>
    <nuxt-link class="switch-button" to="/projects">Projects</nuxt-link>
  </div>
</template>

<style lang="scss">
.switch {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 40px 24px;
  color: var(--fc-light);
  font-size: var(--fs-small);
  @media only screen and (min-width: 680px) {
    justify-content: flex-end;
    padding: 40px 40px 0;
  }

  font-family: var(--ff-title);
  &-button {
    padding: 11px 32px 9px;
    color: var(--fc-default);
    background: transparent;
    border-radius: 32px;
    @media only screen and (min-width: 680px) {
      padding: 8px 24px 7px;
    }

    transition: color 0.4s ease, background 0.4s ease, opacity 0.4s ease;
    &:hover,
    &:focus {
      color: var(--fc-primary);
    }
    &.nuxt-link-exact-active {
      color: var(--fc-light);
      background-image: linear-gradient(135deg, #c562f5 0%, #f68084 100%);
    }
  }
}
</style>
