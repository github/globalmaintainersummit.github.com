<template>
  <div
    class="dropdown"
    :class="showDropdown && 'dropdown--open'"
    :aria-label="label"
    tabindex="0"
    aria-haspopup="listbox"
    :aria-expanded="showDropdown"
    role="listbox"
    @click="toggleDropdown"
    @keydown.enter="toggleDropdown"
    @keydown.space="toggleDropdown"
    @keydown.esc="toggleDropdown"
  >
    <p class="dropdown__title">
      <span v-if="title"> {{ title }} </span>
      <span
        class="dropdown__close"
        :class="showDropdown && 'dropdown__close--visible'"
        aria-hidden="true"
      >
        ✖
      </span>
    </p>
    <ul
      class="dropdown__options"
      :class="showDropdown && 'dropdown__options--visible'"
    >
      <li
        v-for="option in options"
        :key="option.name"
        :tabindex="showDropdown && '0'"
        class="option"
        @click="toggleDropdown"
        @keydown.enter="toggleDropdown"
        @keydown.space="toggleDropdown"
        @keydown.esc="toggleDropdown"
      >
        <img
          :src="require(`~/assets/svg/calendars/${option.icon}.svg`)"
          height="20px"
          width="20px"
          alt=""
          role="presentation"
          class="option__icon"
        />
        <span>
          {{ option.name }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
      label: 'Select a calendar to save the conference date',
      title: 'Save the Date',
      options: [
        { name: 'Apple', icon: 'apple' },
        { name: 'Google', icon: 'google' },
        { name: 'Office 365', icon: 'office' },
        { name: 'Outlook', icon: 'outlook' },
        { name: 'Yahoo', icon: 'yahoo' },
      ],
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    },
  },
}
</script>

<style lang="scss" scoped>
.dropdown {
  --dropdown-height: 302px;

  height: 30px;
  cursor: pointer;
  transition: height 0.26s ease;
  &--open {
    height: var(--dropdown-height);
    margin: -24px;
    padding: 24px;
    background-color: var(--bg-default);
    border-radius: 12px;
    box-shadow: 0 16px 24px 0 rgba(13, 9, 16, 0.08),
      0 8px 16px 0 rgba(13, 9, 16, 0.12);

    ul {
      list-style-type: none;
      margin-block: 0;
      padding-inline: 0;
    }

    li {
      padding: 10px 0;
    }
  }

  &__options {
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.26s ease;
    &--visible {
      transform: scaleY(1);
    }
  }

  &__title {
    margin-top: 0;
    color: var(--fc-primary);
    font-size: var(--fs-small);
    font-family: var(--ff-title);
  }

  &__close {
    padding-left: 8px;
    color: var(--bg-close-icon);
    font-size: smaller;
    visibility: hidden;
    cursor: pointer;

    &--visible {
      visibility: visible;
    }
  }
}

.option {
  display: flex;
  align-items: center;
  font-size: var(--fs-smaller);
  transition: color 0.3s ease-in;
  &:hover {
    color: var(--fc-primary);
  }

  &__icon {
    margin-right: 16px;
  }
}
</style>
