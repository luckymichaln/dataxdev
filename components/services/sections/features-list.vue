<template>
  <div class="features-list">
    <div class="container">
      <div class="features-list__wrapper">
        <prismic-rich-text
          v-if="heading"
          :field="heading"
          class="heading-secondary"
        />
        <prismic-rich-text
          v-if="text"
          :field="text"
          class="text"
        />
        <div class="features-list__numbers">
          <div
            v-for="(el, index) in list"
            :key="index"
            class="numbers-el"
          >
            <div class="numbers-el__inner">
              <span>{{ index + 1 }}</span>
              <div class="el-bg"/>
            </div>
            <p class="features-list__content">{{ el.feature }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    heading: {
      type: Array,
      default: () => []
    },
    text: {
      type: Array,
      default: () => []
    }
  }
}
</script>
