<template>
  <section class="hero hero-primary">
    <div class="container">
      <div class="hero__wrapper">
        <div class="hero__text">
          <prismic-rich-text
            class="hero-heading heading-primary"
            :field="heading"
          />
          <prismic-rich-text
            class="hero-text text"
            :field="text"
          />
          <div class="hero__actions">
            <x-button
              v-for="(b, i) in buttons"
              :key="i"
              :button="b"
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

  components: {
    xButton
  }
}
</script>

<style>

</style>