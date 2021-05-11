<template>
  <div class="newsletter">
    <div class="newsletter__wrapper">
      <div class="newsletter__copy">
        <h3>{{ content.lead }}</h3>
        <p>{{ content.body }}</p>
      </div>
      <form class="newsletter__form" @submit.prevent="handleSubmit">
        <label
          id="label-newsletter"
          for="newsletter"
          class="sr-only"
          aria-hidden="true"
        >
          {{ content.label }}
        </label>
        <input
          id="newsletter"
          ref="input"
          v-model="formData.email"
          type="text"
          name="newsletter"
          :placeholder="content.label"
          required
          aria-labelledby="label-newsletter"
        />
        <CommonCustomButton
          type="submit"
          icon="arrow-right"
          icon-suffix
          theme="light"
        >
          {{ content.cta }}
        </CommonCustomButton>
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
        email: null,
      },
    }
  },
  methods: {
    async handleSubmit(event) {
      // Send the email
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
    padding: 40px 56px 56px;
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
    margin-top: 32px;
    input {
      width: 100%;
      margin: 0 8px 10px 0;
      padding: 14px 24px;
      color: var(--fc-default);
      font-size: var(--fs-small);
      column-gap: 24px;
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
  }
}
</style>
