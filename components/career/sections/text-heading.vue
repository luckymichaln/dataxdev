<template>
  <div class="text-heading">
    <div class="container">
      <prismic-rich-text
        :field="heading"
        class="heading-3 text--center"
      />
      <prismic-rich-text
        :field="text"
        class="text text--center"
      />
    </div>
  </div>
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
    }
  }
}
</script>

<style>

</style>