<template>
  <div class="profile-image">
    <img
      :src="require(`~/assets/img/maintainers/${handler}.jpg`)"
      aria-hidden="true"
      role="presentation"
      alt=""
    />
  </div>
</template>

<script>
export default {
  props: {
    handler: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.profile-image {
  --maintainer-width: 256px;
  --maintainer-height: 284px;
  --maintainer-border: 5px;

  position: relative;
  width: calc(var(--maintainer-width) + var(--maintainer-border));
  height: calc(var(--maintainer-height) + var(--maintainer-border));

  img {
    position: relative;
    top: 0;
    left: 0;
    z-index: 2;
    width: calc(var(--maintainer-width) + var(--maintainer-border));
    height: calc(var(--maintainer-height) + var(--maintainer-border));
    object-fit: cover;
    object-position: center;
    border: var(--maintainer-border) white solid;
    transition: top 0.25s ease-in-out, left 0.25s ease-in-out;
  }
  &::after {
    position: absolute;
    top: 19px;
    left: 19px;
    z-index: 1;
    display: block;
    width: var(--maintainer-width);
    height: var(--maintainer-height);
    background-color: var(--bg-dimmed);
    content: '';
    -webkit-mask-image: url('~/assets/svg/pattern_shadow.svg');
    mask-image: url('~/assets/svg/pattern_shadow.svg');
  }
}
</style>
