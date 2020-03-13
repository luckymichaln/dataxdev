<template>
  <div class="section-with-text">
    <div class="container">
      <div :class="innerClass(text.text_position)">
        <div class="section-with-text__col col--text">
          <prismic-rich-text
            :field="text.section_title"
            class="col--text__heading"
          />
          <prismic-rich-text
            :field="text.section_text"
            class="col--text__text"
          />
        </div>
        <div class="section-with-text__col col--image">
          <div class="col--text__image">
            <img
              :src="image.url"
              :alt="image.alt"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: Object,
      default: () => {}
    },
    image: {
      type: Object,
      default: () => {}
    }
  },

  methods: {
    innerClass(textPosition) {
      return {
        'section-with-text__inner': true,
        'section-with-text__inner--text-left': textPosition === 'left',
        'section-with-text__inner--text-right': textPosition === 'right',
      }
    }
  }
}
</script>

<style>

</style>