<template>
  <div id="c-CustomCursor" :style="[{top: posY + 'px'}, {left: posX + 'px'}]">
    <div id="c-CustomCursor__inner" />
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      this.posX = e.pageX - 17
      this.posY = e.pageY - 17
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';

body {
  cursor: none;
}

#c-CustomCursor {
  width: 30px;
  height: 30px;
  position: absolute;
  border-radius: 50%;
  border: 1px solid $c-black;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
}

#c-CustomCursor__inner {
  width: 35%;
  height: 35%;
  border-radius: 50%;
  background-color: $c-black;
}
</style>
