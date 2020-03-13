<template>
  <div :class="pageClass(pageData.page_theme)">
    <servicesHero
      :heading="pageData.hero_heading"
      :text="pageData.hero_text"
      :image="pageData.hero_image"
    />
    <servicesBody :data="pageData.body" />
    <!-- {{pageData}} -->
  </div>
</template>

<script>
import servicesHero from '~/components/services/services-hero';
import servicesBody from '~/components/services/services-body';

export default {
  props: {
    pageData: {
      type: Object,
      default: () => {},
    }
  },

  methods: {
    pageClass(theme) {
      return {
        'services-page': true,
        'services-page--red': theme.toLowerCase() === 'red',
        'services-page--green': theme.toLowerCase() === 'green',
        'services-page--blue': theme.toLowerCase() === 'blue',
        'services-page--yellow': theme.toLowerCase() === 'yellow',
      }
    }
  },

  components: {
    servicesHero,
    servicesBody
  }
}
</script>