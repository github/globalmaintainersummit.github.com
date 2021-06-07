<template>
  <div>
    <focus-trap :active="showDropdown">
      <div class="dropdown-wrapper">
        <div
          class="dropdown"
          :class="[
            `dropdown--${type}`,
            {
              'dropdown--open': showDropdown,
            },
          ]"
        >
          <button
            class="dropdown__title"
            :class="[
              `dropdown__title--${type}`,
              {
                'dropdown__title--open': showDropdown,
              },
            ]"
            :aria-label="label"
            aria-haspopup="true"
            :aria-expanded="showDropdown"
            role="listbox"
            aria-controls="calendar-list"
            @click="toggleDropdown"
            @keyup.esc="showDropdown = false"
          >
            {{ title }}
            <div class="dropwdown__icon">
              <CloseIcon v-if="showDropdown" aria-hidden="true" />
              <DropArrow v-else aria-hidden="true" />
            </div>
          </button>

          <ul
            id="calendar-list"
            class="dropdown__options"
            :class="showDropdown && 'dropdown__options--visible'"
            :aria-hidden="!showDropdown"
          >
            <li
              v-for="option in options"
              :key="option.key"
              @keydown.esc="showDropdown = false"
            >
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
      </div>
    </focus-trap>
  </div>
</template>

<script>
import { google, outlook, office365, yahoo, ics } from 'calendar-link'
import { FocusTrap } from 'focus-trap-vue'
import CloseIcon from '~/assets/svg/icons/close.svg?inline'
import DropArrow from '~/assets/svg/icons/drop_arrow.svg?inline'

const KEY_CALENDAR_APPLE = 'apple'
const KEY_CALENDAR_GOOGLE = 'google'
const KEY_CALENDAR_OFFICE = 'office'
const KEY_CALENDAR_OUTLOOK = 'outlook'
const KEY_CALENDAR_YAHOO = 'yahoo'

export default {
  components: {
    FocusTrap,
    CloseIcon,
    DropArrow,
  },
  props: {
    type: {
      type: String,
      required: true,
      validator: (type) => {
        return ['light', 'dark'].includes(type)
      },
    },
  },
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
    const { calendarEvent, dates } = await this.$content(
      '2021/pages/home/index'
    )
      .only(['calendarEvent', 'dates'])
      .fetch()
    this.calendarEvent = {
      start: dates.startDate,
      end: dates.endDate,
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
.dropdown-wrapper {
  position: relative;
  display: inline-block;
  width: 182px;
  height: 58px;
}

.dropdown {
  --bs-color: var(--bs-button--light);
  --border-color: var(--bc-button--light);
  --bg-color: var(--bg-button--light);

  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 216px;
  height: 66px;
  padding: 20px 12px 0 18px;
  background-color: var(--bg-color);
  border: 3px solid var(--border-color);
  border-radius: 32px;
  box-shadow: 6px 8px 0 0 var(--bs-color);
  cursor: pointer;
  transition: all 0.26s ease;
  &--open {
    height: 280px;
  }
  &--light {
    @media screen and (min-width: $screen-sm) {
      --bs-color: transparent;
      --border-color: transparent;
    }
  }
  &--light#{&}--open {
    --bs-color: var(--bs-button--light);
    --border-color: var(--bc-button--light);
  }
  &--dark {
    --bs-color: var(--bs-button--dark);
    --border-color: var(--bc-button--dark);
    --bg-color: var(--bg-button--dark);
  }
  &--dark#{&}--open {
    --border-color: var(--bc-button--light);
    --bg-color: var(--bg-button--light);
  }

  &__options {
    padding-top: 12px;
    list-style-type: none;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.26s ease;
    margin-block: 0;
    padding-inline: 0;
    &--visible {
      transform: scaleY(1);
    }
  }

  &__title {
    display: flex;
    justify-content: space-evenly;
    padding: 0;
    color: var(--fc-primary);
    font-weight: var(--fw-bold);
    font-size: var(--fs-small);
    font-family: var(--ff-secondary);
    background: transparent;
    border: none;
    cursor: pointer;
    transition: color 0.3s ease-in;
    &--dark {
      color: var(--fc-light);
    }
    &--dark#{&}--open {
      color: var(--fc-primary);
    }
  }

  &__icon {
    margin-left: 8px;
    color: var(--bg-close-icon);
    cursor: pointer;
  }
}

.option {
  display: flex;
  align-items: center;
  padding: 10px 0;
  color: var(--fc-default);
  font-weight: var(--fw-regular);
  font-size: var(--fs-smaller);
  transition: color 0.3s ease-in;
  &:hover,
  &:focus {
    color: var(--fc-primary);
  }

  &__icon {
    margin-right: 16px;
  }
}
</style>
