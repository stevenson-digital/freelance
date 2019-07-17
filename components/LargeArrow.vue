<template>
  <div
    ref="parallax"
    :class="['c-LargeArrow', {'anim-in': animIn}]"
    :style="{transform: translateY}"
    data-speed="10"
  >
    <span class="c-LargeArrow__line" />
    <span class="c-LargeArrow__line" />
    <span class="c-LargeArrow__line" />
    <span class="c-LargeArrow__line" />
    <span class="c-LargeArrow__line" />
    <span class="c-LargeArrow__line" />
    <span class="c-LargeArrow__line" />
    <span class="c-LargeArrow__line" />
    <span class="c-LargeArrow__line" />
  </div>
</template>

<script>
import { parallax } from '~/mixins/parallax'

export default {
  mixins: [
    parallax
  ],
  data() {
    return {
      animIn: false,
      translateY: 0
    }
  },
  created() {
    this.$nuxt.$on('triggerAnimIn', () => {
      this.animIn = true
    })
  },
  mounted() {
    this.scrollParallax()
  },
  beforeMount() {
    window.addEventListener('scroll', this.scrollParallax)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollParallax)
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';

/* ===========================
  Block
=========================== */
.c-LargeArrow {
  position: absolute;
  right: 35%;
  bottom: 35%;
  z-index: 1;
  opacity: 0;

  &.anim-in {
    animation-name: fade-in-down;
    animation-fill-mode: both;
    animation-duration: 500ms;
    animation-delay: 350ms;
  }
}

/* ===========================
  Elements
=========================== */
.c-LargeArrow__line {
  position: absolute;
  width: 30px;
  height: 4px;
  background: $c-black;
  top: 0;
  left: 0;

  &:nth-of-type(2),
  &:nth-of-type(3) {
    height: 160px;
    width: 4px;
  }

  &:nth-of-type(3) {
    left: 30px;
  }

  &:nth-of-type(4),
  &:nth-of-type(5) {
    width: 4px;
    height: 58px;
    transform: rotate(45deg);
    left: 50px;
    top: 112px;
  }

  &:nth-of-type(5) {
    transform: rotate(-45deg);
    left: -20px;
  }

  &:nth-of-type(6),
  &:nth-of-type(7) {
    transform: rotate(45deg);
    left: 66px;
    top: 130px;
  }

  &:nth-of-type(7) {
    transform: rotate(-45deg);
    left: -62px;
  }

  &:nth-of-type(8),
  &:nth-of-type(9) {
    width: 4px;
    height: 106px;
    transform: rotate(45deg);
    left: 52px;
    top: 125px;
  }

  &:nth-of-type(9) {
    transform: rotate(-45deg);
    left: -22px;
  }
}
</style>
