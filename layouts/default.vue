<template>
  <div>
    <pageNav :navData="navData" />
    <nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import pageNav from '../components/nav/page-nav';

export default {
  computed: {
    ...mapState('nav', ['navData'])
  },

  components: {
    pageNav
  }
}
</script>
