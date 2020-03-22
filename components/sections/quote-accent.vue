<template>
  <section class="quote-accent">
    <div class="container">
      <h3 class="quote-accent-heading heading-secondary">{{ quote }}</h3>
      <prismic-rich-text
        :field="text"
        class="quote-accent__text text"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    quote: String,
    text: {
      type: Array,
      default: () => []
    }
  }
}
</script>
