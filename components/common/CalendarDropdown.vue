<template>
  <div class="dropdown" :class="showDropdown && 'dropdown--open'">
    <p
      class="dropdown__title"
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
      :aria-hidden="!showDropdown"
    >
      <li v-for="option in options" :key="option.key">
        <a
          :href="showDropdown ? calendarUrl(option.key) : null"
          class="option"
          target="_blank"
          :aria-label="`Save the date in your ${option.name} calendar`"
        >
          <img
            :src="require(`~/assets/svg/calendars/cal_${option.key}.svg`)"
            height="20px"
            width="20px"
            alt=""
            role="presentation"
            class="option__icon"
          />
          <span>
            {{ option.name }}
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { google, outlook, office365, yahoo, ics } from 'calendar-link'

const KEY_CALENDAR_APPLE = 'apple'
const KEY_CALENDAR_GOOGLE = 'google'
const KEY_CALENDAR_OFFICE = 'office'
const KEY_CALENDAR_OUTLOOK = 'outlook'
const KEY_CALENDAR_YAHOO = 'yahoo'

export default {
  data() {
    return {
      showDropdown: false,
      label: 'Select a calendar to save the conference date',
      title: 'Save the Date',
      calendarEvent: null,
      options: [
        { name: 'Apple', key: KEY_CALENDAR_APPLE },
        { name: 'Google', key: KEY_CALENDAR_GOOGLE },
        { name: 'Office 365', key: KEY_CALENDAR_OFFICE },
        { name: 'Outlook', key: KEY_CALENDAR_OUTLOOK },
        { name: 'Yahoo', key: KEY_CALENDAR_YAHOO },
      ],
    }
  },
  async fetch() {
    const { calendarEvent } = await this.$content('home')
      .only(['calendarEvent'])
      .fetch()
    this.calendarEvent = {
      start: calendarEvent.startDate,
      end: calendarEvent.endDate,
      duration: [1, 'day'],
      title: calendarEvent.title,
      description: calendarEvent.description,
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    },
    calendarUrl(calendar) {
      switch (calendar) {
        case KEY_CALENDAR_APPLE:
          return ics(this.calendarEvent)
        case KEY_CALENDAR_GOOGLE:
          return google(this.calendarEvent)
        case KEY_CALENDAR_OFFICE:
          return office365(this.calendarEvent)
        case KEY_CALENDAR_OUTLOOK:
          return outlook(this.calendarEvent)
        case KEY_CALENDAR_YAHOO:
          return yahoo(this.calendarEvent)
      }
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
  color: var(--fc-default);
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
