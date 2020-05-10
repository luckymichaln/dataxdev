<template>
  <div class="about-us-body">
    <section
      v-for="(section, index) in data"
      :key="index"
      class="about-us-body__section"
    >
      <numbers
        v-if="section.slice_type === 'bricks_section'"
        :bricks="section.items"
      />
      <sectionWithText
        v-if="section.slice_type === 'info_section'"
        :text="section.primary"
        :images="section.items"
      />
      <featuresList
        v-if="section.slice_type === 'key_features'"
        :list="section.items"
        :heading="section.primary.section_title"
        :text="section.primary.section_text"
      />
      <quoteAccent
          v-if="section.slice_type === 'quote_accent'"
          :quote="section.primary.section_quote"
          :text="section.primary.section_text"
      />
      <contactUs
        v-if="section.slice_type === 'contact_banner'"
        framed
        :heading="section.primary.banner_title"
        :text="section.primary.banner_text"
        :buttons="[{
          button_label: section.primary.button_label,
          button_theme: section.primary.button_theme,
          button_url: section.primary.button_url,
          button_style: section.primary.button_style,
        }]"
      />
    </section>
  </div>
</template>

<script>
import numbers from '~/components/sections/numbers';
import featuresList from '~/components/services/sections/features-list';
import sectionWithText from '~/components/services/sections/section-with-text';
import quoteAccent from '~/components/sections/quote-accent';
import contactUs from '~/components/sections/contact-us';

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  components: {
    numbers,
    featuresList,
    sectionWithText,
    quoteAccent,
    contactUs
  }
}
</script>
