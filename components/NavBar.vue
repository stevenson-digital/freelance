<template>
  <div :class="['c-NavBar', {'scrolled': scrolled}]">
    <img
      class="c-NavBar__logo"
      src="~/assets/img/Logo_Black.png"
      alt="Ollie Stevenson freelance web developer and designer logo"
    >
    <a
      class="c-NavBar__email"
      href="mailto:ollie@stevenson.digital"
      @mouseover="toggleCursorHover(true)"
      @mouseleave="toggleCursorHover(false)"
    >ollie@stevenson.digital</a>
  </div>
</template>

<script>
import { cursor } from '~/mixins/cursor'

export default {
  mixins: [
    cursor
  ],
  data() {
    return {
      scrolled: false
    }
  },
  mounted() {
    this.toggleScrolledState()
  },
  beforeMount() {
    window.addEventListener('scroll', this.toggleScrolledState)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.toggleScrolledState)
  },
  methods: {
    toggleScrolledState() {
      if (window.scrollY > 0) {
        this.scrolled = true
      } else {
        this.scrolled = false
      }
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';

/* ===========================
  Block
=========================== */
.c-NavBar {
  width: 100%;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: $h-navbar;
  z-index: $z-navbar;
  background-color: $c-white;
  border: 1px solid transparent;
  transform: translateY($container-padding);
  transition: transform $t-standard, border-color $t-standard;

  @media (max-width: 1600px) {
    transform: translateY(40px);
  }

  @media (max-width: $w-grid-small) {
    transform: translateY($container-padding-small);
  }

  &.scrolled {
    transform: translateY(0px);
    border-color: $c-light-grey;

    .c-NavBar__logo {
      height: 60%;
    }
  }
}

/* ===========================
  Elements
=========================== */
.c-NavBar__logo {
  height: 100%;
  margin-left: $container-padding;
  transition: height $t-standard;

  @media (max-width: $w-grid-small) {
    height: 70%;
    margin-left: $container-padding-small;
  }
}

.c-NavBar__email {
  display: table;
  color: $c-black;
  text-decoration: none;
  margin-right: $container-padding;
  transition: opacity $t-standard;

  @include breakpoint ( medium down ) {
    margin-right: $container-padding-small;
  }

  @media (max-width: $w-grid-small) {
    margin-right: $container-padding-small;
  }

  &:hover {
    opacity: 0.5;
  }
}
</style>
