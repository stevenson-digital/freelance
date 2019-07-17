<template>
  <div>
    <div
      id="c-CustomCursor"
      :class="[{'hover': hover}, {'white': white}]"
      :style="[{top: outerPosY + 'px'}, {left: outerPosX + 'px'}]"
    />
    <div
      id="c-CustomCursor__inner"
      :class="{'white': white}"
      :style="[{top: posY + 'px'}, {left: posX + 'px'}]"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      outerPosX: 0,
      outerPosY: 0,
      posX: 0,
      posY: 0,
      hover: false,
      white: false
    }
  },
  beforeMount() {
    document.addEventListener('mousemove', (e) => {
      this.moveCursor(e)
    })
  },
  beforeDestroy() {
    document.removeEventListener('mousemove', (e) => {
      this.moveCursor(e)
    })
  },
  created() {
    this.$nuxt.$on('toggleCursorHover', (state) => {
      this.hover = state
    })
    this.$nuxt.$on('toggleCursorWhite', (state) => {
      this.white = state
    })
  },
  methods: {
    moveCursor(e) {
      this.outerPosX = e.pageX - 16
      this.outerPosY = e.pageY - 16
      this.posX = e.pageX - 5
      this.posY = e.pageY - 5
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';

body {
  cursor: none !important;

  @media (max-width: 1200px) {
    cursor: default !important;
  }

  @supports (-ms-ime-align:auto) {
    // IE11
    cursor: default !important;
  }

  a,
  button {
    cursor: none;

    @media (max-width: 1200px) {
      cursor: pointer !important;
    }

    @supports (-ms-ime-align:auto) {
      // MS Edge
      cursor: pointer !important;
    }
  }

  @media all and (-ms-high-contrast:none) {
    // IE11
    *::-ms-backdrop, a, button { cursor: pointer !important; }
  }
}

#c-CustomCursor,
#c-CustomCursor__inner {
  position: absolute;
  border-radius: 50%;
  z-index: 999999;
  pointer-events: none;

  @media (max-width: 1200px) {
    display: none;
  }
}

#c-CustomCursor {
  width: 30px;
  height: 30px;
  border: 1px solid $c-black;
  z-index: $z-cursor;
  transition-duration: 150ms;
  transition-timing-function: ease-out;

  &.white {
    border-color: $c-white;
  }

  &.hover {
    opacity: 0;
    transform: scale(0.5);
  }
}

#c-CustomCursor__inner {
  width: 10px;
  height: 10px;
  background-color: $c-black;

  &.white {
    background-color: $c-white;
  }
}
</style>
