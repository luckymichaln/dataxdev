<template>
  <div class="cta-section">
    <div class="container">
      <prismic-rich-text
        :field="heading"
        class="cta-section__heading heading-3"
      />
      <prismic-rich-text
        :field="text"
        class="cta-section__text text"
      />
      <x-button
        :button="button"
        @click.native="openModal(true)"
      />
    </div>
    <div class="cta-section__image">
      <img
        src="~/assets/static/images/components/outsourcing.svg"
        alt="Outsourcing DataX Dev"
      />
    </div>
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

  methods: {
    openModal(open) {
      this.$store.commit('ui/SET_MODAL_OPEN', { modalOpened: open, name: 'contact' });
    },
  },

  components: {
    xButton
  }
}
</script>

<style>

</style>