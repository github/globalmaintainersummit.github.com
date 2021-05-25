<template>
  <div class="container">
    <ul class="grid" :class="{ 'grid--three-cols': threeCols }">
      <li v-for="item in maintainers || projects" :key="item.name">
        <ProjectCard v-if="projects" :maintainer="item" />
        <MaintainerCard v-else :maintainer="item" :oversize="threeCols" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    threeCols: {
      type: Boolean,
      default: false,
    },
    maintainers: {
      type: Array,
      default: null,
    },
    projects: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 24px;
  @media only screen and (min-width: 680px) {
    padding: 56px 40px 92px;
  }
}

.grid {
  --column-width: 256px;

  scroll-snap-type: y mandatory;
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(1, var(--column-width));
  justify-content: center;
  box-sizing: border-box;
  min-width: var(--column-width);
  margin: 0;
  padding: 0;
  @media only screen and (min-width: 680px) {
    scroll-snap-type: none;
    grid-template-columns: repeat(2, var(--column-width));
  }
  @media only screen and (min-width: 1024px) {
    grid-gap: 5rem;
    grid-template-columns: repeat(3, var(--column-width));
  }
  @media only screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, var(--column-width));
  }
  li {
    --gradient-position: top left;

    scroll-snap-align: start;
    display: flex;
    text-transform: capitalize;
    transform: translateY(0);
    @media only screen and (min-width: 680px) {
      &:nth-child(even) {
        transform: translateY(80px);
      }
    }
    @media only screen and (min-width: 1024px) {
      &:nth-child(even) {
        --gradient-position: top left;

        transform: translateY(0);
      }
      &:nth-child(3n + 2) {
        --gradient-position: bottom right;

        transform: translateY(80px);
      }
    }
    @media only screen and (min-width: 1440px) {
      &:nth-child(3n + 2) {
        --gradient-position: top left;

        transform: translateY(0);
      }
      &:nth-child(even) {
        --gradient-position: bottom right;

        transform: translateY(80px);
      }
    }
  }

  &--three-cols {
    --column-width: 376px;
    --item-height: 420px;
    --gradient-position: top left;

    grid-template-columns: repeat(1, var(--column-width));
    min-width: var(--column-width);

    @media only screen and (min-width: 920px) {
      grid-gap: 5rem;
      grid-template-columns: repeat(2, var(--column-width));
    }
    @media only screen and (min-width: 1440px) {
      grid-template-columns: repeat(3, var(--column-width));
    }
    li {
      @media only screen and (min-width: 920px) {
        &:nth-child(3n + 2) {
          --gradient-position: top left;

          transform: translateY(0);
        }
        &:nth-child(even) {
          --gradient-position: bottom right;

          transform: translateY(80px);
        }
      }
      @media only screen and (min-width: 1440px) {
        --gradient-position: top left;
        &:nth-child(even) {
          transform: translateY(0);
        }
        &:nth-child(3n + 2) {
          --gradient-position: bottom right;

          transform: translateY(80px);
        }
      }
    }
  }
}
</style>
