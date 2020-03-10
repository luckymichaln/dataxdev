<template>
  <section class="provider">
    <div class="container">
      <div class="provider__wrapper">
        <div class="provider__image">
          <img
            src="~assets/static/images/components/trustpilot_badge.png"
            srcset="~assets/static/images/components/trustpilot_badge.png 1x, ~assets/static/images/components/trustpilot_badge@2x.png 2x"
            alt="Trustpilot badge"
          />
        </div>
        <div class="provider__info">
          <prismic-rich-text
            :field="heading"
            class="info-heading heading heading-3"
          />
          <p class="info-text">{{ text }}</p>
          <x-button :button="button" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import xButton from '~/components/x-button';

export default {
  props: {
    heading: {
      type: Array,
      default: () => []
    },
    text: String,
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