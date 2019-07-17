/* eslint-disable */
export const utility = {
  methods: {
    toggleMouseHover(state) {
      this.$nuxt.$emit('toggleMouseHover', state)
    },
    toggleMouseWhite(state) {
      this.$nuxt.$emit('toggleMouseWhite', state)
    },
    scrollParallax() {
      if (this.$refs.parallax) {
        const speed = (this.$refs.parallax.getAttribute('data-speed')) ? this.$refs.parallax.getAttribute('data-speed') : 6 // Speed: 0-10 with 0 being the most amount of parallax
        const amountScrolled = window.pageYOffset - this.$refs.parallax.offsetTop
        const movement = Math.round(amountScrolled / speed)
        this.translateY = `translateY(${movement}px)`
      }
    }
  }
}
