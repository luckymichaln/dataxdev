<template>
  <div class="something-else">
    <div class="container">
      <header class="something-else__header">
        <p class="heading heading-secondary">{{ heading }}</p>
        <prismic-rich-text
          :field="text"
          class="something-else__text text"
        />
      </header>
      <techSlider :slides="list" />
    </div>
  </div>
</template>

<script>
import techSlider from "~/components/sliders/tech-slider";

export default {
  props: {
    heading: String,
    text: {
      type: Array,
      default: () => []
    },
    list: {
      type: Array,
      default: () => []
    }
  },

  components: {
    techSlider
  }
}
</script>

<style>

</style>