<template>
  <div class="home-page">
    <hero-primary
      :heading="pageData.hero_heading"
      :text="pageData.hero_text"
      :imageUrl="pageData.hero_image.url"
      :imageAlt="pageData.hero_image.alt"
      :buttons="pageData.hero_buttons"
    />
  </div>
</template>

<script>
import heroPrimary from '~/components/hero/hero-primary';

export default {
  props: {
    pageData: {
      type: Object,
      default: () => {},
    }
  },

  mounted() {
    console.log(this.pageData, 'hp')
  },

  components: {
    heroPrimary
  }
}
</script>

<style>

</style>