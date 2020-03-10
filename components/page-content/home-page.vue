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
  </div>
</template>

<script>
import heroPrimary from '~/components/hero/hero-primary';
import techSlider from '~/components/sliders/tech-slider';
import ourExpertise from '~/components/sections/our-expertise';
import provider from '~/components/sections/provider';

export default {
  props: {
    pageData: {
      type: Object,
      default: () => {},
    }
  },

  mounted() {
    console.log(this.pageData, 'hp')
  },

  components: {
    heroPrimary,
    techSlider,
    ourExpertise,
    provider
  }
}
</script>

<style>

</style>