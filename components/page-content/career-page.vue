<template>
  <div class="career-page">
    <careerHero
      :heading="pageData.hero_title"
      :text="pageData.hero_text"
    />
    <careerTabs :tabs="pageData.career_tab" />
    <careerBody :data="pageData.body" />
  </div>
</template>

<script>
import careerHero from '~/components/career/career-hero';
import careerBody from '~/components/career/career-body';
import careerTabs from '~/components/career/sections/career-tabs';

export default {
  props: {
    pageData: {
      type: Object,
      default: () => {},
    }
  },

  components: {
    careerHero,
    careerBody,
    careerTabs
  }
}
</script>

<style>

</style>