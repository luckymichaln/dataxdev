<template>
  <div class="services-body">
    <section
      v-for="(section, index) in data"
      :key="index"
      class="services-body__section"
    >
      <featuresList
        v-if="section.slice_type === 'features_list'"
        :list="section.primary.features_list"
      />
      <sectionWithText
        v-if="section.slice_type === 'section_with_text'"
        :text="section.primary"
        :image="section.items[0].section_image"
      />
      <industriesList
        v-if="section.slice_type === 'industries_list'"
        :heading="section.primary.section_title"
        :cards="section.items"
      />
      <partners
        v-if="section.slice_type === 'partners_slider'"
        :heading="section.primary.section_title"
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
import partners from '~/components/services/sections/partners';
import ctaSection from '~/components/services/sections/cta-section';
import somethingElse from '~/components/services/sections/something-else';

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  components: {
    featuresList,
    sectionWithText,
    industriesList,
    partners,
    ctaSection,
    somethingElse
  }
}
</script>

<style>

</style>