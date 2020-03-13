<template>
  <div class="partners">
    <div class="container">
      <header class="parters__header">
        <prismic-rich-text :field="heading"/>
      </header>
    </div>
  </div>
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