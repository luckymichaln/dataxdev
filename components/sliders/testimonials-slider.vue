 <template>
  <section class="testimonials-slider">
    <div class="container">
      <header class="testimonials-slider__header">
        <prismic-rich-text
          :field="heading"
          class="header-heading heading-secondary"
        />
        <nav class="testimonials-slider__nav">
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
        </nav>
      </header>
      <div class="carousel-wrapper">
        <div
          v-swiper:mySwiper="sliderOptions"
          :key="sliderKey"
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
  data() {
    return {
      sliderOptions: {
        slidesPerView: 2.5,
        spaceBetween: 50,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },

      sliderKey: null
    }
  },


  props: {
    heading: {
      type: Array,
      default: () => []
    },

    slides: {
      type: Array,
      default: () => []
    }
  },

  mounted() {
    window.addEventListener("resize", this.myEventHandler);
    this.setSlidersPerView({ width: window.innerWidth })
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.myEventHandler);
  },

  methods: {
    setSlidersPerView({ width }) {
      if (width <= 660) {
        if (this.sliderKey != 'mobile') {
          this.sliderKey = 'mobile'
          this.sliderOptions.slidesPerView = 1.25
          this.sliderOptions.spaceBetween = 20
        }
      } else if (width > 590 && width < 960) {
        if (this.sliderKey != 'tablet') {
          this.sliderKey = 'tablet'
          this.sliderOptions.slidesPerView = 2
          this.sliderOptions.spaceBetween = 35
        }
      } else if (width > 960) {
        if (this.sliderKey != 'destkop') {
          this.sliderKey = 'destkop'
          this.sliderOptions.slidesPerView = 3
          this.sliderOptions.spaceBetween = 50
        }
      }
    },

    myEventHandler(e, startVal) {
      this.setSlidersPerView({ width: startVal ? window.innerWidth : e.target.innerWidth })
    }
  },
}
</script>
