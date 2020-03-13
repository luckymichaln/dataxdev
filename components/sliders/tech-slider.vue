<template>
  <section class="tech-slider">
    <div class="container tech-slider__wrapper">
      <header
        v-if="heading"
        class="tech-slider__header"
      >
        <prismic-rich-text class="header-heading" :field="heading"/>
      </header>
      <div class="tech-slider__main">
        <div class="main-wrapper">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="tech-slider__slide"
          >
            <div class="slide-image">
              <img
                :src="slide.tech_logo.url"
                :srcset="`${slide.tech_logo.url} 1x, ${slide.tech_logo.url} 2x`"
                :alt="slide.tech_logo.alt"
              />
            </div>
            <p class="slide-label">{{ slide.tech_label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    heading: {
      type: Array,
      default: () => []
    },
    slides: {
      type: Array,
      default: () => []
    },
  }
}
</script>
