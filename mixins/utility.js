export default {
  methods: {
    toggleMouseHover(state) {
      this.$nuxt.$emit('toggleMouseHover', state)
    },
    toggleMouseWhite(state) {
      this.$nuxt.$emit('toggleMouseWhite', state)
    },
    scrollParallax() {
      if (this.$refs.parallax) {
        const speed = 6 // Speed: 0-10 with 0 being the most amount of parallax
        const st = window.pageYOffset
        const elTop = this.$refs.parallax.offsetTop
        const amountScrolled = st - elTop
        const movement = Math.round(amountScrolled / speed)
        this.translateY = `translateY(${movement}px)`
      }
    }
  }
}
