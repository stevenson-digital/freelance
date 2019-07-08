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
      this.posX = e.pageX - 11
      this.posY = e.pageY - 12
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';

#c-CustomCursor {
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  border: 1px solid $c-black;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
}

#c-CustomCursor__inner {
  width: 50%;
  height: 50%;
  border-radius: 50%;
  background-color: $c-black;
}
</style>
