<template>
  <header class="page-header">
    <div class="container page-header__wrapper">
      <nuxt-link
        :to="{ name: 'index' }"
        class="page-header__logo"
      >
        <img :src="headerData.logo.url" alt="DataX" />
      </nuxt-link>
      <pageHeaderNav :navList="headerData.body" />
      <x-button :button="headerData.button[0]" />
    </div>
  </header>
</template>

<script>
import xButton from '~/components/x-button';
import pageHeaderNav from '~/components/header/page-header-nav';

export default {
  props: {
    headerData: {
      type: Object,
      default: () => {},
    }
  },

  components: {
    xButton,
    pageHeaderNav
  }
}
</script>