<template>
  <section class="hero hero-primary">
    <div class="container">
      <div class="hero__wrapper">
        <div class="hero__text">
          <prismic-rich-text
            v-if="heading"
            class="hero-heading heading-primary"
            :field="heading"
          />
          <prismic-rich-text
            v-if="text"
            class="hero-text text"
            :field="text"
          />
          <div
            v-if="buttons"
            class="hero__actions"
          >
            <xButton
              v-for="(b, i) in buttons"
              :key="i"
              :button="b"
              @click.native="openModal(true, b)"
            />
          </div>
        </div>
        <div class="hero__image">
          <img
            :src="imageUrl"
            :alt="imageAlt"
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
    imageUrl: String,
    imageAlt: String,
    heading: [Object, Array],
    text: [Object, Array],
    buttons: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    openModal(open, b) {
      if (b.button_url.link_type === 'Any') {
        this.$store.commit('ui/SET_MODAL_OPEN', { modalOpened: open, name: 'contact'  });
      }
    }
  },

  components: {
    xButton
  }
}
</script>
