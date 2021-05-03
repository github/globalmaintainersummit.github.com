<template>
  <div class="container">
    <ul class="grid" :class="{ 'grid--three-cols': threeCols }">
      <li v-for="item in items" :key="item.name" class="grid_item item">
        <a href="/grid" class="item">
          <div class="item__image">
            <!-- <img
              :src="`./assets/maintainers/${item.name
                .toLowerCase()
                .replace(/\s+/g, '')}.png`"
              :alt="item.name"
            /> -->
            <img
              src="~/assets/img/maintainers/placeholder.png"
              :alt="item.name"
            />
          </div>
          <div class="item__content">
            <h3>{{ item.name }}</h3>
            <p>{{ item.project }}</p>
          </div>
        </a>
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
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: 7.5rem 1.5rem 1.5rem 1.5rem;
  @media only screen and (min-width: 680px) {
    padding: 7.5rem 2.5rem 7.5rem 2.5rem;
  }
}

.grid {
  --item-width: 256px;
  --item-height: 284px;
  --item-border: 5px;

  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(1, var(--item-width));
  justify-content: center;
  box-sizing: border-box;
  min-width: var(--item-width);
  margin: 0;
  padding: 0;
  @media only screen and (min-width: 680px) {
    grid-template-columns: repeat(2, var(--item-width));
  }
  @media only screen and (min-width: 1024px) {
    grid-gap: 5rem;
    grid-template-columns: repeat(3, var(--item-width));
  }
  @media only screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, var(--item-width));
  }
  li {
    display: flex;
    place-content: center;
    place-items: center;
    text-transform: capitalize;
    transform: translateY(0);
    @media only screen and (min-width: 680px) {
      &:nth-child(even) {
        transform: translateY(80px);
      }
    }
    @media only screen and (min-width: 1024px) {
      &:nth-child(even) {
        transform: translateY(0);
      }
      &:nth-child(3n + 2) {
        transform: translateY(80px);
      }
    }
    @media only screen and (min-width: 1440px) {
      &:nth-child(3n + 2) {
        transform: translateY(0);
      }
      &:nth-child(even) {
        transform: translateY(80px);
      }
    }
  }

  &--three-cols {
    --item-width: 376px;
    --item-height: 420px;

    grid-template-columns: repeat(1, var(--item-width));
    min-width: var(--item-width);

    @media only screen and (min-width: 920px) {
      grid-gap: 5rem;
      grid-template-columns: repeat(2, var(--item-width));
    }
    @media only screen and (min-width: 1440px) {
      grid-template-columns: repeat(3, var(--item-width));
    }
    li {
      @media only screen and (min-width: 920px) {
        &:nth-child(3n + 2) {
          transform: translateY(0);
        }
        &:nth-child(even) {
          transform: translateY(80px);
        }
      }
      @media only screen and (min-width: 1440px) {
        &:nth-child(even) {
          transform: translateY(0);
        }
        &:nth-child(3n + 2) {
          transform: translateY(80px);
        }
      }
    }
  }
}

.item {
  /*
  Optional display table to avoid the
  focus ring to include the "shadow" shape
  */
  display: table;
  cursor: pointer;
  &__image {
    position: relative;
    width: calc(var(--item-width) + var(--item-border));
    height: calc(var(--item-height) + var(--item-border));
    img {
      width: calc(var(--item-width) + var(--item-border));
      height: calc(var(--item-height) + var(--item-border));
      object-fit: cover;
      object-position: center;
      border: var(--item-border) white solid;
    }
    &::after {
      position: absolute;
      top: 19px;
      left: 19px;
      z-index: -1;
      display: block;
      width: var(--item-width);
      height: var(--item-height);
      background-color: var(--bg-dimmed);
      transition: background-color 0.5s ease, top 0.5s ease, left 0.5s ease;
      content: '';
    }
  }
  &__content {
    margin-top: 40px;
    h3 {
      margin: 0;
      padding: 0;
      color: #230138;
      font-size: 40px;
    }
    p {
      margin: 1rem 0 0 0;
      padding: 0;
      color: #b349e5;
      font-size: 20px;
    }
  }
  &:hover,
  &:focus {
    .item__image::after {
      top: 24px;
      left: 24px;
      background-color: var(--bg-accent);
    }
  }
}
</style>
