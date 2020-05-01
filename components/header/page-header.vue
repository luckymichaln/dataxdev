<template>
  <header :class="pageHeaderClass">
    <div class="container page-header__wrapper">
      <nuxt-link
        :to="{ name: 'index' }"
        class="page-header__logo"
      >
        <img :src="headerData.logo.url" alt="DataX" />
      </nuxt-link>
      <pageHeaderNav :navList="headerData.body" />
      <button
        class="button button--red button--solid button--menu"
        @click="openMobileMenu(true)"
      >Menu</button>
      <x-button
        :button="headerData.button[0]"
        @click.native="openModal(true)"
      />
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import xButton from '~/components/x-button';
import pageHeaderNav from '~/components/header/page-header-nav';

export default {
  props: {
    headerData: {
      type: Object,
      default: () => {},
    },
    navTop: Boolean,
    navDown: Boolean,
  },

  computed: {
    ...mapState('ui', ['mobileMenuOpened']),
    pageHeaderClass() {
      return {
        'page-header': true,
        'page-header--hidden': this.pageDown,
        'page-header--visible': this.pageTop,
      }
    }
  },

  methods: {
    openModal(open) {
      this.$store.commit('ui/SET_MODAL_OPEN', { modalOpened: open, name: 'contact' });
    },

    openMobileMenu(open) {
      this.$store.commit('ui/SET_MOBILE_MENU_OPEN', { mobileMenuOpened: open });
    }
  },

  components: {
    xButton,
    pageHeaderNav
  }
}
</script>