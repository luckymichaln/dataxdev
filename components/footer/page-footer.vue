<template>
  <footer class="page-footer">
    <div class="container">
      <pageFooterColumns :columns="footerData.body" />
      <div class="page-footer__row">
        <div class="row-col">
          <nuxt-link
            :to="{ name: 'index' }"
            class="page-footer__logo"
          >
            <img :src="footerData.logo.url" alt="DataX" />
          </nuxt-link>
        </div>
        <div class="row-col">
          <div class="col-links">
            <prismic-link
              v-for="el in footerData.footer_link"
              :key="el.link_label"
              :field="el.link_url">
              {{ el.link_label }}
            </prismic-link>
          </div>
          <p class="col-copy">{{ footerData.copyrights }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import pageFooterColumns from '~/components/footer/page-footer-columns';
export default {
  props: {
    footerData: {
      type: Object,
      default: () => {},
    }
  },

  components: {
    pageFooterColumns
  }
}
</script>
<style>

</style>