<template>
  <div>
    <Header />
    <main>
      <section class="l-Experience pt-110-50 pb-110-50 u-color-white">
        <div class="container">
          <div class="row">
            <div class="columns medium-10">
              <h2 class="l-Experience__h2 f-heading-98-46">
                Through the ranks.
              </h2>
              <p class="mb-110-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin tincidunt pharetra. Vivamus laoreet auctor est, et pretium lorem porttitor eget. Nullam id lectus in lacus convallis scelerisque. Vivamus tincidunt ex diam, a fermentum mi imperdiet vitae. Nullam ut diam quis diam molestie ornare nec ut felis. Proin pulvinar risus augue, ut accumsan lorem pretium et.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="columns medium-8 mb-50-20">
              <ExperienceBlock
                :heading="'Web Developer'"
                :job-title="'Six, Leicester | Current Position'"
                :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin tincidunt pharetra. Vivamus laoreet auctor est, et pretium lorem porttitor eget. Nullam id lectus in lacus convallis scelerisque. Vivamus tincidunt ex diam, a fermentum mi imperdiet vitae.'"
              />
            </div>
            <div class="columns medium-8 medium-offset-2 mb-50-20">
              <ExperienceBlock
                :heading="'Development Team Leader'"
                :job-title="'Sixth Story, Birmingham'"
                :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin tincidunt pharetra. Vivamus laoreet auctor est, et pretium lorem porttitor eget. Nullam id lectus in lacus convallis scelerisque. Vivamus tincidunt ex diam, a fermentum mi imperdiet vitae.'"
              />
            </div>
          </div>
          <div class="row">
            <div class="columns medium-8 mb-50-20">
              <ExperienceBlock
                :heading="'Web Developer'"
                :job-title="'Six, Leicester | Current Position'"
                :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin tincidunt pharetra. Vivamus laoreet auctor est, et pretium lorem porttitor eget. Nullam id lectus in lacus convallis scelerisque. Vivamus tincidunt ex diam, a fermentum mi imperdiet vitae.'"
              />
            </div>
            <div class="columns medium-8 medium-offset-2 mb-50-20">
              <ExperienceBlock
                :heading="'Junior Web Developer'"
                :job-title="'Class Creative, Birmingham'"
                :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin tincidunt pharetra. Vivamus laoreet auctor est, et pretium lorem porttitor eget. Nullam id lectus in lacus convallis scelerisque. Vivamus tincidunt ex diam, a fermentum mi imperdiet vitae.'"
              />
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

export default {
  components: {
    Header,
    ExperienceBlock
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';

.l-Experience {
  background-color: $c-black;
}

.l-Experience__h2 {
  @include v-spacing(margin-bottom, 30px, 60px);
}
</style>
