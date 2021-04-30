<template>
  <div
    class="select"
    :class="showDropdown && 'select--open'"
    role="listbox"
    :aria-label="label"
  >
    <p
      class="select__title"
      tabindex="0"
      @click="toggleDropdown"
      @keydown.enter="toggleDropdown"
      @keydown.space="toggleDropdown"
    >
      <span v-if="title"> {{ title }} </span>
      <span
        class="select__close"
        :class="showDropdown && 'select__close--visible'"
        :tabindex="showDropdown && '0'"
      >
        ✖
      </span>
    </p>
    <ul v-if="showDropdown">
      <li
        v-for="option in options"
        :key="option.name"
        :tabindex="showDropdown && '0'"
        class="select__option"
      >
        <img :src="option.icon" alt="" role="presentation" />
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
.select {
  cursor: pointer;
  &--open {
    @include select();
  }

  &__title {
    margin-top: 0;
    color: var(--fc-accent);
    font-family: var(--ff-title);
  }

  &__close {
    padding-left: 8px;
    color: var(--bg-close-icon);
    visibility: hidden;
    cursor: pointer;

    &--visible {
      visibility: visible;
    }
  }

  &__option {
    transition: color 0.3s ease-in;
    &:hover {
      color: var(--fc-accent);
    }
  }
}
</style>
