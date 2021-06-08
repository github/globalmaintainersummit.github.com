<template>
  <section v-if="newsletter" class="newsletter">
    <client-only>
      <div id="newsletter-wrapper" class="newsletter__wrapper">
        <div class="newsletter__copy">
          <h3>{{ newsletter.lead }}</h3>
          <p>{{ newsletter.body }}</p>
        </div>
        <form
          id="mc-embedded-subscribe-form"
          action="https://github.us11.list-manage.com/subscribe/post?u=9d7ced8c4bbd6c2f238673f0f&amp;id=e21329ec0b"
          method="post"
          class="newsletter__form validate subscribe-form"
          target="_blank"
          rel="noopener noreferrer"
        >
          <label
            id="label-newsletter"
            for="newsletter"
            class="sr-only"
            aria-hidden="true"
          >
            {{ newsletter.label }}
          </label>
          <input
            id="newsletter"
            ref="input"
            type="text"
            name="EMAIL"
            :placeholder="newsletter.placeholder"
            required
            aria-labelledby="label-newsletter"
          />
          <input
            type="hidden"
            name="b_9d7ced8c4bbd6c2f238673f0f_e21329ec0b"
            tabindex="-1"
            value=""
          />
          <CommonCustomButton
            type="submit"
            icon="arrow-right"
            icon-suffix
            theme="light"
            @click="handleClick"
          >
            {{ newsletter.cta }}
          </CommonCustomButton>
        </form>
        <div id="mce-responses" class="clear newsletter__feedback">
          <p
            id="mce-error-response"
            class="response newsletter__feedback--warning"
            style="display: none"
          ></p>
          <p
            id="mce-success-response"
            class="response newsletter__feedback--success"
            style="display: none"
          ></p>
        </div>
        <script src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
        <script>
          ;(function ($) {
            window.fnames = new Array()
            window.ftypes = new Array()
            fnames[0] = 'EMAIL'
            ftypes[0] = 'email'
          })(jQuery)
          var $mcj = jQuery.noConflict(true)
        </script>
      </div>
    </client-only>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newsletter: null,
    }
  },
  async fetch() {
    const { newsletter } = await this.$content('2021/pages/home/index')
      .only(['newsletter'])
      .fetch()
    this.newsletter = newsletter
  },
  methods: {
    handleClick() {
      document
        .getElementById('newsletter-wrapper')
        .classList.add('newsletter__wrapper--feedback')
    },
  },
}
</script>

<style lang="scss" scoped>
.newsletter {
  position: relative;
  margin-top: 48px;
  isolation: isolate;
  @media screen and (min-width: $screen-sm) {
    margin-top: 160px;
  }
  &__wrapper {
    @include highlightedBox();

    padding: 24px 32px 32px;
    transition: padding-bottom 0.3s ease-in;
    @media only screen and (min-width: 680px) {
      padding: 40px 56px 56px;
    }

    &--feedback {
      padding-bottom: 132px;

      @media only screen and (min-width: 680px) {
        padding-bottom: 148px;
      }
      @media only screen and (min-width: 818px) {
        padding-bottom: 120px;
      }
    }
    h3,
    p {
      margin: 0;
      padding: 0;
    }
    p {
      margin-top: 16px;
      font-size: var(--fs-small);
    }
  }
  &__form {
    position: relative;
    display: flex;
    flex-flow: column;
    gap: 32px;
    align-items: flex-end;
    margin-top: 32px;
    @media only screen and (min-width: $screen-sm) {
      flex-flow: row;
      gap: 24px;
      align-items: flex-start;
    }
    input {
      @include mobileToDesktopFontSize(var(--fs-smaller), var(--fs-small));

      width: 100%;
      margin: 0 8px 10px 0;
      padding: 18px 24px 20px;
      color: var(--fc-default);
      background-color: var(--bg-body);
      border: 3px solid var(--bg-primary);
      border-radius: 42px;
      box-shadow: 6px 8px 0 0 var(--bg-primary-dark);
      transition: all 0.3s ease-in;
      &:hover,
      &:focus {
        border-color: var(--input-border--hover);
        outline: none;
        box-shadow: 8px 10px 0 0 var(--bg-dark);
      }
    }
    .button__wrapper {
      margin-top: 32px;
      @media only screen and (min-width: 680px) {
        margin-top: 0;
      }
    }
  }
  &__feedback {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    p {
      padding: 14px 36px 12px;
      @media only screen and (min-width: 680px) {
        padding: 24px 56px 32px;
      }
    }

    &--success {
      color: var(--fc-feedback--success);
      background-color: var(--bg-feedback--success);
    }
    &--warning {
      color: var(--fc-feedback--warning);
      background-color: var(--bg-feedback--warning);
      ::v-deep a {
        color: var(--fc-feedback--warning);
        text-decoration: underline;
      }
    }
  }
}
</style>
