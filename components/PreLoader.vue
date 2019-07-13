<template>
  <div class="c-PreLoader" v-if="visible">
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
      this.visible = false
    }, 4500) // Total of main anim delay + time
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
  animation-name: fade-out;
  animation-fill-mode: both;
  animation-duration: .5s;
  animation-delay: 4s; // Must be total of below animation delay + time
}

/* ===========================
  Elements
=========================== */
.c-PreLoader__logo {
  width: 60px;
  animation-name: fade-in-out;
  animation-fill-mode: both;
  animation-duration: 3s;
  animation-delay: 1s;
}
</style>
