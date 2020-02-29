<template>
  <header class="page-header">
    <div class="container">
      <nuxt-link
        :to="{ name: 'index' }"
        class="page-header__logo"
      >
        <img :src="headerData.logo.url" alt="DataX" />
      </nuxt-link>
      <pageHeaderNav :navList="headerData.body" />
      <button class="page-header__button button">
          {{ headerData.far_right_button_text }}
      </button>
    </div>
  </header>
</template>

<script>
import pageHeaderNav from './page-header-nav/page-header-nav';

export default {
  props: {
    headerData: {
      type: Object,
      default: () => {},
    }
  },

  components: {
    pageHeaderNav
  }
}
</script>

<style>

</style>