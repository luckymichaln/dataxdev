<template>
  <div>
    <pageHeader :headerData="headerData" />
    <nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import pageHeader from '../components/header/page-header';

export default {
  computed: {
    ...mapState('nav', ['headerData'])
  },

  components: {
    pageHeader
  }
}
</script>
