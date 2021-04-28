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
        :key="option"
        :tabindex="showDropdown && '0'"
        class="select__option"
      >
        {{ option }}
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
      options: ['apple', 'yahoo', 'google'],
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
