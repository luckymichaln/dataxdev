<template>
  <section class="career-hero">
    <div class="container">
      <header class="career-hero__header">
        <prismic-rich-text
          :field="heading"
          class="heading-primary text--center"
        />
        <prismic-rich-text
          :field="text"
          class="header-text text text--center"
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
    },
    text: {
      type: Array,
      default: () => []
    },
  }
}
</script>

<style>

</style>