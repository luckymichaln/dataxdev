<template>
  <div class="features-list">
    <div class="container">
      <div class="features-list__wrapper">
        <div class="features-list__numbers">
          <div
            v-for="(el, index) in list"
            :key="index"
            class="numbers-el"
          >
            <span>{{ index + 1 }}</span>
            <div class="el-bg"/>
          </div>
        </div>
        <prismic-rich-text
          :field="list"
          class="features-list__content"
        />
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
    }
  }
}
</script>
