<template>
  <section class='numbers'>
    <div class="container">
      <prismic-rich-text
        :field="heading"
        class="numbers__header"
      />
      <div class="numbers__bricks">
        <div class="brick"
          v-for="(brick, index) in bricks"
          :key="index"
        >
          <div :class="brickClass(brick.brick_type)">
          </div>
          <p class="brick-number">{{ brick.brick_number }}<span>{{ brick.brick_symbol }}</span></p>
          <p class='brick-text'>{{ brick.brick_label }}</p>
        </div>
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
    bricks: {
      type: Array,
      default: () => []
    },
  },

  methods: {
    brickClass(type) {
      return {
        'brick-image': true,
        'brick-image--projects': type.toLowerCase() === 'projects',
        'brick-image--business': type.toLowerCase() === 'business',
        'brick-image--countries': type.toLowerCase() === 'countries',
        'brick-image--customers': type.toLowerCase() === 'customers',
      }
    }
  }
}
</script>

<style>

</style>