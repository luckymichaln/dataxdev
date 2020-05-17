<template>
  <div class="services-body">
    <section
      v-for="(section, index) in data"
      :key="index"
      class="services-body__section"
    >
      <featuresList
        v-if="section.slice_type === 'features_list'"
        :list="section.items"
      />
      <sectionWithText
        v-if="section.slice_type === 'section_with_text'"
        :text="section.primary"
        :images="section.items"
      />
      <industriesList
        v-if="section.slice_type === 'industries_list'"
        :heading="section.primary.section_title"
        :cards="section.items"
      />
      <testimonialsSlider
        v-if="section.slice_type === 'partners_slider'"
        :slides="section.items"
        :heading="section.primary.testimonials_heading"
      />
      <ctaSection
        v-if="section.slice_type === 'cta_section'"
        :heading="section.primary.section_title"
        :text="section.primary.section_text"
        :button="{
          button_label: section.primary.button_label,
          button_style: section.primary.button_style,
          button_theme: section.primary.button_theme,
        }"
      />
      <somethingElse
        v-if="section.slice_type === 'something_else'"
        :heading="section.primary.section_title"
        :text="section.primary.section_text"
        :list="section.items"
      />
    </section>
  </div>
</template>

<script>
import featuresList from '~/components/services/sections/features-list';
import sectionWithText from '~/components/services/sections/section-with-text';
import industriesList from '~/components/services/sections/industries-list';
import ctaSection from '~/components/services/sections/cta-section';
import somethingElse from '~/components/services/sections/something-else';
import testimonialsSlider from '~/components/sliders/testimonials-slider';

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  mounted() {
    console.log(this.data)
  },

  components: {
    featuresList,
    sectionWithText,
    industriesList,
    ctaSection,
    somethingElse,
    testimonialsSlider,
  }
}
</script>

<style>

</style>