<template>
  <div class="recruitment-col">
    <div class="col-number">
      <span>{{ index + 1 }}</span>
      <div class="el-bg"/>
    </div>
    <div class="col-info">
      <img
        :src="col.column_image.url"
        :alt="col.column_image.alt"
        class="col-image"
      />
      <p class="col-text">{{ col.column_title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
    col: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
