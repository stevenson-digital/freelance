<template>
  <div>
    <div id="c-CustomCursor" :style="[{top: outerPosY + 'px'}, {left: outerPosX + 'px'}]" />
    <div id="c-CustomCursor__inner" :style="[{top: posY + 'px'}, {left: posX + 'px'}]" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      outerPosX: 0,
      outerPosY: 0,
      posX: 0,
      posY: 0
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
  cursor: none;
}

#c-CustomCursor,
#c-CustomCursor__inner {
  position: absolute;
  border-radius: 50%;
  z-index: 999999;
}

#c-CustomCursor {
  width: 30px;
  height: 30px;
  border: 1px solid $c-black;
  z-index: 999999;
  transition-duration: 150ms;
  transition-timing-function: ease-out;
}

#c-CustomCursor__inner {
  width: 10px;
  height: 10px;
  background-color: $c-black;
}
</style>
