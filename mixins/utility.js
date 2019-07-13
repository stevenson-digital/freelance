export default {
  methods: {
    toggleMouseHover(state) {
      this.$nuxt.$emit('toggleMouseHover', state)
    },
    toggleMouseWhite(state) {
      this.$nuxt.$emit('toggleMouseWhite', state)
    }
  }
}
