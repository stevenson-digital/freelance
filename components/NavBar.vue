<template>
  <div class="c-NavBar">
    <img class="c-NavBar__logo" src="~/assets/img/Logo_Black.png" alt="Ollie Stevenson freelance web developer and designer logo">
    <a class="c-NavBar__email" href="mailto:ollie@stevenson.digital">ollie@stevenson.digital</a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import './assets/scss/main.scss';

/* ===========================
  Block
=========================== */
.c-NavBar {
  width: 100%;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: $container-padding;
  left: 0;
  height: $h-navbar;
}

/* ===========================
  Elements
=========================== */
.c-NavBar__logo {
  height: 100%;
  margin-left: $container-padding;
}

.c-NavBar__email {
  display: table;
  color: $c-black;
  text-decoration: none;
  margin-right: $container-padding;
  transition: opacity $t-standard;

  &:hover {
    opacity: 0.5;
  }
}
</style>
