<template>
  <focus-trap :active="active">
    <nav class="nav" :class="{ 'nav--active': active }" data-cy="navigation">
      <div class="nav__brand">
        <nuxt-link to="/" class="nav__home">
          <GitHub
            aria-label="Github Global Maintainers Summit"
            role="presentation"
            class="nav__home-gh"
          />
          <span class="nav__home-gh--desktop">Global Maintainer Summit</span>
          <span class="nav__home-gh--mobile">GMS</span>
        </nuxt-link>
        <span class="nav__home-date">2021</span>
      </div>
      <button
        class="nav__hamburger"
        :aria-label="`${active ? 'Close' : 'Open'} navigation`"
        @click="active = !active"
      >
        <hamburger :active="active" />
      </button>
      <div class="nav__container">
        <div class="nav__wrapper">
          <ul class="nav__list">
            <li class="nav__list-item">
              <CommonCalendarDropdown class="nav__list-item--calendar" />
            </li>
            <li class="nav__list-item">
              <CommonLink to="/maintainers">Maintainers</CommonLink>
            </li>
            <li class="nav__list-item">
              <CommonLink to="/schedule">Schedule</CommonLink>
            </li>
          </ul>
          <ul class="nav__only-mobile">
            <li class="nav__only-mobile-item">
              <CommonLink to="/">opensource@github.com </CommonLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </focus-trap>
</template>

<script>
import { FocusTrap } from 'focus-trap-vue'
import GitHub from '~/assets/svg/github.svg?inline'

export default {
  components: {
    GitHub,
    FocusTrap,
  },
  data() {
    return {
      active: false,
    }
  },
}
</script>

<style scoped lang="scss">
.nav {
  position: relative;
  z-index: var(--z-index-topbar);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px 40px 33px;
  background: var(--bg-body);
  &__brand {
    position: relative;
    z-index: var(--z-index-hamburger);
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }
  .nav__home {
    @include mobileToDesktopFontSize(var(--fs-small), var(--fs-default));

    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    color: var(--fc-default);
    font-weight: var(--fw-bold);
    font-family: var(--ff-secondary);
    transition: color 0.25s ease-in;

    &-date {
      margin-left: 16px;
      color: var(--fc-primary);
      font-weight: var(--fw-extra-bold);
      font-size: var(--fs-default);
      font-family: var(--ff-secondary);
      line-height: 1;
      transition: color 0.25s ease-in;
    }
    &-gh {
      min-width: 32px;
      margin-right: 16px;
      margin-bottom: 6px;
      line-height: 1;
      &--desktop {
        display: none;
        @media (min-width: $screen-xl) {
          display: block;
        }
      }
      &--mobile {
        display: block;
        @media (min-width: $screen-xl) {
          display: none;
        }
      }
    }
  }
  &__only-mobile {
    display: none;
    align-items: center;
    margin: 0;
    padding: 0;
    font-weight: var(--fw-bold);
    font-family: var(--ff-secondary);
    line-height: 1;
    list-style: none;
    &-item {
      width: 100%;
      margin: 32px 0;
      padding: 0 0 0 0;
      text-align: center;
      a {
        color: var(--fc-light);
        font-size: var(--fs-small);
        font-family: var(--ff-title);
      }
    }
  }

  .nav__list {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    padding: 0;
    font-weight: var(--fw-bold);
    font-family: var(--ff-secondary);
    line-height: 1;
    list-style: none;
    &-item {
      padding: 0 40px 0 0;
      &--calendar {
        top: -15px;
        @media (max-width: $screen-sm) {
          left: -15px;
        }
      }
      &:last-child {
        padding: 0;
      }
      a {
        color: var(--fc-default);
        font-size: var(--fs-small);
      }
    }
    @media (max-width: $screen-sm) {
      flex-direction: column;
    }
  }

  &__container {
    z-index: var(--z-index-navigation-mobile);
    display: flex;

    @media (max-width: $screen-sm) {
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 120px 0 0 0;
      background: var(--grad-navigation-mobile);
      opacity: 0;
      transition: opacity 0 linear;
      pointer-events: none;
      .nav__list {
        &-item {
          width: 100%;
          margin: 32px 0;
          padding: 0 0 0 0;
          text-align: center;
          a {
            color: var(--fc-light);
            font-size: var(--fs-large);
            font-family: var(--ff-title);
          }
        }
      }
      .nav__list:first-child {
        li:first-child {
          order: 3;
        }
      }
    }
  }

  &__hamburger {
    position: relative;
    z-index: var(--z-index-hamburger);
    display: none;
    width: 30px;
    height: 30px;
    padding: 0;
    color: var(--fc-default);
    background: transparent;
    border: none;
    cursor: pointer;
    @media (max-width: $screen-sm) {
      display: block;
    }
  }

  @media (max-width: $screen-sm) {
    &--active {
      .nav__home,
      .nav__home-date {
        color: var(--fc-light);
      }
      .nav__container {
        opacity: 1;
        transition: opacity 0.25s linear;
        pointer-events: all;
      }
      .nav__wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
      }
      .nav__only-mobile {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
