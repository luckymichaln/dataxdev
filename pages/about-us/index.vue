<template>
  <aboutUsPage :pageData="aboutPageData" />
</template>

<script>
import { mapGetters } from 'vuex';
import aboutUsPage from '~/components/page-content/about-us-page';

export default {
  async fetch ({ store, route }) {
    if (!store.getters['pages/aboutPageData']) {
      await store.dispatch('pages/GET_SINGLE_PAGE_DATA', { pageType: 'about_us' })
    }
  },

  computed: {
    ...mapGetters('pages', ['aboutPageData']),
  },

  mounted() {
    console.log(this.aboutPageData, 'aboutPageData')
  },

  components: {
    aboutUsPage
  }
}
</script>

<style>

</style>