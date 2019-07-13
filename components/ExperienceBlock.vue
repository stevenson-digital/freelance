<template>
  <div class="c-ExperienceBlock">
    <h3 class="c-ExperienceBlock__h3 f-heading-36-28">
      {{ heading }}
    </h3>
    <p class="c-ExperienceBlock__job f-light-22-18">
      {{ jobTitle }}
    </p>
    <p class="c-ExperienceBlock__txt">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true
    },
    jobTitle: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';

/* ===========================
  Block
=========================== */
.c-ExperienceBlock {
  // max-width: 75%;
}

/* ===========================
  Elements
=========================== */
.c-ExperienceBlock__h3 {
  margin-bottom: 12px;
}

.c-ExperienceBlock__job {
  margin-bottom: 10px;
}
</style>
