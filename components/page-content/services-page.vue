<template>
  <div :class="pageClass(pageData.page_theme, pageData.content_name)">
    <servicesHero
      :heading="pageData.hero_heading"
      :text="pageData.hero_text"
      :image="pageData.hero_image"
      :theme="pageData.page_theme"
      :pageType="pageData.content_name"
    />
    <servicesBody :data="pageData.body" />
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
    pageClass(theme, type) {
      return {
        'services-page': true,
        'services-page--red': theme.toLowerCase() === 'red',
        'services-page--green': theme.toLowerCase() === 'green',
        'services-page--blue': theme.toLowerCase() === 'blue',
        'services-page--yellow': theme.toLowerCase() === 'yellow',
        'services-page--ios': type.toLowerCase().split(' ')[0]  === 'ios',
        'services-page--dotnet': type.toLowerCase().split(' ')[0]  === '.net',
        'services-page--android': type.toLowerCase().split(' ')[0]  === 'android',
        'services-page--java': type.toLowerCase().split(' ')[0]  === 'java',
      }
    }
  },

  components: {
    servicesHero,
    servicesBody
  }
}
</script>