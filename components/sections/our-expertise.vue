<template>
  <section class="our-expertise">
    <div class="container">
      <header class="our-expertise__header">
        <prismic-rich-text
          :field="heading"
          class="header-heading heading-secondary text--center"
        />
        <prismic-rich-text
          :field="text"
          class="header-text text text--center"
        />
      </header>
      <div class="our-expertise__main">
        <div
          v-for="(col, index) in cols"
          :key="index"
          class="our-expertise__col"
        >
          <div class="col-image">
            <img
              :src="col.column_image.url"
              :srcset="`${col.column_image.url} 1x, ${col.column_image.url} 2x`"
              :alt="col.column_image.alt"
            />
          </div>
          <prismic-rich-text
            :field="col.column_heading"
            class="col-heading"
          />
          <p class="col-text text">{{ col.column_text }}</p>
        </div>
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
    cols: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>