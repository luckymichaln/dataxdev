<template>
  <section class="testimonials-slider">
    <div class="container">
      <header class="testimonials-slider__header">
        <prismic-rich-text
          :field="heading"
          class="header-heading"
        />
      </header>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    heading: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>