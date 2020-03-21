<template>
  <section class="contact-us">
    <div class="container">
      <div class="contact-us__wrapper">
        <div class="contact-us__info">
          <prismic-rich-text
            :field="heading"
            class="info-heading heading-secondary"
          />
          <p class="info-text text">{{ text }}</p>
          <xButton
            v-for="(button, index) in buttons"
            :key="index"
            :button="button"
          />
        </div>
        <div class="contact-us__image">
          <img
            src="~assets/static/images/components/contact-us.svg"
            alt="Contact us"
          />
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
    buttons: {
      type: Array,
      default: () => []
    }
  },

  components: {
    xButton
  }
}
</script>

<style>

</style>