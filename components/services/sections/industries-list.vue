<template>
  <div class="industries-list">
    <div class="container">
      <header class="industries-list">
        <prismic-rich-text :field="heading" />
      </header>
      <div class="industries-list__blocks">
        <div
          v-for="(block, index) in blocks"
          :key="index"
        >
          {{ block.industries }}
        </div>
      </div>
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
    blocks: {
      type: Array,
      default: () => []
    }
  },
}
</script>