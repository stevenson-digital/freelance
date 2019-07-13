<template>
  <div>
    <Header />
    <main>
      <section
        class="[ l-Experience ] [ pt-110-50 pb-110-50 ] [ u-color-white ]"
        @mouseover="toggleMouseWhite(true)"
        @mouseleave="toggleMouseWhite(false)"
      >
        <div class="container">
          <div class="row">
            <div class="columns medium-10">
              <h2 class="[ l-Experience__h2 ] [ f-heading-98-34 ]">
                Experience.
              </h2>
              <p class="mb-110-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin tincidunt pharetra. Vivamus laoreet auctor est, et pretium lorem porttitor eget. Nullam id lectus in lacus convallis scelerisque. Vivamus tincidunt ex diam, a fermentum mi imperdiet vitae. Nullam ut diam quis diam molestie ornare nec ut felis. Proin pulvinar risus augue, ut accumsan lorem pretium et.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="[ columns medium-10 ] [ mb-50-20 ]">
              <ExperienceBlock
                :heading="'Web Developer'"
                :job-title="'Six, Leicester | Current Position'"
                :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin tincidunt pharetra. Vivamus laoreet auctor est, et pretium lorem porttitor eget. Nullam id lectus in lacus convallis scelerisque. Vivamus tincidunt ex diam, a fermentum mi imperdiet vitae.'"
              />
            </div>
            <div class="[ columns medium-10 ] [ mb-50-20 ]">
              <ExperienceBlock
                :heading="'Development Team Leader'"
                :job-title="'Sixth Story, Birmingham'"
                :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin tincidunt pharetra. Vivamus laoreet auctor est, et pretium lorem porttitor eget. Nullam id lectus in lacus convallis scelerisque. Vivamus tincidunt ex diam, a fermentum mi imperdiet vitae.'"
              />
            </div>
          </div>
          <div class="row">
            <div class="[ columns medium-10 ] [ mb-50-20 ]">
              <ExperienceBlock
                :heading="'Web Developer'"
                :job-title="'Six, Leicester | Current Position'"
                :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin tincidunt pharetra. Vivamus laoreet auctor est, et pretium lorem porttitor eget. Nullam id lectus in lacus convallis scelerisque. Vivamus tincidunt ex diam, a fermentum mi imperdiet vitae.'"
              />
            </div>
            <div class="[ columns medium-10 ] [ mb-50-20 ]">
              <ExperienceBlock
                :heading="'Junior Web Developer'"
                :job-title="'Class Creative, Birmingham'"
                :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin tincidunt pharetra. Vivamus laoreet auctor est, et pretium lorem porttitor eget. Nullam id lectus in lacus convallis scelerisque. Vivamus tincidunt ex diam, a fermentum mi imperdiet vitae.'"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="l-Offering">
        <div
          class="l-Offering__cursor-trigger"
          @mouseover="toggleMouseWhite(true)"
          @mouseleave="toggleMouseWhite(false)"
        />
        <div class="l-Offering__back-panel">
          <marquee-text
            v-for="(speed, index) in speeds"
            :key="`marquee-${index}`"
            :repeat="10"
            :duration="speed"
          >
            <p class="[ f-heading-98-34 ] [ u-color-white ]">
              What I can offer you.
            </p>
          </marquee-text>
        </div>
        <div class="l-Offering__gradient" />
        <div class="l-Offering__gradient" />
        <div
          class="l-Offering__top-panel"
          @mouseover="toggleMouseWhite(false)"
        >
          <div class="l-Offering__top-panel-inner">
            <p class="[ l-Offering__main-txt ] [ f-light-62-46 ]">
              Web development with cutting edge technoligies. I build websites; good ones, not shit ones.<br><br>High end design coupled with lightning fast code is what you’ll get.<br><br>Ecommerce platforms, brochure websites and landing pages that get you the street cred you’ve been craving.<br><br>High fancyness = high prices £££
            </p>
          </div>
        </div>
      </section>

      <section class="l-WorkSamples">
        <div class="container">
          <div class="row">
            <div class="columns">
              <div class="l-WorkSamples__txt">
                <div class="l-WorkSamples__txt-top">
                  <p class="l-WorkSamples__words">
                    Work samples
                  </p>
                  <div class="l-WorkSamples__line" />
                </div>
                <p class="l-WorkSamples__words">
                  available upon request.
                </p>
                <div class="l-WorkSamples__link">
                  <LineLink link="mailto:ollie@stevenson.digital" link-text="Request now" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Header from '~/components/Header'
import ExperienceBlock from '~/components/ExperienceBlock'
import LineLink from '~/components/LineLink'
import toggleMouseWhite from '~/mixins/utility'

export default {
  components: {
    Header,
    ExperienceBlock,
    LineLink
  },
  mixins: [
    toggleMouseWhite
  ],
  data() {
    return {
      speeds: [12, 9, 15, 12, 7, 10, 13, 15, 10, 15, 12]
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';

// Experience Section
.l-Experience {
  background-color: $c-black;
}

.l-Experience__h2 {
  @include v-spacing(margin-bottom, 30px, 60px);
}

// Offering Section
.l-Offering {
  position: relative;
  background-color: $c-black;
  margin-top: -1px;
}

.l-Offering__back-panel {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  overflow-x: hidden;
}

.l-Offering__gradient {
  // There are 2 of these to create a more gradual fade
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 600px;
  z-index: 1;
  background: -moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(255,255,255,1) 75%, rgba(255,255,255,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 75%,rgba(255,255,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 75%,rgba(255,255,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}

.l-Offering__cursor-trigger {
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  @include v-spacing(height, 90px, 180px); // Must match '.l-Offering__top-panel' padding-top
}

.l-Offering__top-panel {
  position: relative;
  z-index: 2;
  @include v-spacing(padding-top, 90px, 180px);
}

.l-Offering__top-panel-inner {
  width: calc(100% - (#{$container-padding} * 4));
  margin-left: $container-padding;
  background-color: $c-white;
  padding: 80px $container-padding;
}

// Work Samples Section
.l-WorkSamples {
  background-color: $c-white;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.l-WorkSamples__txt-top {
  display: flex;
  align-items: center;
}

.l-WorkSamples__words {
  font-size: 6.35vw;
  line-height: 1.17;
  font-family: $f-heading;
}

.l-WorkSamples__line {
  height: 5px;
  background-color: black;
  flex: 1;
  margin-left: 60px;
  margin-top: 45px;
}

.l-WorkSamples__link {
  display: block;
  margin-top: 60px;
}
</style>
