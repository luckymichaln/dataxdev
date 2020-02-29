<template>
  <homePage :pageData="homePageData" />
</template>

<script>
import { mapGetters } from 'vuex';
import homePage from '~/pages/home-page';

export default {
  async fetch ({ store }) {
    if (!store.getters['pages/homePageData']) {
      await store.dispatch('pages/GET_SINGLE_PAGE_DATA', { pageType: 'home_page' })
    }
  },

  computed: {
    ...mapGetters('pages', ['homePageData']),
  },

  mounted() {
    console.log(this.homePageData, 'homePageData')
  },

  components: {
    homePage
  }
}
</script>
