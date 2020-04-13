<template>
  <div class="career-page">
    <careerHero
      :heading="pageData.hero_title"
      :text="pageData.hero_text"
    />
    <careerTabs :tabs="pageData.career_tab" />
  </div>
</template>

<script>
import careerHero from '~/components/career/career-hero';
import careerTabs from '~/components/career/components/career-tabs';

export default {
  props: {
    pageData: {
      type: Object,
      default: () => {},
    }
  },

  components: {
    careerHero,
    careerTabs
  }
}
</script>

<style>

</style>