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
    <!-- <testimonialsSlider
      :heading="pageData.testimonials_heading"
    /> -->
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
  props: {
    pageData: {
      type: Object,
      default: () => {},
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