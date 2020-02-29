<template>
  <homePage :pageData="pageData" />
</template>

<script>
import homePage from '~/components/page-content/home-page';

export default {
  props: {
    pageData: {
      type: Object,
      default: () => {},
    }
  },

  components: {
    homePage
  }
}
</script>

<style>

</style>