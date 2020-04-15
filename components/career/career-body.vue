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

    </section>
  </div>
</template>

<script>
import textHeading from '~/components/career/sections/text-heading';
import imagesGrid from '~/components/career/sections/images-grid';
import recruitmentProcess from '~/components/career/sections/recruitment-process';


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
  }
}
</script>

<style>

</style>