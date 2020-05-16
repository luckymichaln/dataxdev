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
        <div class="section-with-text__col col--images">
          <div
            v-if="imagesRows"
            class="col--images__rows"
          >
            <div
              v-for="(row, index) in imagesRows"
              :key="index"
              class="row"
            >
              <div
                v-for="(img, i) in row"
                :key="i"
                :class="imageClass()"
              >
                <div class="image">
                  <img
                    :src="img.section_image.url"
                    :srcset="`${img.section_image.url} 1x, ${img.section_image.url} 2x`"
                    :alt="img.section_image.alt"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            v-else
            v-for="img in images"
            :key="img.section_image.url"
            :class="imageClass()"
          >
            <div class="image">
              <img
                :src="img.section_image.url"
                :alt="img.section_image.alt"
              />
            </div>
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
    images: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      imagesRows: null,
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

    if (this.images.length > 1) {
      const rows = [];
      let row = [];

      this.images.map((img, i) => {
          row.push(img);

        if (i > 0 && !!(i % 2)) {
          rows.push(row);
          row = [];
        }
      })

      this.imagesRows = rows;
    }
  },

  methods: {
    innerClass(textPosition) {
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
    },

    imageClass() {
      return {
        'col--text__image': true,
        'col--text__image-in-row': this.imagesRows,
      }
    }
  }
}
</script>
