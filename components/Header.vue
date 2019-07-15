<template>
  <header class="c-Header">
    <div class="container">
      <div class="row">
        <div class="columns">
          <div class="c-Header__inner">
            <div class="c-Header__h1-wrap">
              <div>
                <h1 class="c-Header__h1">
                  Freelance web developer<br>Birmingham.
                </h1>
                <p
                  ref="parallax"
                  :class="['c-Header__0121', {'anim-in': animIn}]"
                  :style="{transform: translateY}"
                >
                  <span>#</span>
                  <span>0</span>
                  <span>1</span>
                  <span>2</span>
                  <span>1</span>
                </p>
                <div class="c-Header__link">
                  <LineLink link="mailto:ollie@stevenson.digital" link-text="Enquire now" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import LineLink from '~/components/LineLink'
import scrollParallax from '~/mixins/utility'

export default {
  components: {
    LineLink
  },
  mixins: [
    scrollParallax
  ],
  data() {
    return {
      animIn: false,
      translateY: 0
    }
  },
  created() {
    this.$nuxt.$on('triggerAnimIn', () => {
      this.animIn = true
    })
  },
  mounted() {
    this.scrollParallax()
  },
  beforeMount() {
    window.addEventListener('scroll', this.scrollParallax)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollParallax)
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';

/* ===========================
  Block
=========================== */
.c-Header {
  width: 100%;
}

/* ===========================
  Elements
=========================== */
.c-Header__inner {
  height: 100vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.c-Header__h1-wrap {
  position: relative;
  margin-bottom: 50px;
}

.c-Header__h1 {
  position: relative;
  z-index: 1;
  font-size: 6.5vw;
  line-height: 1.12;
  font-family: $f-heading;
}

.c-Header__0121 {
  position: absolute;
  top: -1.5vw;
  left: 0;
  bottom: 0;
  margin: auto;
  z-index: 0;
  color: $c-light-grey;
  font-size: 25vw;
  line-height: 13vw;
  font-family: $f-heading;
  height: 17.6vw;
  display: flex;

  span {
    opacity: 0;
  }

  $animationDelay: 1;
  @for $i from 1 through 5 {
    span:nth-of-type(#{$i}) {
      animation-delay: #{0.1+($i)/15}s;
    }
  }

  &.anim-in {
    span {
      animation-name: fade-in-up;
      animation-fill-mode: both;
      animation-duration: .5s;
    }
  }

  @media (max-width: 1000px) {
    top: -3vw;
  }

  @media (max-width: 750px) {
    top: -5vw;
  }

  @media (max-width: 650px) {
    top: -6vw;
  }

  @media (max-width: 550px) {
    top: -7vw;
  }

  @media (max-width: 450px) {
    top: -8vw;
  }

  @media (max-width: 350px) {
    top: -11vw;
  }
}

.c-Header__link {
  display: table;
  margin-top: 20px;
}
</style>
