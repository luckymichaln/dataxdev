<template>
  <careerPage :pageData="careerPageData" />
</template>

<script>
import { mapGetters } from 'vuex';
import careerPage from '~/components/page-content/career-page';

export default {
  async fetch ({ store }) {
    if (!store.getters['pages/careerPageData']) {
      await store.dispatch('pages/GET_SINGLE_PAGE_DATA', { pageType: 'career' })
    }
  },

  computed: {
    ...mapGetters('pages', ['careerPageData']),
  },

  mounted() {
    console.log(this.careerPageData, 'careerPageData')
  },

  components: {
    careerPage
  }
}
</script>

<style>

</style>