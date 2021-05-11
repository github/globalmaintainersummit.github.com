<template>
  <div class="newsletter">
    <div class="newsletter__wrapper">
      <div class="newsletter__copy">
        <h3>{{ content.lead }}</h3>
        <p>{{ content.body }}</p>
      </div>
      <form
        action="https://github.us11.list-manage.com/subscribe/post?u=9d7ced8c4bbd6c2f238673f0f&amp;id=e21329ec0b"
        method="post"
        class="newsletter__form"
        target="_blank"
        @submit.prevent="handleSubmit"
      >
        <label
          id="label-newsletter"
          for="newsletter"
          class="sr-only"
          aria-hidden="true"
        >
          {{ content.label }}
        </label>
        <template v-if="!formData.submitted">
          <input
            id="newsletter"
            ref="input"
            v-model="formData.email"
            type="text"
            name="EMAIL"
            :placeholder="content.placeholder"
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
          >
            {{ content.cta }}
          </CommonCustomButton>
        </template>
        <p v-else>
          Happy to have you onboard! Check your inbox to confirm the
          subscription.
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      formData: {
        submitted: false,
        successful: false,
      },
    }
  },
  methods: {
    handleSubmit(event) {
      event.target.submit()
      this.formData.successful = true
      this.formData.submitted = true
    },
  },
}
</script>

<style lang="scss" scoped>
.newsletter {
  position: relative;
  margin-top: 160px;
  isolation: isolate;
  &__wrapper {
    position: relative;
    max-width: 783px;
    padding: 24px 32px 32px;
    @media only screen and (min-width: 680px) {
      padding: 40px 56px 56px;
    }

    color: var(--fc-light);
    background-image: linear-gradient(
      135deg,
      var(--bg-accent) 0%,
      var(--bg-primary) 100%
    );
    background-position: center;
    border: 5px var(--bg-body) solid;
    h3,
    p {
      margin: 0;
      padding: 0;
    }
    p {
      margin-top: 16px;
      font-size: var(--fs-small);
    }
    &::after {
      position: absolute;
      top: 19px;
      left: 19px;
      z-index: -1;
      display: block;
      width: 100%;
      height: 100%;
      background-color: var(--bg-dimmed);
      content: '';
      -webkit-mask-image: url('~/assets/svg/pattern_shadow.svg');
      mask-image: url('~/assets/svg/pattern_shadow.svg');
    }
  }
  &__form {
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    margin-top: 32px;
    @media only screen and (min-width: 680px) {
      flex-flow: row;
      align-items: flex-start;
    }
    input {
      @include mobileToDesktopFontSize(var(--fs-smaller), var(--fs-small));

      width: 100%;
      margin: 0 8px 10px 0;
      padding: 20px 24px 18px;
      color: var(--fc-default);
      background-color: var(--bg-body);
      border: 3px solid var(--bg-primary);
      border-radius: 42px;
      box-shadow: 6px 8px 0 0 var(--bg-primary-dark);
      cursor: pointer;
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
}
</style>
