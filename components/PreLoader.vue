<template>
  <div
    v-if="visible"
    class="c-PreLoader"
  >
    <img
      class="c-PreLoader__logo"
      src="~/assets/img/Logo_White.png"
      alt="Ollie Stevenson freelance web developer and designer logo"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.$nuxt.$emit('triggerAnimIn')
    }, 3100) // Animation must start before fade out so they visually match
    setTimeout(() => {
      this.visible = false
    }, 3500) // Total of main anim delay + time
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';

/* ===========================
  Block
=========================== */
.c-PreLoader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: $c-black;
  z-index: $z-preloader;
  display: flex;
  align-items: center;
  justify-content: center;
  // animation-name: fade-out;
  // animation-fill-mode: both;
  // animation-duration: .5s;
  // animation-delay: 3s; // Must be total of below animation delay + time
}

/* ===========================
  Elements
=========================== */
.c-PreLoader__logo {
  width: 60px;
  // animation-name: fade-in-out-delayed;
  animation-name: fade-in;
  animation-fill-mode: both;
  animation-duration: 2.5s;
  animation-delay: 0.5s;
}
</style>
