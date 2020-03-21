<template>
  <div class="mighty-wrapper">
    <!-- <pageHeader :headerData="headerData" /> -->
    <transition name="fade">
      <nuxt />
    </transition>
    <pageFooter :footerData="footerData" />
    <!-- <script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script> <div class="clutch-widget" data-url="https://widget.clutch.co" data-widget-type="4" data-expandifr="true" data-height="auto" data-snippets="true" data-clutchcompany-id="466679"></div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import pageHeader from '../components/header/page-header';
import pageFooter from '../components/footer/page-footer';

export default {
  computed: {
    ...mapState('header', ['headerData']),
    ...mapState('footer', ['footerData']),
  },

  components: {
    pageHeader,
    pageFooter
  }
}
</script>
