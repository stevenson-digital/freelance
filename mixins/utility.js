export default {
  methods: {
    toggleMouseHover(state) {
      this.$nuxt.$emit('toggleMouseHover', state)
    }
  }
}
