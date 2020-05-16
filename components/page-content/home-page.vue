<template>
  <div class="home-page">
    <hero-primary
      :heading="pageData.hero_heading"
      :text="pageData.hero_text"
      :imageUrl="pageData.hero_image.url"
      :imageAlt="pageData.hero_image.alt"
      :buttons="pageData.hero_buttons"
    />
    <tech-slider
      :heading="pageData.tech_carousel_title"
      :slides="pageData.tech_carousel"
    />
    <our-expertise
      :heading="pageData.expertise_heading"
      :text="pageData.expertise_text"
      :cols="pageData.expertise_column"
    />
    <provider
      :heading="pageData.provider_badge[0].badge_heading"
      :text="pageData.provider_badge[0].badge_text"
      :button="{
        button_label: pageData.provider_badge[0].button_label,
        button_url: pageData.provider_badge[0].button_url,
        button_theme: pageData.provider_badge[0].button_theme,
        button_style: pageData.provider_badge[0].button_style,
      }"
    />
    <projects-grid
      :heading="pageData.project_heading"
      :text="pageData.project_text"
      :nav="pageData.projects_tag_list"
      :bricks="pageData.projects_links"
    />
    <numbers
      :heading="pageData.numbers_heading"
      :bricks="pageData.numbers_brick"
    />
    <testimonialsSlider
      :heading="pageData.testimonials_heading"
      :slides="pageData.slide"
      :options="sliderOptions"
      :swiperKey="sliderKey"
    />
    <clients
      :logos="pageData.clients"
    />
    <contactUs
      :heading="pageData.pre_footer_heading"
      :text="pageData.pre_footer_text"
      :buttons="pageData.pre_footer_button"
    />
  </div>
</template>

<script>
import heroPrimary from '~/components/hero/hero-primary';
import techSlider from '~/components/sliders/tech-slider';
import ourExpertise from '~/components/sections/our-expertise';
import provider from '~/components/sections/provider';
import projectsGrid from '~/components/sections/projects-grid';
import numbers from '~/components/sections/numbers';
import testimonialsSlider from '~/components/sliders/testimonials-slider';
import clients from '~/components/sections/clients';
import contactUs from '~/components/sections/contact-us';

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
    pageData: {
      type: Object,
      default: () => {},
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

  watch: {
    $route(to, from) {
      this.openModal(false);
    }
  },

  components: {
    heroPrimary,
    techSlider,
    ourExpertise,
    provider,
    projectsGrid,
    numbers,
    testimonialsSlider,
    clients,
    contactUs
  }
}
</script>

<style>

</style>