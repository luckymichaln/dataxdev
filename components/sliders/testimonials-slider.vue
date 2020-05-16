 class="slide-raiting"<template>
  <section class="testimonials-slider">
    <div class="container">
      <header class="testimonials-slider__header">
        <prismic-rich-text
          :field="heading"
          class="header-heading heading-secondary"
        />
        <button class="swiper-button swiper-button-prev" slot="button-prev">
          <img
            src="~assets/static/icons/icon_arrow_slider.svg"
          />
        </button>
        <button class="swiper-button swiper-button-next" slot="button-next">
          <img
            src="~assets/static/icons/icon_arrow_slider.svg"
          />
        </button>
      </header>
      <div class="carousel-wrapper">
        <div
          v-swiper:mySwiper="options"
          :key="swiperKey"
        >
          <div class="swiper-wrapper">
            <div
              v-for="(slide, i) in slides"
              :key="i"
              class="img-wrapper swiper-slide"
            >
              <div class="slide-raiting">
                  <img
                    v-for="(star, i) in Number(slide.clients_raiting)"
                    :key="i"
                    class="raiting-star"
                    src="~assets/static/icons/icon_raiting_star.svg"
                  />
              </div>
              <p class="slide-text">{{ slide.clients_testimonial }}</p>
              <div class="slide-footer">
                <img
                  v-if="slide.clients_avatar.url"
                  :src="slide.clients_avatar.url"
                  :srcset="`${slide.clients_avatar.url} 1x, ${slide.clients_avatar.url} 2x`"
                  class="avatar"
                />
                <img
                  v-else
                  src="~assets/static/icons/icon_clutch.png"
                  srcset="~assets/static/icons/icon_clutch.png 1x, ~assets/static/icons/icon_clutch.png 2x"
                  class="avatar"
                />
                <div class="footer-info">
                  <span class="text--bold">{{ slide.clients_name }}</span>
                  <span>{{ slide.clients_position }}</span>
                </div>
              </div>
            </div>
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

    options: {
      type: Object,
      default: () => {}
    },

    swiperKey: String
  },

  mounted () {
    console.log(this.slides)
  }
}
</script>

<style>

</style>