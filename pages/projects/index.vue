<template>
  <projectPage :pageData="projectsPageData" />
</template>

<script>
import { mapGetters } from 'vuex';
import projectPage from '~/components/page-content/projects-page';

export default {
  async fetch ({ store }) {
    if (!store.getters['pages/projectsPageData']) {
      await store.dispatch('pages/GET_SINGLE_PAGE_DATA', { pageType: 'projects_page' })
    }
  },

  computed: {
    ...mapGetters('pages', ['projectsPageData']),
  },

  mounted() {
    console.log(this.projectsPageData, 'projectsPageData')
  },

  components: {
    projectPage
  }
}
</script>

<style>

</style>