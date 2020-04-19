<template>
  <div class="career-body">
    <section
      v-for="(section, index) in data"
      :key="index"
      class="career-body__section"
    >
      <textHeading
        v-if="section.slice_type === 'text_cta'"
        :heading="section.primary.section_title"
        :text="section.primary.section_text"
      />
      <imagesGrid
        v-if="section.slice_type === 'images_grid'"
        :images="section.items"
      />
      <recruitmentProcess
        v-if="section.slice_type === 'process'"
        :heading="section.primary.section_title"
        :cols="section.items"
      />
      <sectionWithText
        v-if="section.slice_type === 'info_section1'"
        headingBig
        :text="section.primary"
        :images="section.items"
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
import textHeading from '~/components/career/sections/text-heading';
import imagesGrid from '~/components/career/sections/images-grid';
import recruitmentProcess from '~/components/career/sections/recruitment-process';
import sectionWithText from '~/components/services/sections/section-with-text';
import contactUs from '~/components/sections/contact-us';


export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  mounted() {
    console.log(this.data, 'career body')
  },

  components: {
    textHeading,
    imagesGrid,
    recruitmentProcess,
    sectionWithText,
    contactUs,
  }
}
</script>

<style>

</style>