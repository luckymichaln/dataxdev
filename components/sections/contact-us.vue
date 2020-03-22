<template>
  <section :class="contactUsClass()">
    <div class="container">
      <div class="contact-us__wrapper">
        <div class="contact-us__info">
          <prismic-rich-text
            :field="heading"
            class="info-heading heading-secondary"
          />
          <prismic-rich-text
            v-if="typeof text === 'object'"
            :field="text"
            class="info-text text"
          />
          <p
            v-else
            class="info-text text"
          >
            {{ text }}
          </p>
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
    text: [String, Array],
    buttons: {
      type: Array,
      default: () => []
    },
    framed: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    contactUsClass() {
      return {
        'contact-us': true,
        'contact-us--framed': this.framed,
      }
    }
  },

  components: {
    xButton
  }
}
</script>

<style>

</style>