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
        v-if="showDropdown"
        class="select__close"
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
    display: flex;
    margin-top: 0;
    column-gap: 8px;
  }

  &__close {
    cursor: pointer;
  }
}
</style>
