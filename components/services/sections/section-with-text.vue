<template>
  <div class="section-with-text">
    <div class="container">
      <div :class="innerClass(text.text_position)">
        <div class="section-with-text__col col--text">
          <prismic-rich-text
            :field="text.section_title"
            class="col--text__heading heading-3"
          />
          <prismic-rich-text
            :field="text.section_text"
            class="col--text__text text"
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
      console.log(textPosition)
      return {
        'section-with-text__inner': true,
        'section-with-text__inner--text-left': textPosition.toLowerCase() === 'left',
        'section-with-text__inner--text-right': textPosition.toLowerCase() === 'right',
      }
    }
  }
}
</script>

<style>

</style>