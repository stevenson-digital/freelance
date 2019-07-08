<template>
  <div>
    <NavBar />
    <nuxt />
    <Footer />
    <CustomCursor />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
import Footer from '~/components/Footer'
import CustomCursor from '~/components/CustomCursor'

export default {
  components: {
    NavBar,
    Footer,
    CustomCursor
  }
}
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>
