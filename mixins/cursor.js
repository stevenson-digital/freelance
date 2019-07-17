export const cursor = {
  methods: {
    toggleCursorHover(state) {
      this.$nuxt.$emit('toggleCursorHover', state)
    },
    toggleCursorWhite(state) {
      this.$nuxt.$emit('toggleCursorWhite', state)
    }
  }
}
