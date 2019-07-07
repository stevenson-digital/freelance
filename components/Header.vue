<template>
  <header class="c-Header">
    <div class="container">
      <div class="row">
        <div class="columns">
          <div class="c-Header__h1-wrap">
            <h1 class="c-Header__h1 f-heading-136-90">
              Freelance web developer<br>Birmingham.
            </h1>
            <p class="c-Header__0121">
              #0121
            </p>
          </div>
          <LineLink link="mailto:ollie@stevenson.digital" link-text="Enquire now" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import LineLink from '~/components/LineLink'

export default {
  components: {
    LineLink
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';

/* ===========================
  Block
=========================== */
.c-Header {
  height: 100vh;
  display: flex;
  align-items: center;
}

/* ===========================
  Elements
=========================== */
.c-Header__h1-wrap {
  position: relative;
  margin-bottom: 50px;
}

.c-Header__h1 {
  position: relative;
  z-index: 1;
}

.c-Header__0121 {
  position: absolute;
  top: 0;
  left: $container-padding;
  bottom: 0;
  margin: auto;
  z-index: 0;
  color: $c-light-grey;
  font-size: 444px;
  line-height: 250px;
  font-family: $f-heading;
  height: 315px;
}
</style>
