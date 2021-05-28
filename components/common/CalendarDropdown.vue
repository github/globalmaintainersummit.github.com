<template>
  <div>
    <focus-trap :active="showDropdown">
      <div
        class="dropdown-wrapper"
        :class="[
          `dropdown-wrapper--${type}`,
          {
            'dropdown-wrapper--open': showDropdown,
          },
        ]"
      >
        <div class="dropdown" :class="showDropdown && 'dropdown--open'">
          <button
            class="dropdown__title"
            :class="[
              `dropdown__title--${type}`,
              {
                'dropdown__title--nav-open': showDropdown,
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
            <CloseIcon
              class="dropdown__close"
              :class="showDropdown && 'dropdown__close--visible'"
              aria-hidden="true"
            />
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

const KEY_CALENDAR_APPLE = 'apple'
const KEY_CALENDAR_GOOGLE = 'google'
const KEY_CALENDAR_OFFICE = 'office'
const KEY_CALENDAR_OUTLOOK = 'outlook'
const KEY_CALENDAR_YAHOO = 'yahoo'

export default {
  components: {
    FocusTrap,
    CloseIcon,
  },
  props: {
    type: {
      type: String,
      default: 'dark',
      validator: (type) => {
        return ['light', 'dark', 'transparent'].includes(type)
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
    const { calendarEvent } = await this.$content('2021/pages/home/index')
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
.dropdown-wrapper {
  --dropdown-height: 280px;
  --dropdown-width-default: 196px;
  --wrapper-width-default: 142px;
  --dropdown-width: var(--dropdown-width-default);
  --wrapper-width: var(--wrapper-width-default);

  // @media (max-width: $screen-sm) {
  //   &--nav {
  //     --dropdown-width: 100%;
  //     --wrapper-width: 100%;
  //   }
  //   &--open {
  //     transform: translateX(35%);
  //   }
  // }

  position: relative;
  display: inline-block;
  width: var(--wrapper-width);
}

.dropdown {
  position: absolute;
  top: 0;
  display: block;
  width: var(--dropdown-width);
  height: 30px;
  cursor: pointer;
  transition: height 0.26s ease;
  &--open {
    --dropdown-width: var(--dropdown-width-default);
    --wrapper-width: var(--wrapper-width-default);

    width: var(--dropdown-width);
    height: var(--dropdown-height);
    margin: -24px;
    padding: 24px 12px 24px 24px;
    background-color: var(--bg-body);
    border-radius: 24px;
    box-shadow: 0 16px 24px 0 rgba(13, 9, 16, 0.08),
      0 8px 16px 0 rgba(13, 9, 16, 0.12);

    // .dropdown__title--nav {
    //   @media (max-width: $screen-sm) {
    //     color: var(--fc-primary);
    //   }
    // }
  }

  &__options {
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
    margin-bottom: 12px;
    padding: 0;
    color: var(--fc-primary);
    font-weight: var(--fw-bold);
    font-size: var(--fs-small);
    background: transparent;
    border: none;
    cursor: pointer;

    // &--nav {
    //   @media (max-width: $screen-sm) {
    //     color: var(--fc-light);
    //     font-size: var(--fs-large);
    //     font-family: var(--ff-title);
    //     &-open {
    //       font-weight: var(--fw-bold);
    //       font-size: var(--fs-small);
    //       font-family: var(--ff-secondary);
    //     }
    //   }
    // }
  }

  &__close {
    margin-left: 8px;
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
