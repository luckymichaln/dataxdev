<template>
  <div class="mighty-wrapper">
    <pageHeader
      v-if="headerData"
      :headerData="headerData"
    />
    <transition name="fade" mode="out-in">
      <nuxt />
    </transition>
    <pageFooter
      v-if="footerData"
      :footerData="footerData"
    />
    <transition name="modal" mode="out-in">
      <modalContact v-if="modalOpened.contact" />
      <modalProject v-if="modalOpened.project" :project="activeModalProject" />
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import pageHeader from '../components/header/page-header';
import pageFooter from '../components/footer/page-footer';
import modalContact from '../components/modals/modal-contact';
import modalProject from '../components/modals/modal-project';

export default {
  computed: {
    ...mapState('header', ['headerData']),
    ...mapState('footer', ['footerData']),
    ...mapState('ui', ['modalOpened']),
    ...mapGetters('pages', ['activeModalProject']),
  },

  data() {
    return {
      savedScroll: 0,
      triggerDownValue: 81,
      triggerUpValue: 2,
    }
  },

  async created () {
    await this.$store.dispatch('header/GET_HEADER_DATA');
    await this.$store.dispatch('footer/GET_FOOTER_DATA');

    if (!this.projects) {
      await this.$store.dispatch('pages/GET_SINGLE_PAGE_DATA', { pageType: 'projects_page' })
    }
  },

  mounted() {
    document.addEventListener('scroll', this.stickyNav);
  },

  methods: {
    stickyNav() {
      const body = document.getElementsByClassName('mighty-wrapper')[0];
      const header = document.getElementsByClassName('page-header')[0]
      const sT = window.pageYOffset || document.documentElement.scrollTop;

      if (window.pageYOffset > this.triggerDownValue) {

        if (!body.classList.contains('stamp-top') && !header.classList.contains('page-header--sticky')) {
          body.classList.add('stamp-top');
          header.classList.add('page-header--sticky');

          setTimeout(function () {
            header.classList.add('page-header--ready');
          }, 10)
        }

        if (sT > this.savedScroll) {
          header.classList.remove('page-header--visible');
        } else {
          header.classList.add('page-header--visible');
        }

      } if (window.pageYOffset <= this.triggerUpValue) {
        body.classList.remove('stamp-top');
        header.classList.remove('page-header--sticky', 'page-header--ready');
      }

      this.savedScroll = sT <= 0 ? 0 : sT;
    }
  },

  components: {
    pageHeader,
    pageFooter,
    modalContact,
    modalProject
  }
}
</script>
