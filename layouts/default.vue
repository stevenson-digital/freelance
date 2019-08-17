<template>
  <div>
    <PreLoader />
    <NavBar />
    <nuxt />
    <Footer />
    <!-- <CustomCursor /> -->
  </div>
</template>

<script>
import PreLoader from '~/components/PreLoader'
import NavBar from '~/components/NavBar'
import Footer from '~/components/Footer'
// import CustomCursor from '~/components/CustomCursor'

export default {
  components: {
    PreLoader,
    NavBar,
    Footer
    // CustomCursor
  }
}
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>
