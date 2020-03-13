<template>
  <div class="cta-section">
    <div class="container">
      <prismic-rich-text
        :field="heading"
        class="cta-section__heading"
      />
      <prismic-rich-text
        :field="text"
        class="cta-section__text"
      />
      <x-button :button="button" />
    </div>
    <img
      src="~/assets/static/images/components/outsourcing.svg"
      alt="Outsourcing DataX Dev"
    />
  </div>
</template>

<script>
import xButton from "~/components/x-button";

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
    button: {
      type: Object,
      default: () => {}
    }
  },

  components: {
    xButton
  }
}
</script>

<style>

</style>