<template>
  <footer
    class="[ c-Footer ] [ pt-110-50 pb-110-50 ]"
    @mouseover="toggleMouseWhite(true)"
    @mouseleave="toggleMouseWhite(false)"
  >
    <div class="container">
      <div class="row">
        <div class="columns">
          <a
            class="[ c-Footer__link ] [ u-color-white f-heading-98-24 ]"
            :href="'tel:+447760668039'"
            @mouseover="toggleMouseHover(true)"
            @mouseleave="toggleMouseHover(false)"
          >
            Tel:<span class="f-heading-98-34--light">+447760668039</span>
          </a>
          <a
            class="[ c-Footer__link ] [ u-color-white f-heading-98-24 ]"
            :href="'mailto:ollie@stevenson.digital'"
            @mouseover="toggleMouseHover(true)"
            @mouseleave="toggleMouseHover(false)"
          >
            Email:<span class="f-heading-98-34--light">ollie@stevenson.digital</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { utility } from '~/mixins/utility'

export default {
  mixins: [
    utility
  ]
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';

/* ===========================
  Block
=========================== */
.c-Footer {
  background-color: $c-black;
}

/* ===========================
  Elements
=========================== */
.c-Footer__link {
  display: table;
  margin-bottom: 15px;
  text-decoration: none;

  span {
    position: relative;
    display: inline-block;
    @include v-spacing(margin-left, 5px, 20px);

    &:after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: $c-white;
      transition: width 425ms $t-cubic-bez;
    }

    @media (max-width: 330px) {
      display: block;
      margin-left: 0;
    }
  }

  &:hover span::after {
    width: 100%;
  }
}
</style>
