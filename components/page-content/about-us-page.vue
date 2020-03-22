<template>
  <div class="about-us-page">
    <hero-primary
      :heading="pageData.hero_heading"
      :text="pageData.hero_text"
      :imageUrl="pageData.hero_image.url"
      :imageAlt="pageData.hero_image.alt"
    />
    <aboutUsBody :data="pageData.body" />
  </div>
</template>

<script>
import heroPrimary from '~/components/hero/hero-primary';
import aboutUsBody from '~/components/about-us/about-us-body';

export default {
  props: {
    pageData: {
      type: Object,
      default: () => {},
    }
  },

  components: {
    heroPrimary,
    aboutUsBody
  }
}
</script>

<style>

</style>