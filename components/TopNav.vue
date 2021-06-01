<template>
  <focus-trap :active="active">
    <header
      class="header"
      :class="{
        'header--hidden': !displayNavBar,
        'header--shadowed': isScrolled && displayNavBar && !isMenuVisible,
      }"
    >
      <nav
        ref="navbar"
        class="nav"
        :class="{
          'nav--active': active,
        }"
        data-cy="navigation"
      >
        <div class="nav__brand">
          <nuxt-link to="/" class="nav__home">
            <div class="nav__home-gh--desktop">
              <span>Global Maintainer Summit</span>
              <span class="nav__home-hosted">hosted by GitHub</span>
            </div>
            <span class="nav__home-gh--mobile">GMS</span>
          </nuxt-link>
          <span class="nav__home-date">2021</span>
        </div>
        <button
          class="nav__hamburger"
          :aria-label="`${active ? 'Close' : 'Open'} navigation`"
          @click="toggleNav"
        >
          <Hamburger :active="active" />
        </button>
        <div class="nav__container">
          <div class="nav__wrapper">
            <ul class="nav__list">
              <li class="nav__list-item nav__list-item--calendar">
                <CommonCalendarDropdown type="light" />
              </li>
              <li class="nav__list-item" @click="toggleNav">
                <CommonLink to="/maintainers">Maintainers</CommonLink>
              </li>
              <li class="nav__list-item" @click="toggleNav">
                <CommonLink to="/schedule">Schedule</CommonLink>
              </li>
            </ul>
            <ul class="nav__only-mobile">
              <li class="nav__only-mobile-item" @click="toggleNav">
                <CommonLink to="/">opensource@github.com </CommonLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </focus-trap>
</template>

<script>
import { FocusTrap } from 'focus-trap-vue'

const OFFSET = 20

export default {
  components: {
    FocusTrap,
  },
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isMenuVisible: false,
      isNavFocused: false,
      isScrolled: false,
      displayNavBar: true,
      lastScrollPosition: 0,
    }
  },
  mounted() {
    this.setIsScrolled()

    this.lastScrollPosition = window.pageYOffset

    window.addEventListener('scroll', this.setIsScrolled)
    this.$refs.navbar.addEventListener('focusin', this.focusInNav)
    this.$refs.navbar.addEventListener('focusout', this.focusOutNav)

    if (window.pageYOffset > 0) {
      this.isScrolled = true
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.setIsScrolled)
  },
  methods: {
    focusInNav() {
      this.isNavFocused = true
      this.displayNavBar = true
    },
    focusOutNav() {
      this.isNavFocused = false
      if (window.pageYOffset > OFFSET) {
        this.displayNavBar = false
      }
    },
    setIsScrolled() {
      if (window.pageYOffset <= 0) {
        this.isScrolled = false
        this.displayNavBar = true
        return
      }

      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return
      }

      this.isScrolled = true
      this.displayNavBar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    },
    toggleNav() {
      this.$emit('toggle')
    },
  },
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  z-index: var(--z-index-topbar);
  width: 100%;
  transform: translate3d(0, 0, 0);
  transition: visibility 0.35s step-start, transform 0.35s ease,
    background-color 0.35s ease, box-shadow 0.35s ease, height 0.2s ease;
  &--hidden {
    transform: translate3d(0, -100%, 0);
  }
  &--shadowed {
    background-color: var(--bg-body);
    box-shadow: 0 0 2rem 0 var(--bs-header);
  }
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px 40px 24px;
  &__brand {
    position: relative;
    z-index: var(--z-index-hamburger);
    display: flex;
    flex-wrap: nowrap;
    align-items: baseline;
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
      font-family: var(--ff-title);
      line-height: 1;
      transition: color 0.25s ease-in;
    }
    &-hosted {
      color: var(--fc-dimmed--darker);
      font-weight: var(--fw-regular);
      font-size: 16px;
      font-family: var(--ff-default);
    }
    &-gh {
      min-width: 32px;
      margin-right: 16px;
      margin-bottom: 6px;
      line-height: 1;
      &--desktop {
        display: none;
        @media (min-width: $screen-xl) {
          display: flex;
          flex-direction: column;
        }
      }
      &--mobile {
        display: block;
        font-size: clamp(var(--fs-small), 8.5vw, var(--fs-medium));
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
    position: relative;
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
      z-index: var(--z-index-content);
      padding: 0 40px 0 0;
      &--calendar {
        z-index: var(--z-index-dropdown);
        margin-top: -8px;
        margin-right: 12px;
        font-family: var(--ff-default);
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
    height: 100%;

    @media (max-width: $screen-sm) {
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100vh;
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
          &--calendar {
            margin-right: 40px;
          }
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
