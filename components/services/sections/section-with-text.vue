<template>
  <div class="section-with-text">
    <div class="container">
      <div :class="innerClass(text.text_position)">
        <div class="section-with-text__col col--text">
          <prismic-rich-text
            :field="text.section_title"
            :class="headingClass()"
          />
          <prismic-rich-text
            ref="textArea"
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
    headingBig: {
      type: Boolean,
      default: false
    },
    text: {
      type: Object,
      default: () => {}
    },
    image: {
      type: Object,
      default: () => {}
    }
  },

  mounted() {
    const target = Array.from(this.$refs.textArea.children);

    if (target) {
      target.forEach((el, i)=> {
        if (el.innerHTML.length && i !== target.length - 1) {
          el.style.marginBottom = '44px';
        }
      })
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
    },

    headingClass() {
      return {
        'col--text__heading': true,
         'heading-3': !this.headingBig,
         'heading-secondary': this.headingBig,
      }
    }
  }
}
</script>

<style>

</style>