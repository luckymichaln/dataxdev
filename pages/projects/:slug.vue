<template>
  <projectPageSingle :pageData="projectSinglePageData" />
</template>

<script>
import { mapGetters } from 'vuex';
import projectPageSingle from '~/components/page-content/project-page-single';

export default {
  async fetch ({ store, route }) {
    await store.dispatch('pages/GET_SINGLE_PAGE_DATA', { pageType: 'projects_single', uid: route.params.slug })
  },

  beforeRouteUpdate (to, from, next) {
    this.$store.dispatch('pages/GET_SINGLE_PAGE_DATA', { pageType: 'projects_single', uid: to.params.slug })
    next()
  },

  computed: {
    ...mapGetters('pages', ['projectSinglePageData']),
  },

  components: {
    projectPageSingle
  }
}
</script>
