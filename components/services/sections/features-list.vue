<template>
  <div class="features-list">
    <div class="container">
        <prismic-rich-text
          :field="list"
          class="features-list__content"
        />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>