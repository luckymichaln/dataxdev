<template>
  <section class="services-hero">
    <div class="container">
      <header class="services-hero__header">
        <prismic-rich-text
          :field="heading"
          class="header-heading"
        />
        <prismic-rich-text
          :field="text"
          class="header-text"
        />
      </header>
      <div class="services-hero__image">
        <img
          :src="image.url"
          :alt="image.alt"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    heading: {
      type: Array,
      default: () => []
    },
    text: {
      type: Array,
      default: () => []
    },
    image: {
      type: Object,
      default: () => {}
    }
  }
}
</script>