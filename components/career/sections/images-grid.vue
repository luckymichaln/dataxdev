<template>
  <section class="images-grid">
    <div class="container">
      <div class="images-grid__inner">
        <div
          v-for="el in images"
          :key="el.image.url"
          class="images-grid__image-box"
        >
          <div class="image">
            <img
              :src="el.image.url"
              :srcset="`${el.image.url} 1x, ${el.image.url} 2x`"
              :alt="el.image.alt"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>