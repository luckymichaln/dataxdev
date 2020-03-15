<template>
  <section class="services-hero">
    <div class="content">
      <header class="services-hero__header">
        <div class="header-heading__wrapper">
          <prismic-rich-text
            :field="heading"
            class="header-heading heading-primary"
          />
          <div class="header-heading-badge">
            <img
              v-if="pageType.toLowerCase().split(' ')[0] === 'ios'"
              src="~assets/static/icons/services/badge_ios.png"
              srcset="~assets/static/icons/services/badge_ios.png 1x, ~assets/static/icons/services/badge_ios@2x.png 2x"
              alt="Technology logotype"
            />
            <img
              v-if="pageType.toLowerCase().split(' ')[0] === 'android'"
              src="~assets/static/icons/services/badge_android.png"
              srcset="~assets/static/icons/services/badge_android.png 1x, ~assets/static/icons/services/badge_android@2x.png 2x"
              alt="Technology logotype"
            />
            <img
              v-if="pageType.toLowerCase().split(' ')[0] === '.net'"
              src="~assets/static/icons/services/badge_dotnet.png"
              srcset="~assets/static/icons/services/badge_dotnet.png 1x, ~assets/static/icons/services/badge_dotnet@2x.png 2x"
              alt="Technology logotype"
            />
            <img
              v-if="pageType.toLowerCase().split(' ')[0] === 'java'"
              src="~assets/static/icons/services/badge_java.png"
              srcset="~assets/static/icons/services/badge_java.png 1x, ~assets/static/icons/services/badge_java@2x.png 2x"
              alt="Technology logotype"
            />
          </div>
        </div>
        <prismic-rich-text
          :field="text"
          class="header-text text"
        />
      </header>
      <div class="services-hero__image">
        <img
          :src="image.url"
          :alt="image.alt"
        />
      </div>
    </div>
  </section>
</template>

<script>
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
    image: {
      type: Object,
      default: () => {}
    },
    theme: String,
    pageType: String
  },

  methods: {
    stopColor(theme) {
      switch (theme.toLowerCase()) {
        case 'green':
          return '#E7FBF4'
        case 'red':
          return '#FFECEC'
        case 'yellow':
          return '#FFF3E4'
        case 'blue':
          return '#F0F7FD'
        default:
          return '#F0F7FD'
      }
    },

    // techImgSrc(pageType) {
    //   console.log(pageType.toLowerCase().split(' ')[0])
    //   // const type = ;
    //   switch (pageType.toLowerCase()) {
    //     case 'ios':
    //       return '~assets/static/icons/services/badge_ios@2x.png'
    //     case '.net':
    //       return '~/assets/static/icons/services/badge_dotnet@2x.png'
    //     case 'java':
    //       return '~/assets/static/icons/services/badge_java@2x.png'
    //     case 'android':
    //       return '~/assets/static/icons/services/badge_android@2x.png'
    //     default:
    //       return '~/assets/static/icons/services/badge_ios@2x.png'
    //   }
    // }
  }
}
</script>