<template>
  <a
    class="c-LineLink"
    :href="link"
    @mouseover="toggleCursorHover(true)"
    @mouseleave="toggleCursorHover(false)"
  >
    {{ linkText }}
  </a>
</template>

<script>
import { cursor } from '~/mixins/cursor'

export default {
  mixins: [
    cursor
  ],
  props: {
    link: {
      type: String,
      required: true
    },
    linkText: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';

/* ===========================
  Block
=========================== */
.c-LineLink {
  position: relative;
  font-family: $f-heading;
  text-decoration: none;
  color: $c-black;
  transition: opacity $t-standard;

  &:after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: -2px;
    left: 0;
    background-color: $c-black;
    transform: translateX(15px);
    transition: transform $t-standard;
  }

  &:hover {
    opacity: 0.5;

    &:after {
      transform: translateX(0);
    }
  }
}
</style>
